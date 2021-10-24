import GW2ApiDamageType from '../../common/damageType'
import GW2ApiWeaponType from '../../common/weaponType'
import GW2ApiInfixUpgrade from './common/infixUpgrade'
import GW2ApiInflusionSlot from './common/infusionSlot'

interface GW2ApiWeaponDetails {
  type: GW2ApiWeaponType
  damage_type: GW2ApiDamageType
  min_power: number
  max_power: number
  defense: number
  infusion_slots: GW2ApiInflusionSlot[]
  attribute_adjustment: number
  infix_upgrade?: GW2ApiInfixUpgrade
  suffix_item_id?: number
  secondary_suffix_item_id: string
  stat_choices?: number[]
}

export default GW2ApiWeaponDetails
