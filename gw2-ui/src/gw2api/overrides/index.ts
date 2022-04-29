import type GW2ApiItem from '../types/items/item';
import type GW2ApiSkill from '../types/skills/skill';
import type GW2ApiSpecialization from '../types/specialization/specialization';
import type GW2ApiTrait from '../types/traits/trait';
import type { Override } from '../cache';
import { fixMissingSkills } from './skill_missing';
import { fixFactsInSkill, fixFactsInTrait } from './skill_facts';
import { fixSkillTypes } from './skill_types';
import { fixAscendedConsumable } from './item_ascended_consumables';
import { fixMissingTraitDescriptions } from './trait_missing_descriptions';

export const SKILL_OVERRIDES: Override<GW2ApiSkill>[] = [
  fixMissingSkills,
  fixFactsInSkill,
  fixSkillTypes,
];

export const TRAIT_OVERRIDES: Override<GW2ApiTrait>[] = [
  fixFactsInTrait,
  fixMissingTraitDescriptions,
];

export const ITEM_OVERRIDES: Override<GW2ApiItem>[] = [fixAscendedConsumable];
export const SPECIALIZATION_OVERRIDES: Override<GW2ApiSpecialization>[] = [];
