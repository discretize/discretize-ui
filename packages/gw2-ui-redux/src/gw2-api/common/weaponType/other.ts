const OTHER_WEAPON_TYPES = [
  'LargeBundle',
  'SmallBundle',
  'Toy',
  'ToyTwoHanded',
] as const
type GW2ApiOtherWeaponType = typeof OTHER_WEAPON_TYPES[number]

export default GW2ApiOtherWeaponType
