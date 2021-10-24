const INFUSION_UPGRADE_FLAGS = [
  'Enrichment',
  'Infusion',
  'Defense',
  'Offense',
  'Utility',
  'Agony',
] as const
type GW2ApiInfusionUpgradeFlag = typeof INFUSION_UPGRADE_FLAGS[number]

export default GW2ApiInfusionUpgradeFlag
