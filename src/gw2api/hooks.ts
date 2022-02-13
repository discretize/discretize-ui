import * as React from 'react';

import APICache, { Id } from './cache';
import { GW2ApiSkill } from './types/skills/skill';

const CACHE = new APICache<GW2ApiSkill>('/v2/skills', 200, 3);

export function useSkills(ids: Id[]) {
  let [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return CACHE.getMultiple(ids, forceRedraw);
}

export function useSkill(id: Id) {
  let [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return CACHE.getOne(id, forceRedraw);
}
