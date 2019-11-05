import { fetch, cancel, fetchSuccess, fetchError } from './actions';
import { KEYS, PATHS } from './constants';
import reducer from './reducers';

const { DATA: dataKey, ERROR: errorKey, PENDING: pendingKey } = KEYS;

const expectedInitialState = Object.assign(
  ...Object.values(PATHS).map(reducerPath => ({ [reducerPath]: {} })),
);

const id = 12345;
const { ITEMS: path } = PATHS;

describe('reducers', () => {
  it('should return correct initial state', () => {
    expect(reducer(undefined, {})).toEqual(expectedInitialState);
  });

  describe('fetchReducer', () => {
    it('should return correct state for fetch action', () => {
      expect(reducer(undefined, fetch({ id, path }))).toEqual({
        ...expectedInitialState,
        [path]: {
          ...expectedInitialState[path],
          [id]: {
            [errorKey]: null,
            [pendingKey]: 1,
          },
        },
      });
    });
  });

  describe('cancelReducer', () => {
    it('should return correct state for cancel action', () => {
      expect(reducer(undefined, cancel({ id, path }))).toEqual({
        ...expectedInitialState,
        [path]: {
          ...expectedInitialState[path],
          [id]: {
            [pendingKey]: -1,
          },
        },
      });
    });
  });

  describe('fetchSuccessReducer', () => {
    it('should return correct state for fetchSuccess action', () => {
      const data = 'data';

      expect(
        reducer(undefined, fetchSuccess({ id, path, [dataKey]: data })),
      ).toEqual({
        ...expectedInitialState,
        [path]: {
          ...expectedInitialState[path],
          [id]: {
            [dataKey]: data,
            [errorKey]: null,
            [pendingKey]: -1,
          },
        },
      });
    });
  });

  describe('fetchErrorReducer', () => {
    it('should return correct state for fetchError action', () => {
      const error = {
        message: 'error',
      };

      expect(
        reducer(undefined, fetchError({ id, path, [errorKey]: error })),
      ).toEqual({
        ...expectedInitialState,
        [path]: {
          ...expectedInitialState[path],
          [id]: {
            [dataKey]: null,
            [errorKey]: error.message,
            [pendingKey]: -1,
          },
        },
      });
    });
  });
});
