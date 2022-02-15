import * as React from 'react';

import APICache, { APILanguage, Id } from './cache';
import { GW2ApiSkill } from './types/skills/skill';

const APILanguageContext = React.createContext<APILanguage>('en');

export const APILanguageProvider = APILanguageContext.Provider;

const CACHES_SKILLS: Partial<Record<APILanguage, APICache<GW2ApiSkill>>> = {};
function skillCache(lang: APILanguage): APICache<GW2ApiSkill> {
  let cache = CACHES_SKILLS[lang];
  if (!cache) {
    cache = new APICache<GW2ApiSkill>('/v2/skills', lang, 200, 3);
    CACHES_SKILLS[lang] = cache;
  }
  return cache;
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
