import { Translation } from '.';
import { AttributeTypes } from '../data/attributes';

export const TRANSLATIONS_ATTRIBUTES: Record<AttributeTypes, Translation> = {
  Power: {},
  Precision: {},
  Toughness: {},
  Vitality: {},
  Concentration: {},
  'Condition Damage': {},
  Expertise: {},
  Ferocity: {},
  'Healing Power': {},
  Armor: {},
  'Boon Duration': {},
  'Critical Chance': {},
  'Critical Damage': {},
  'Condition Duration': {},
  Health: {},
  'Agony Resistance': {},
  'Gold Find': {},
  'Karma Gain': {},
  'Magic Find': {},
  'XP Gain': {},
};

export const TRANSLATIONS_ATTRIBUTE_DESCRIPTIONS: Record<
  AttributeTypes,
  Translation
> = {
  Power: { en: 'Increases attack' },
  Precision: { en: 'Increases critical-hit chance' },
  Toughness: { en: 'Increases armor' },
  Vitality: { en: 'Increases maximum health' },
  Concentration: { en: 'Increases Your Boon Duration' },
  'Condition Damage': { en: 'Increases condition damage' },
  Expertise: { en: 'Increases Your Condition Duration' },
  Ferocity: { en: 'Increases critical damage.' },
  'Healing Power': { en: 'Increases healing power' },
  Armor: { en: 'Combines item defense and toughness; reduces incoming damage' },
  'Boon Duration': { en: 'Increases duration of your applied boons' },
  'Critical Chance': { en: 'Chance to deal critical-hit damage' },
  'Critical Damage': {
    en: 'Percentage of additional damage inflicted by dealing a critical hit.',
  },
  'Condition Duration': { en: 'Increases duration of your applied conditions' },
  Health: { en: 'Increased by vitality' },
  'Agony Resistance': { en: 'Reduces agony damage' },
  'Gold Find': {
    en: 'Increases the amount of gold gained from killing enemies.',
  },
  'Karma Gain': {
    en: 'Increases the amount of karma gained from completing events.',
  },
  'Magic Find': { en: 'Increases chance to find rare items' },
  'XP Gain': {
    en: 'Increases the amount of experience gained from killing enemies.',
  },
};
