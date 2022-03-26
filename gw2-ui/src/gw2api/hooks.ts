import * as React from 'react';
import { APILanguage, useAPILanguage } from '../i18n';

import APICache, { Id } from './cache';
import {
  ITEM_OVERRIDES,
  SKILL_OVERRIDES,
  SPECIALIZATION_OVERRIDES,
  TRAIT_OVERRIDES,
} from './overrides';
import GW2ApiItem from './types/items/item';
import GW2ApiSkill from './types/skills/skill';
import GW2ApiSpecialization from './types/specialization/specialization';
import GW2ApiTrait from './types/traits/trait';

function getCache<T extends { id: number }>(
  record: Partial<Record<APILanguage, APICache<T>>>,
  path: string,
  language: APILanguage,
  max_ids_per_request?: number,
  max_concurrent_requests?: number,
  overrides?: ((id: number, item: T | undefined) => T | undefined)[],
): APICache<T> {
  let cache = record[language];
  if (!cache) {
    cache = new APICache<T>(
      path,
      language,
      max_ids_per_request,
      max_concurrent_requests,
    );
    if (overrides) {
      for (let f of overrides) {
        cache.addOverride(f);
      }
    }
    record[language] = cache;
  }
  return cache;
}

// Skills
const CACHE_SKILLS: Partial<Record<APILanguage, APICache<GW2ApiSkill>>> = {};
function skillCache(lang: APILanguage) {
  return getCache(CACHE_SKILLS, '/v2/skills', lang, 200, 1, SKILL_OVERRIDES);
}

export function useSkills(ids: Id[]) {
  const lang = useAPILanguage();
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return skillCache(lang).getMultiple(ids, forceRedraw);
}

export function useSkill(id: Id) {
  const lang = useAPILanguage();
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return skillCache(lang).getOne(id, forceRedraw);
}

// Traits
const CACHE_TRAITS: Partial<Record<APILanguage, APICache<GW2ApiTrait>>> = {};
function traitCache(lang: APILanguage) {
  return getCache(CACHE_TRAITS, '/v2/traits', lang, 200, 1, TRAIT_OVERRIDES);
}

export function useTraits(ids: Id[]) {
  const lang = useAPILanguage();
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return traitCache(lang).getMultiple(ids, forceRedraw);
}

export function useTrait(id: Id) {
  const lang = useAPILanguage();
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return traitCache(lang).getOne(id, forceRedraw);
}

// Items
const CACHE_ITEMS: Partial<Record<APILanguage, APICache<GW2ApiItem>>> = {};
function itemCache(lang: APILanguage) {
  return getCache(CACHE_ITEMS, '/v2/items', lang, 200, 2, ITEM_OVERRIDES);
}

export function useItems(ids: Id[]) {
  const lang = useAPILanguage();
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return itemCache(lang).getMultiple(ids, forceRedraw);
}

export function useItem(id: Id) {
  const lang = useAPILanguage();
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return itemCache(lang).getOne(id, forceRedraw);
}

// Specializations
const CACHE_SPECIALIZATIONS: Partial<
  Record<APILanguage, APICache<GW2ApiSpecialization>>
> = {};
function specializationCache(lang: APILanguage) {
  return getCache(
    CACHE_SPECIALIZATIONS,
    '/v2/specializations',
    lang,
    200,
    2,
    SPECIALIZATION_OVERRIDES,
  );
}

export function useSpecializations(ids: Id[]) {
  const lang = useAPILanguage();
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return specializationCache(lang).getMultiple(ids, forceRedraw);
}

export function useSpecialization(id: Id) {
  const lang = useAPILanguage();
  const [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return specializationCache(lang).getOne(id, forceRedraw);
}
