export type AttributeCategory = 'Primary' | 'Secondary' | 'Derived' | 'Special';
export type AttributeTypes =
  | 'Power'
  | 'Precision'
  | 'Toughness'
  | 'Vitality'
  | 'Concentration'
  | 'Condition Damage'
  | 'Expertise'
  | 'Ferocity'
  | 'Healing Power'
  | 'Armor'
  | 'Boon Duration'
  | 'Critical Chance'
  | 'Critical Damage'
  | 'Condition Duration'
  | 'Health'
  | 'Agony Resistance'
  | 'Gold Find'
  | 'Karma Gain'
  | 'Magic Find'
  | 'XP Gain';

const ATTRIBUTES: Record<AttributeCategory, AttributeTypes[]> = {
  Primary: ['Power', 'Precision', 'Toughness', 'Vitality'],
  Secondary: [
    'Concentration',
    'Condition Damage',
    'Expertise',
    'Ferocity',
    'Healing Power',
  ],
  Derived: [
    'Armor',
    'Boon Duration',
    'Critical Chance',
    'Critical Damage',
    'Condition Duration',
    'Health',
  ],
  Special: [
    'Agony Resistance',
    'Gold Find',
    'Karma Gain',
    'Magic Find',
    'XP Gain',
  ],
};
export default ATTRIBUTES;
