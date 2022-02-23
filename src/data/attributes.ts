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

const ATTRIBUTES: Record<
  AttributeCategory,
  Partial<Record<AttributeTypes, string>>
> = {
  Primary: {
    Power: 'Increases attack',
    Precision: 'Increases critical-hit chance',
    Toughness: 'Increases armor',
    Vitality: 'Increases maximum health',
  },
  Secondary: {
    Concentration: 'Increases Your Boon Duration',
    'Condition Damage': 'Increases condition damage',
    Expertise: 'Increases Your Condition Duration',
    Ferocity: 'Increases critical damage.',
    'Healing Power': 'Increases healing power',
  },
  Derived: {
    Armor: 'Combines item defense and toughness; reduces incoming damage',
    'Boon Duration': 'Increases duration of your applied boons',
    'Critical Chance': 'Chance to deal critical-hit damage',
    'Critical Damage':
      'Percentage of additional damage inflicted by dealing a critical hit.',
    'Condition Duration': 'Increases duration of your applied conditions',
    Health: 'Increased by vitality',
  },
  Special: {
    'Agony Resistance': 'Reduces agony damage',
    'Gold Find': 'Increases the amount of gold gained from killing enemies.',
    'Karma Gain':
      'Increases the amount of karma gained from completing events.',
    'Magic Find': 'Increases chance to find rare items',
    'XP Gain':
      'Increases the amount of experience gained from killing enemies.',
  },
};
export default ATTRIBUTES;
