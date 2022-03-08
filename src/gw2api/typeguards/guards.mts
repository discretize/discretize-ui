import { createAssertType } from 'typescript-is';

import GW2ApiItem from '../types/items/item';
import GW2ApiSkill from '../types/skills/skill';
import GW2ApiSpecialization from '../types/specialization/specialization';
import GW2ApiTrait from '../types/traits/trait';

export const isGW2ApiItem = createAssertType<GW2ApiItem>();
export const isGW2ApiSkill = createAssertType<GW2ApiSkill>();
export const isGW2ApiSpecialization = createAssertType<GW2ApiSpecialization>();
export const isGW2ApiTrait = createAssertType<GW2ApiTrait>();
