import * as React from 'react';

import APICache, { APILanguage, Id } from './cache';
import { GW2ApiSkill } from './types/skills/skill';
import GW2ApiTrait from './types/traits/trait';

const APILanguageContext = React.createContext<APILanguage>('en');

export const APILanguageProvider = APILanguageContext.Provider;

function getCache<T extends { id: number }>(
  record: Partial<Record<APILanguage, APICache<T>>>,
  path: string,
  language: APILanguage,
  max_ids_per_request?: number,
  max_concurrent_requests?: number,
): APICache<T> {
  let cache = record[language];
  if (!cache) {
    cache = new APICache<T>(
      path,
      language,
      max_ids_per_request,
      max_concurrent_requests,
    );
    record[language] = cache;
  }
  return cache;
}

const CACHE_SKILLS: Partial<Record<APILanguage, APICache<GW2ApiSkill>>> = {};
function skillCache(lang: APILanguage) {
  return getCache(CACHE_SKILLS, '/v2/skills', lang, 200, 3);
}

export function useSkills(ids: Id[]) {
  const lang = React.useContext(APILanguageContext);
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return skillCache(lang).getMultiple(ids, forceRedraw);
}

export function useSkill(id: Id) {
  const lang = React.useContext(APILanguageContext);
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return skillCache(lang).getOne(id, forceRedraw);
}

const CACHE_TRAITS: Partial<Record<APILanguage, APICache<GW2ApiTrait>>> = {};
function traitCache(lang: APILanguage) {
  return getCache(CACHE_TRAITS, '/v2/traits', lang, 200, 3);
}

export function useTraits(ids: Id[]) {
  const lang = React.useContext(APILanguageContext);
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return traitCache(lang).getMultiple(ids, forceRedraw);
}

export function useTrait(id: Id) {
  const lang = React.useContext(APILanguageContext);
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return traitCache(lang).getOne(id, forceRedraw);
}
