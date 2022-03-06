import { Translation } from '.';
import { ConditionTypes } from '../data/conditions';

export const CONDITIONS: Record<ConditionTypes, Translation> = {
  Bleeding: {},
  Blinded: {},
  Burning: {},
  Chilled: {},
  Confusion: {},
  Crippled: {},
  Fear: {},
  Immobile: {},
  Poisoned: {},
  Slow: {},
  Taunt: {},
  Torment: {},
  Vulnerability: {},
  Weakness: {},
};

export const CONDITIONS_DESCRIPTIONS: Record<ConditionTypes, Translation> = {
  Bleeding: { en: 'Deals damage every second; stacks intensity.' },
  Blinded: { en: 'Next outgoing attack misses; stacks duration.' },
  Burning: { en: 'Deals damage every second; stacks intensity.' },
  Chilled: {
    en: 'Movement speed decreased by 66%; skill cooldown increased by 66%; stacks duration.',
  },
  Confusion: { en: 'Damage received on skill activation; stacks intensity.' },
  Crippled: { en: 'Movement speed decreased by 50%; stacks duration.' },
  Fear: { en: 'Involuntary retreat; unable to act; stacks duration.' },
  Immobile: { en: 'Unable to move; stacks duration.' },
  Poisoned: {
    en: 'Deals damage every second; decreases healing effectiveness 33%; damage stacks intensity.',
  },
  Slow: { en: 'Skills and actions are slower.' },
  Taunt: { en: 'Involuntarily attack foes.' },
  Torment: {
    en: 'Deals damage every second. Deals additional damage to moving foes. Stacks intensity.',
  },
  Vulnerability: {
    en: 'Damage and condition damage taken are increased; stacks intensity.',
  },
  Weakness: {
    en: 'Endurance regeneration decreased by 50%. 50% of hits are Glancing Blows (50% damage). Stacks duration.',
  },
};
