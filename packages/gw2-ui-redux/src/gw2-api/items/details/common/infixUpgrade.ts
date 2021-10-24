import GW2ApiAttribute from '../../../common/attribute'

export interface GW2ApiInfixUpgradeAttribute {
  attribute: GW2ApiAttribute[]
  modifier: number
}

export interface GW2ApiBuff {
  skill_id: number
  description: string
}

interface GW2ApiInfixUpgrade {
  id: number
  attributes: GW2ApiInfixUpgradeAttribute[]
  buff?: GW2ApiBuff
}

export default GW2ApiInfixUpgrade
