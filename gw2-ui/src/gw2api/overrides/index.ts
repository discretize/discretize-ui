import type GW2ApiItem from '../types/items/item';
import type GW2ApiSkill from '../types/skills/skill';
import type GW2ApiSpecialization from '../types/specialization/specialization';
import type GW2ApiTrait from '../types/traits/trait';
import type { Override } from '../cache';
import { fixFactsInSkill, fixFactsInTrait } from './skill_facts';
import { fixSkillTypes } from './skill_types';

export const SKILL_OVERRIDES: Override<GW2ApiSkill>[] = [
  fixFactsInSkill,
  fixSkillTypes,
];

export const TRAIT_OVERRIDES: Override<GW2ApiTrait>[] = [fixFactsInTrait];

export const ITEM_OVERRIDES: Override<GW2ApiItem>[] = [];
export const SPECIALIZATION_OVERRIDES: Override<GW2ApiSpecialization>[] = [];
