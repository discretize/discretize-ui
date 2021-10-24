const DAMAGE_TYPES = [
  'Fire',
  'Ice',
  'Lightning',
  'Physical',
  'Choking',
] as const
type GW2ApiDamageType = typeof DAMAGE_TYPES[number]

export default GW2ApiDamageType
