const ARMOR_SLOT_TYPES = [
  'Boots',
  'Coat',
  'Gloves',
  'Helm',
  'HelmAquatic',
  'Leggings',
  'Shoulders',
] as const
type GW2ApiArmorSlotType = typeof ARMOR_SLOT_TYPES[number]

export default GW2ApiArmorSlotType
