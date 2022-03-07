import { Translation } from '.';
import { CommonEffectTypes } from '../data/commonEffects';

export const COMMON_EFFECTS: Record<CommonEffectTypes, Translation> = {
  Agony: {},
  Barrier: {},
  Blight: {},
  Exposed: {},
  Invulnerability: {},
  Revealed: {},
  'Rigorous Certainty': {},
  Stealth: {},
  'Stun Break': {},
  Superspeed: {},
};

export const COMMON_EFFECTS_DESCRIPTIONS: Record<
  CommonEffectTypes,
  Translation
> = {
  Agony: {
    en: 'Deals damage every second; stacks intensity; reduces incoming healing and barrier application by 70% per stack; damage is reduced by agony resistance.',
  },
  Barrier: {
    en: 'Creates a health barrier that takes damage prior to the health bar.',
  },
  Blight: {
    en: 'Reduces your maximum health. Stacks intensity.',
  },
  Exposed: {
    en: 'Takes additional damage.',
  },
  Invulnerability: {
    en: 'Immune to conditions and damage.',
  },
  Revealed: { en: 'You cannot stealth' },
  'Rigorous Certainty': {
    en: '+5 Agony Resistance\nThe next time you would be downed, instead heal 25% of your total health.',
  },
  Stealth: { en: 'Currently invisible. Ends if you deal damage.' },
  'Stun Break': { en: 'Breaks stun.' },
  Superspeed: { en: 'Movement speed is greatly increased.' },
};
