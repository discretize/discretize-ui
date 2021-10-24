const AQUATIC_WEAPON_TYPES = ['Harpoon', 'Speargun', 'Trident'] as const
type GW2ApiAquaticWeaponType = typeof AQUATIC_WEAPON_TYPES[number]

export default GW2ApiAquaticWeaponType
