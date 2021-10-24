const ATTRIBUTES = [
  'AgonyResistance',
  'BoonDuration',
  'ConditionDamage',
  'ConditionDuration',
  'CritDamage',
  'Healing',
  'Power',
  'Precision',
  'Toughness',
  'Vitality',
] as const
type GW2ApiAttribute = typeof ATTRIBUTES[number]

export default GW2ApiAttribute
