const ATTUNEMENTS = ['Fire', 'Water', 'Air', 'Earth'] as const
type GW2ApiSkillAttunement = typeof ATTUNEMENTS[number]

export default GW2ApiSkillAttunement
