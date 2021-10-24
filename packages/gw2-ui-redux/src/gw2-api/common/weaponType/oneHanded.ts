const ONE_HANDED_WEAPON_TYPES = [
  'Axe',
  'Dagger',
  'Mace',
  'Pistol',
  'Scepter',
  'Sword',
  'Focus',
  'Shield',
  'Torch',
  'Warhorn',
] as const
type GW2ApiOneHandedWeaponType = typeof ONE_HANDED_WEAPON_TYPES[number]

export default GW2ApiOneHandedWeaponType
