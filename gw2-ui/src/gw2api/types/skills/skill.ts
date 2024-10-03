import type GW2ApiFact from '../common/fact';

import type GW2ApiTraitedFact from '../common/traited_fact';
import type GW2ApiProfession from '../common/profession';

import { type GW2ApiOneHandedWeaponType } from '../common/weaponType';
import type GW2ApiWeaponType from '../common/weaponType';
import {
  type GW2ApiSkillAttunement,
  type GW2ApiSkillCategory,
  type GW2ApiSkillFlag,
  type GW2ApiSkillSlot,
  type GW2ApiSkillType,
} from './enums';

export default interface GW2ApiSkill {
  id: number;
  name: string;
  description?: string;
  icon?: string;
  chat_link: string;

  // facts
  flags?: GW2ApiSkillFlag[];
  facts?: GW2ApiFact[];
  traited_facts?: GW2ApiTraitedFact[];
  cost?: number;
  initiative?: number;

  // categories
  professions?: GW2ApiProfession[];
  specialization?: number;
  type?: GW2ApiSkillType;
  categories?: GW2ApiSkillCategory[];

  // Weapons and slots
  weapon_type?: GW2ApiWeaponType | 'None';
  slot?: GW2ApiSkillSlot;
  dual_wield?: GW2ApiOneHandedWeaponType | 'None' | 'Nothing';
  attunement?: GW2ApiSkillAttunement;
  dual_attunement?: GW2ApiSkillAttunement;

  // related skills
  flip_skill?: number;
  next_chain?: number;
  prev_chain?: number;
  transform_skills?: number[];
  bundle_skills?: number[];
  toolbelt_skill?: number;
  subskills?: {
    id: number;
    attunement?: GW2ApiSkillAttunement;
    form?: 'CelestialAvatar';
  }[];
}
