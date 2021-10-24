const UNLOCK_TYPES = [
  'BagSlot',
  'BankTab',
  'Champion',
  'CollectibleCapacity',
  'Content',
  'CraftingRecipe',
  'Dye',
  'GliderSkin',
  'Minipet',
  'Ms',
  'Outfit',
  'RandomUnlock',
  'SharedSlot',
] as const
type GW2ApiUnlockType = typeof UNLOCK_TYPES[number]

export default GW2ApiUnlockType
