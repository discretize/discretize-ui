const CONSUMABLE_TYPES = [
  'AppearanceChange',
  'Booze',
  'ContractNpc',
  'Currency',
  'Food',
  'Generic',
  'Halloween',
  'Immediate',
  'MountRandomUnlock',
  'RandomUnlock',
  'Transmutation',
  'Unlock',
  'UpgradeRemoval',
  'Utility',
  'TeleportToFriend',
] as const
type GW2ApiConsumableType = typeof CONSUMABLE_TYPES[number]

export default GW2ApiConsumableType
