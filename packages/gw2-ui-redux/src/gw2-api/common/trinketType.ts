const TRINKET_TYPES = ['Accessory', 'Amulet', 'Ring'] as const
type GW2ApiTrinketType = typeof TRINKET_TYPES[number]

export default GW2ApiTrinketType
