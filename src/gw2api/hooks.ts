import * as React from 'react';

import APICache, { Id } from './cache';
import GW2ApiSkill from 'gw2-ui-redux/src/gw2-api/skill';

const CACHE = new APICache<GW2ApiSkill>('/v2/skills', 200, 3);

export function useSkills(ids: Id[]) {
  let [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  return CACHE.get(ids, forceRedraw);
}

export function useSkill(id: Id): GW2ApiSkill | 'LOADING' | 'ERROR' {
  let [, forceRedraw] = React.useReducer((i) => i + 1, 0);

  let res = CACHE.get([id], forceRedraw);
  let skill = res.get(id);
  if (skill === undefined) return 'LOADING';
  else if (skill === null) return 'ERROR';
  return skill;
}
