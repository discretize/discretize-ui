import GW2ApiConsumableType from '../../common/consumableType'
import GW2ApiUnlockType from '../../common/unlockType'

interface GW2ApiConsumableDetails {
  type: GW2ApiConsumableType
  description?: string
  duration_ms?: number
  unlock_type?: GW2ApiUnlockType
  color_id?: number
  recipe_id?: number
  extra_recipe_ids?: number[]
  guild_upgrade_id?: number
  apply_count?: number
  name?: string
  icon?: string
  skins?: number[]
}

export default GW2ApiConsumableDetails
