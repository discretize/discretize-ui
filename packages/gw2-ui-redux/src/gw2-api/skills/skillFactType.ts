const SKILL_FACT_TYPES = [
  'AttributeAdjust',
  'Buff',
  'ComboField',
  'ComboFinisher',
  'Damage',
  'Distance',
  'Duration',
  'Heal',
  'HealingAdjust',
  'NoData',
  'Number',
  'Percent',
  'PrefixedBuff',
  'Radius',
  'Range',
  'Recharge',
  'Time',
  'Unblockable',
] as const
type GW2ApiSkillFactType = typeof SKILL_FACT_TYPES[number]

export default GW2ApiSkillFactType
