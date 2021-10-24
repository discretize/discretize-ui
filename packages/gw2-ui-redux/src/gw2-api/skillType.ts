const SKILL_TYPES = [
  'Bundle',
  'Elite',
  'Heal',
  'Profession',
  'Utility',
  'Weapon',
] as const
type GW2ApiSkillType = typeof SKILL_TYPES[number]

export default GW2ApiSkillType
