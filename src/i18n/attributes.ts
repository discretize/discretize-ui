import { Translation } from '.';
import { AttributeTypes } from '../data/attributes';

export const TRANSLATIONS_ATTRIBUTES: Record<AttributeTypes, Translation> = {
  Power: { de: 'Kraft' },
  Precision: { de: 'Präzision' },
  Toughness: { de: 'Zähigkeit' },
  Vitality: { de: 'Vitalität' },
  Concentration: { de: 'Konzentration' },
  'Condition Damage': { de: 'Zustandsschaden' },
  Expertise: { de: 'Fachkenntnis' },
  Ferocity: { de: 'Wildheit' },
  'Healing Power': { de: 'Heilkraft' },
  Armor: { de: 'Rüstung' },
  'Boon Duration': { de: 'Segensdauer' },
  'Critical Chance': { de: 'Kritische Trefferchance' },
  'Critical Damage': { de: 'Kritischer Schaden' },
  'Condition Duration': { de: 'Zustandsdauer' },
  Health: { de: 'Lebenspunkte' },
  'Agony Resistance': { de: 'Qual-Widerstand' },
  'Gold Find': { de: 'Goldgespür' },
  'Karma Gain': { de: 'Karmazuwachs' },
  'Magic Find': { de: 'Magisches Gespür' },
  'XP Gain': { de: 'EP-Zuwachs' },
};

export const TRANSLATIONS_ATTRIBUTE_DESCRIPTIONS: Record<
  AttributeTypes,
  Translation
> = {
  Power: { en: 'Increases attack', de: 'Erhöht den Angriff' },
  Precision: { en: 'Increases critical-hit chance', de: 'Erhöht die Chance auf kritische Treffer' },
  Toughness: { en: 'Increases armor', de: 'Erhöht die Rüstung' },
  Vitality: { en: 'Increases maximum health', de: 'Erhöht die maximalen Lebenspunkte' },
  Concentration: { en: 'Increases Your Boon Duration', de: 'Erhöht Eure Segensdauer' },
  'Condition Damage': { en: 'Increases condition damage', de: 'Erhöht Zustandsschaden' },
  Expertise: { en: 'Increases Your Condition Duration', de: 'Erhöht Eure Zustandsdauer' },
  Ferocity: { en: 'Increases critical damage.', de: 'Erhöht den kritischen Schaden' },
  'Healing Power': { en: 'Increases healing power', de: 'Erhöht Heilfähigkeiten' },
  Armor: { en: 'Combines item defense and toughness; reduces incoming damage', de: 'Fasst Ausrüstungsverteidigung und Zähigkeit zusammen; reduziert erlittenen Schaden' },
  'Boon Duration': { en: 'Increases duration of your applied boons', de: 'Erhöht die Dauer Eurer verwendeten Segen' },
  'Critical Chance': { en: 'Chance to deal critical-hit damage', de: 'Chance, kritischen Trefferschaden zu verursachen' },
  'Critical Damage': {
    en: 'Percentage of additional damage inflicted by dealing a critical hit.',
	de: 'Prozentsatz des zusätzlichen Schadens, der bei einem kritischen Treffer zugefügt wird'
  },
  'Condition Duration': { en: 'Increases duration of your applied conditions', de: 'Erhöht die Dauer Eurer verwendeten Zustände' },
  Health: { en: 'Increased by vitality', de: 'Werden durch Vitalität erhöht' },
  'Agony Resistance': { en: 'Reduces agony damage', de: 'Reduziert Qual-Schaden' },
  'Gold Find': {
    en: 'Increases the amount of gold gained from killing enemies.',
	de: 'Erhöht die Menge an Gold, die Ihr für das Besiegen von Feinden erhaltet.'
  },
  'Karma Gain': {
    en: 'Increases the amount of karma gained from completing events.',
	de: 'Erhöht die Menge an Karma, die Ihr für das Abschließen von Events erhaltet.'
  },
  'Magic Find': { en: 'Increases chance to find rare items', de: 'Erhöht die Chance, seltene Gegenstände zu finden' },
  'XP Gain': {
    en: 'Increases the amount of experience gained from killing enemies.',
	de: 'Erhöht die Menge an Erfahrungspunkten, die Ihr für das Besiegen von Feinden erhaltet.'
  },
};
