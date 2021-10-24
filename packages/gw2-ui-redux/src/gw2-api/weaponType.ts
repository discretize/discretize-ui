const WEAPON_TYPES = [
  // Reference: https://wiki.guildwars2.com/wiki/API:2/items#Weapon
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
  'Greatsword',
  'Hammer',
  'LongBow',
  'Rifle',
  'ShortBow',
  'Staff',
  'Harpoon',
  'Speargun',
  'Trident',
  'LargeBundle',
  'SmallBundle',
  'Toy',
  'ToyTwoHanded',
  'None',
] as const
type GW2ApiWeaponType = typeof WEAPON_TYPES[number]

export default GW2ApiWeaponType
