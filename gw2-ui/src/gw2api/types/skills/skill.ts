import GW2ApiFact from '../common/fact';

import GW2ApiTraitedFact from '../common/traited_fact';
import GW2ApiProfession from '../common/profession';

import GW2ApiWeaponType, {
  GW2ApiOneHandedWeaponType,
} from '../common/weaponType';

// TODO
type GW2ApiSkillCategory = string;
type GW2ApiSkillCategory_ =
  | 'DualWield'
  | 'StealthAttack'
  | 'Signet'
  | 'Cantrip'
  | 'Elixir'
  | 'Conjure'
  | 'Arcane';

type GW2ApiSkillType =
  | 'Bundle'
  | 'Elite'
  | 'Heal'
  | 'Profession'
  | 'Utility'
  | 'Weapon'
  | 'Toolbelt'
  | 'Pet'
  | 'Monster'
  | 'Transform';

type GW2ApiSkillAttunement = 'Fire' | 'Water' | 'Air' | 'Earth';

type GW2ApiSkillFlag = 'GroundTargeted' | 'NoUnderwater';

type GW2ApiSkillSlot =
  | 'Weapon_1'
  | 'Weapon_2'
  | 'Weapon_3'
  | 'Weapon_4'
  | 'Weapon_5'
  | 'Heal'
  | 'Utility'
  | 'Elite'
  | 'Downed_1'
  | 'Downed_2'
  | 'Downed_3'
  | 'Downed_4'
  | 'Profession_1'
  | 'Profession_2'
  | 'Profession_3'
  | 'Profession_4'
  | 'Profession_5'
  | 'Pet'
  | 'Toolbelt'
  | 'Transform_1';

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
