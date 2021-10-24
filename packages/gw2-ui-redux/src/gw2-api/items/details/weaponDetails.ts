import GW2ApiAttribute from '../../common/attribute'
import GW2ApiDamageType from '../../common/damageType'
import GW2ApiInfusionSlotFlag from '../../common/infusionSlotFlag'
import GW2ApiWeaponType from '../../common/weaponType'

export interface GW2ApiWeaponDetailsInflusionSlots {
  flags: GW2ApiInfusionSlotFlag[]
  item_id?: number
}

export interface GW2ApiWeaponDetailsInfixUpgradeAttribute {
  attribute: GW2ApiAttribute[]
  modifier: number
}

//TODO could be a common type
export interface GW2ApiWeaponDetailsBuff {
  skill_id: number
  description: string
}

export interface GW2ApiWeaponDetailsInfixUpgrade {
  id: number
  attributes: GW2ApiWeaponDetailsInfixUpgradeAttribute[]
  buff?: GW2ApiWeaponDetailsBuff
}

interface GW2ApiWeaponDetails {
  type: GW2ApiWeaponType
  damage_type: GW2ApiDamageType
  min_power: number
  max_power: number
  defense: number
  infusion_slots: GW2ApiWeaponDetailsInflusionSlots[]
  attribute_adjustment: number
  infix_upgrade?: GW2ApiWeaponDetailsInfixUpgrade
  suffix_item_id?: number
  secondary_suffix_item_id: string
  stat_choices?: number[]
}

export default GW2ApiWeaponDetails
