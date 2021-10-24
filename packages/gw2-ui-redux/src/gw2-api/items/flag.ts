const FLAGS = [
  'AccountBindOnUse',
  'AccountBound',
  'Attuned',
  'BulkConsume',
  'DeleteWarning',
  'HideSuffix',
  'Infused',
  'MonsterOnly',
  'NoMysticForge',
  'NoSalvage',
  'NoSell',
  'NotUpgradeable',
  'NoUnderwater',
  'SoulbindOnAcquire',
  'SoulBindOnUse',
  'Tonic',
  'Unique',
] as const
type GW2ApiItemFlag = typeof FLAGS[number]

export default GW2ApiItemFlag
