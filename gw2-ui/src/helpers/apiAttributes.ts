import type GW2ApiAttribute from '../gw2api/types/common/attribute';

const apiAttributes: Record<GW2ApiAttribute | 'None', string> = {
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
export default apiAttributes;
