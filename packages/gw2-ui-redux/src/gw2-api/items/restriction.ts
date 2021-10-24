const RESTRICTIONS = [
  'Asura',
  'Charr',
  'Female',
  'Human',
  'Norn',
  'Sylvari',
  'Elementalist',
  'Engineer',
  'Guardian',
  'Mesmer',
  'Necromancer',
  'Ranger',
  'Thief',
  'Warrior',
] as const
type GW2ApiRestriction = typeof RESTRICTIONS[number]

export default GW2ApiRestriction
