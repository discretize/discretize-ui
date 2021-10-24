const FLAGS = ['GroundTargeted', 'NoUnderwater'] as const
type GW2ApiSkillFlag = typeof FLAGS[number]

export default GW2ApiSkillFlag
