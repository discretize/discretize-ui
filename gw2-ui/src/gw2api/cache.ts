import { APILanguage } from '../i18n';

interface ApiRoute {
  name: string;
  is_available: boolean;
  create_url: (path: string, ids: number[], language: APILanguage) => string;
}

const api_routes: ApiRoute[] = [
  {
    name: 'Official GW2 API',
    is_available: true,
    create_url: (path, ids, language) =>
      `https://api.guildwars2.com${path}?ids=${ids.join(',')}&lang=${language}`,
  },
  {
    name: 'Princeps API Mirror',
    is_available: true,
    create_url: (path, ids, language) =>
      `https://api.princeps.biz${path}?ids=${ids.join(',')}&lang=${language}`,
  },
];

// An error occurred when connecting to the API
export const API_ERROR_NETWORK = 500;
// The API call succeeded, but didn't return an item. This means that an item with the requested Id does not exist.
export const API_ERROR_NOT_FOUND = 404;

export type APIError = typeof API_ERROR_NETWORK | typeof API_ERROR_NOT_FOUND;

const FETCH_OPTIONS: RequestInit = {
  method: 'GET',
  mode: 'cors',
  credentials: 'omit',
  redirect: 'error',
};

// All ids used by the API are numeric, so let's name a type for readability.
export type Id = number;

// A few type guards to check API responses
function isPlainObject(o: unknown): o is Record<string, unknown> {
  return (
    typeof o === 'object' &&
    o !== null &&
    Object.getPrototypeOf(o) === Object.prototype
  );
}
function isObjectWithId(o: unknown): o is { id: Id } {
  return (
    isPlainObject(o) &&
    'id' in o &&
    typeof o.id === 'number' &&
    Number.isInteger(o.id) &&
    o.id > 0
  );
}

// Define return types for the getter methods
export type APICacheGetOneResult<T> =
  | {
      loading: true;
      error: false;
      data: null;
    }
  | {
      loading: false;
      error: APIError;
      data: null;
    }
  | {
      loading: false;
      error: false;
      data: T;
    };

export interface APICacheGetMultipleResult<T> {
  loading: boolean;
  errors: null | Record<Id, APIError>;
  data: Record<Id, T>;
}

export type Override<T extends { id: Id }> = (
  id: Id,
  item: T | undefined,
) => T | undefined | Promise<T | undefined>;

const isSSR = typeof document === 'undefined';

export default class APICache<T extends { id: Id }> {
  private path: string; // The relative URL of the API endpoint
  private language: APILanguage;
  // All known Ts returned from the API.
  private cache: Map<Id, T | APIError> = new Map();
  // For proper batching, we limit the number of concurrent requests.
  // A new request is only generated once previous requests finish.
  private requests_inflight: number = 0;
  private max_concurrent_requests: number;
  // Callbacks of everyone currently waiting for new data.
  private callbacks: Set<() => void> = new Set();
  // Ids that some client is interested in, but that aren't in the cache yet.
  private requested_ids: Set<Id> = new Set();
  // Ids that are currently being fetched from the API.
  private fetched_ids: Set<Id> = new Set();
  // We need to delay fetching for a bit to give more than one component time to tell us their needs.
  private fetch_delay_timeout: ReturnType<typeof setTimeout> | null = null;
  // Different endpoints may have different limits on the amount of items you can fetch in single request
  private max_ids_per_request: number;
  // The API is inconsistent in several places. We register methods that shall fix the issues.
  private overrides: Override<T>[] = [];

  constructor(
    path: string,
    language: APILanguage = 'en',
    max_ids_per_request: number = 200,
    max_concurrent_requests: number = 1,
  ) {
    // Normally, specifying 'private foo' as a constructor parameter should do this for us
    // But somehow that doesn't work with our current build system.
    // TODO: revisit this later
    this.path = path;
    this.language = language;
    this.max_ids_per_request = max_ids_per_request;
    this.max_concurrent_requests = max_concurrent_requests;
  }

  public getMultiple(
    ids: Id[],
    callback: () => void,
  ): APICacheGetMultipleResult<T> {
    let missing = 0;
    for (const id of ids) {
      if (!this.cache.has(id)) {
        this.requested_ids.add(id);
        missing++;
      }
    }

    if (!isSSR && missing > 0) {
      this.callbacks.add(callback);
      this.fetchLater();
    }

    const map: Record<Id, T> = {};
    let errors: Record<Id, APIError> | null = null;
    for (const id of ids) {
      const item = this.cache.get(id);
      if (item === undefined) {
        missing++;
      } else if (item === API_ERROR_NOT_FOUND || item === API_ERROR_NETWORK) {
        if (!errors) errors = {};
        errors[id] = item;
      } else {
        map[id] = item;
      }
    }
    return {
      loading: missing > 0,
      errors: errors,
      data: map,
    };
  }

  public getOne(id: Id, callback: () => void): APICacheGetOneResult<T> {
    const res = this.getMultiple([id], callback);
    const item = res.data[id];
    if (res.loading) {
      return {
        loading: true,
        error: false,
        data: null,
      };
    } else if (res.errors) {
      return {
        loading: false,
        error: res.errors[id],
        data: null,
      };
    } else if (item) {
      return {
        loading: false,
        error: false,
        data: item,
      };
    }

    // This should never happen, but typescript complains if we don't handle this case
    console.error('APICache: invalid state reached', id, res);
    return {
      loading: false,
      error: API_ERROR_NETWORK,
      data: null,
    };
  }

