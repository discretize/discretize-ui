import { Translation } from '.';
import { ControlEffectTypes } from '../data/controlEffects';

export const CONTROL_EFFECTS: Record<ControlEffectTypes, Translation> = {
  Daze: {},
  Float: {},
  Knockback: {},
  Knockdown: {},
  Launch: {},
  Pull: {},
  Sink: {},
  Stun: {},
};

export const CONTROL_EFFECTS_DESCRIPTIONS: Record<
  ControlEffectTypes,
  Translation
> = {
  Daze: { en: 'Disables all skills for a short duration.' },
  Float: { en: 'Causes the underwater target to move upwards.' },
  Knockback: {
    en: 'Knocks back the target away and on the ground, preventing movement and actions for a short duration.',
  },
  Knockdown: {
    en: 'Knocks the target on ground, preventing movement and actions for a short duration.',
  },
  Launch: {
    en: 'Throws the target in the air over a short distance, preventing movement and actions for a short duration. Can move Downed targets.',
  },
  Pull: {
    en: 'Pulls the caster to the target or the target to a specific location and disables them for a short duration.',
  },
  Sink: { en: 'Causes the underwater target to move downwards.' },
  Stun: { en: 'Prevents movement and actions for a short duration.' },
};
