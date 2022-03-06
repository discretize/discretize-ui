import { Translation } from '.';
import { AuraTypes } from '../data/auras';

export const TRANSLATIONS_AURAS: Record<AuraTypes, Translation> = {
  Chaos: {},
  Dark: {},
  Fire: {},
  Frost: {},
  Light: {},
  Magnetic: {},
  Shocking: {},
};

export const TRANSLATIONS_AURA_DESCRIPTIONS: Record<AuraTypes, Translation> = {
  Chaos: {
    en: 'Give yourself random boons and your foe random conditions whenever you are struck.',
  },
  Dark: {
    en: 'Surrounded by a dark aura that reduces incoming condition damage and causes torment each time you are struck (1-second cooldown per attacker).',
  },
  Fire: {
    en: 'Enveloped in a fiery shield that burns foes, grants might each time you are struck (1-second cooldown per attacker).',
  },
  Frost: {
    en: 'Chill foes that strike you (only once per second for each attacker); incoming damage is reduced by 10%.',
  },
  Light: {
    en: 'When struck, you gain resolution. Incoming condition damage is reduced by 10%. (Cooldown 1s)',
  },
  Magnetic: { en: 'Reflect projectiles with magnetic energy.' },
  Shocking: {
    en: 'Stun nearby attacking foes with an electric shock (only once per 2 seconds for each attacker).',
  },
};
