const ARMOR_TYPES = ['HeavyArmor', 'MediumArmor', 'LightArmor'] as const
type GW2ApiArmorType = typeof ARMOR_TYPES[number]

export default GW2ApiArmorType