  private fetchLater() {
    if (this.fetch_delay_timeout) return;
    this.fetch_delay_timeout = setTimeout(
      () => {
        this.fetch_delay_timeout = null;
        this.tryFetch();
      },
      process.env.NODE_ENV === 'development' ? 1000 : 0,
    );
  }

  private async tryFetch() {
    if (this.max_concurrent_requests - this.requests_inflight < 1) {
      // We cannot send another request right now.
      // When a previous request finishes, we'll automatically try again.
      return;
    }

    // Figure out which ids we need to fetch, if any.
    if (this.requested_ids.size <= this.fetched_ids.size) {
      return;
    }
    const ids: Id[] = [];
    for (const id of this.requested_ids.values()) {
      if (!this.fetched_ids.has(id)) {
        ids.push(id);
      }
      if (ids.length >= this.max_ids_per_request) {
        break;
      }
    }

    // No ids? Good, nothing to do then.
    if (ids.length < 1) {
      return;
    }

    // We got ids and we're allowed to send another request, so let's do this.
    this.requests_inflight++;
    for (const id of ids) {
      this.fetched_ids.add(id);
    }
    let response: unknown[];
    let error: APIError = API_ERROR_NOT_FOUND;
    try {
      ids.sort((a, b) => a - b);

      const api_route =
        api_routes.find(({ is_available }) => is_available) ?? api_routes[0];

      const url = api_route.create_url(this.path, ids, this.language);
      const res = await fetch(url, FETCH_OPTIONS);

      if (res.status === 503) {
        api_route.is_available = false;
        if (api_routes.find(({ is_available }) => is_available)) {
          // If an API route is unavailable, back out and retry the same ids on an alternative route
          console.warn(
            `The ${api_route.name} is unavailable; switching API routes`,
          );
          for (const id of ids) {
            this.fetched_ids.delete(id);
          }
          this.requests_inflight--;
          this.tryFetch();
          return;
        }
      }
      if (res.status === 404) {
        // 404 usually means that none of the passed ids are known, which is equivalent to an empty response
        response = [];
      } else {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const json = await res.json();
        if (!(json instanceof Array)) {
          throw new Error('Response is not a list');
        }
        response = json;
      }
    } catch (e) {
      error = API_ERROR_NETWORK;
      response = [];
      console.error(e);
    }
    this.requests_inflight--;

    // Check our responses, and enter them into the cache.
    const returned: Record<Id, T> = {};
    for (const o of response) {
      if (!isObjectWithId(o)) {
        console.error('Response contains unexpected value', o);
        continue;
      }

      // We trust the API that the rest of the object is correct.
      // Or rather, it will be correct after we run the overrides.
      returned[o.id] = o as T;
    }

    // See if all requested ids were returned
    for (const id of ids) {
      let item: T | undefined = returned[id];
      const fixed_item = this.fixItem(id, item);
      // Do not await unless we actually get a Promise.
      // See fixItem for the rationale behind this.
      if (fixed_item instanceof Promise) {
        item = await fixed_item;
      } else {
        item = fixed_item;
      }
      if (item) {
        this.cache.set(id, item);
      } else {
        // mark missing ids as errors
        this.cache.set(id, error);
      }
      // mark the ids as fetched
      this.requested_ids.delete(id);
      this.fetched_ids.delete(id);
    }

    // The cache has changed, we need to notify all clients.
    // The clients will call get() again, and if there are items missing, their callbacks will be registered again.
    // Thus we need to clear the set beforehand, and work on a copy.
    const callbacks = [...this.callbacks];
    this.callbacks.clear();
    for (const c of callbacks) {
      try {
        c();
      } catch (e) {
        console.error('callback failed', e);
      }
    }

    // Maybe there are more unfetched ids, so let's try again
    this.tryFetch();
  }

  private fixItem(
    id: Id,
    item: T | undefined,
    start: number = 0,
  ): T | undefined | Promise<T | undefined> {
    // A note about Promises.
    // It is possible to await a non-promise, e.g.
    // let x = await 42;
    // In this case, the runtime will create a Promise that resolved to 42, yield execution to the main loop, then resume later.
    // Because we're processing a lot of items, possibly with multiple fixup functions, we want to avoid that overhead.
    // Most of the fixups won't be async anyway.

    // So we do this the hard way, without async/await. Welcome back to callback hell.

    let fixed_item = item;
    for (let i = start; i < this.overrides.length; i++) {
      const f = this.overrides[i];
      try {
        const res = f(id, fixed_item);
        if (res instanceof Promise) {
          return res.then(
            (item) => {
              return this.fixItem(id, item, i + 1);
            },
            (e) => {
              console.error('Error in async override', e);
              return fixed_item;
            },
          );
        }
        fixed_item = res;
      } catch (e) {
        console.error('Error in override', e);
      }
    }
    return fixed_item;
  }

  public addOverride(f: Override<T>) {
    this.overrides.push(f);
  }
}
