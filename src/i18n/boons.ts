import { Translation } from '.';
import { BoonsTypes } from '../data/boons';

export const TRANSLATIONS_BOONS: Record<BoonsTypes, Translation> = {
  Aegis: {},
  Alacrity: {},
  Fury: {},
  Might: {},
  Protection: {},
  Quickness: {},
  Regeneration: {},
  Resistance: {},
  Resolution: {},
  Stability: {},
  Swiftness: {},
  Vigor: {},
};

export const TRANSLATIONS_BOON_DESCRIPTIONS: Record<BoonsTypes, Translation> = {
  Aegis: { en: 'Block the next incoming attack; stacks duration.' },
  Alacrity: { en: 'Skills recharge faster.' },
  Fury: { en: 'Critical Chance increased by 20%; stacks duration.' },
  Might: { en: 'Increased outgoing damage; stacks intensity.' },
  Protection: { en: 'Incoming damage decreased by 33%; stacks duration.' },
  Quickness: { en: 'Skills and actions are faster.' },
  Regeneration: { en: 'Gain health every second; stacks duration.' },
  Resistance: {
    en: 'Nondamaging conditions currently on you are ineffective; stacks duration.',
  },
  Resolution: {
    en: 'Incoming condition damage decreased by 33%; stacks duration.',
  },
  Stability: {
    en: 'Cannot be knocked down, pushed back, pulled, launched, stunned, dazed, floated, sunk, feared or taunted.',
  },
  Swiftness: { en: 'Movement speed increased by 33%; stacks duration.' },
  Vigor: { en: 'Endurance regeneration increased by 50%; stacks duration.' },
};
