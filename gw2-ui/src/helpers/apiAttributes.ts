import GW2ApiAttribute from '../gw2api/types/common/attribute';
// eslint-disable-next-line import/prefer-default-export
export const apiAttributes: Record<GW2ApiAttribute | 'None', string> = {
  Power: 'Power',
  Precision: 'Precision',
  Toughness: 'Toughness',
  Vitality: 'Vitality',
  BoonDuration: 'Concentration',
  ConditionDamage: 'Condition Damage',
  ConditionDuration: 'Expertise',
  CritDamage: 'Ferocity',
  Healing: 'Healing Power',
  AgonyResistance: 'Agony Resistance',
  None: 'No Attribute',
};
