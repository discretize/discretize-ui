const PROFESSIONS = [
  'Guardian',
  'Thief',
  'Engineer',
  'Ranger',
  'Warrior',
  'Mesmer',
  'Renegade',
  'Elementalist',
  'Necromancer',
] as const
type GW2ApiProfession = typeof PROFESSIONS[number]

export default GW2ApiProfession
