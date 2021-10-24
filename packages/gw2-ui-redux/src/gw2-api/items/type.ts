const TYPES = [
  'Armor',
  'Back',
  'Bag',
  'Consumable',
  'Container',
  'CraftingMaterial',
  'Gathering',
  'Gizmo',
  'Key',
  'MiniPet',
  'Tool',
  'Trait',
  'Trinket',
  'Trophy',
  'UpgradeComponent',
  'Weapon',
] as const
type GW2ApiItemType = typeof TYPES[number]

export default GW2ApiItemType
