import * as React from 'react';

import APICache, { APILanguage, API_LANGUAGES, Id } from './cache';
import GW2ApiItem from './types/items/item';
import { GW2ApiSkill } from './types/skills/skill';
import GW2ApiSpecialization from './types/specialization/specialization';
import GW2ApiTrait from './types/traits/trait';

function isAPILanguage(l: string): l is APILanguage {
  return API_LANGUAGES.indexOf(l) >= 0;
}

function getNavigatorDefaultLanguage(): APILanguage {
  if (typeof navigator === 'undefined') return 'en';
  const languages = navigator.languages || [navigator.language];
  for (let l of languages) {
    l = l.split('-')[0].toLowerCase(); // en-US -> en
    if (isAPILanguage(l)) return l;
  }

  return 'en';
}

const APILanguageContext = React.createContext<APILanguage>(
  getNavigatorDefaultLanguage(),
);

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
  return getCache(CACHE_SKILLS, '/v2/skills', lang, 200, 1);
}

// Skills
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

// Traits
const CACHE_TRAITS: Partial<Record<APILanguage, APICache<GW2ApiTrait>>> = {};
function traitCache(lang: APILanguage) {
  return getCache(CACHE_TRAITS, '/v2/traits', lang, 200, 1);
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

// Items
const CACHE_ITEMS: Partial<Record<APILanguage, APICache<GW2ApiItem>>> = {};
function itemCache(lang: APILanguage) {
  return getCache(CACHE_ITEMS, '/v2/items', lang, 200, 2);
}

export function useItems(ids: Id[]) {
  const lang = React.useContext(APILanguageContext);
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return itemCache(lang).getMultiple(ids, forceRedraw);
}

export function useItem(id: Id) {
  const lang = React.useContext(APILanguageContext);
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return itemCache(lang).getOne(id, forceRedraw);
}

// Specializations
const CACHE_SPECIALIZATIONS: Partial<
  Record<APILanguage, APICache<GW2ApiSpecialization>>
> = {};
function specializationCache(lang: APILanguage) {
  return getCache(CACHE_SPECIALIZATIONS, '/v2/specializations', lang, 200, 2);
}

export function useSpecializations(ids: Id[]) {
  const lang = React.useContext(APILanguageContext);
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return specializationCache(lang).getMultiple(ids, forceRedraw);
}

export function useSpecialization(id: Id) {
  const lang = React.useContext(APILanguageContext);
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return specializationCache(lang).getOne(id, forceRedraw);
}
