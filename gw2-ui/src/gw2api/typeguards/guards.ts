import { createAssertEquals } from 'typia';

import type GW2ApiItem from '../types/items/item';
import type GW2ApiSkill from '../types/skills/skill';
import type GW2ApiSpecialization from '../types/specialization/specialization';
import type GW2ApiTrait from '../types/traits/trait';

export const isGW2ApiItem = createAssertEquals<GW2ApiItem>();
export const isGW2ApiSkill = createAssertEquals<GW2ApiSkill>();
export const isGW2ApiSpecialization =
  createAssertEquals<GW2ApiSpecialization>();
export const isGW2ApiTrait = createAssertEquals<GW2ApiTrait>();

export * from '../overrides/index';
