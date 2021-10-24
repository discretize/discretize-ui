import GW2ApiGameType from '../common/gameType'
import GW2ApiItemDetails from './details/details'
import GW2ApiItemRarity from './rarity'
import GW2ApiItemType from './type'
import GW2ApiRestriction from './restriction'

export type GW2ApiUpgradeMethod = 'Attunement' | 'Infusion'

export interface GW2ApiUpgradedItem {
  upgrade: GW2ApiUpgradeMethod
  item_id: number
}

interface GW2ApiItem {
  id: number
  chat_link: string
  name: string
  icon?: string
  description?: string
  type: GW2ApiItemType
  rarity: GW2ApiItemRarity
  level: number
  vendor_value: number
  default_skin?: number
  flags: GW2ApiGameType[]
  restrictions: GW2ApiRestriction[]
  upgrades_into?: GW2ApiUpgradedItem
  upgrades_from?: GW2ApiUpgradedItem[]
  details?: GW2ApiItemDetails
}

export default GW2ApiItem
