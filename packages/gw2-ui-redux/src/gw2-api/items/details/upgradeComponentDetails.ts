import GW2ApiUpgradeComponentType from '../../common/upgradeComponentType'
import GW2ApiAquaticWeaponType from '../../common/weaponType/aquatic'
import GW2ApiOneHandedWeaponType from '../../common/weaponType/oneHanded'
import GW2ApiTwoHandedWeaponType from '../../common/weaponType/twoHanded'
import GW2ApiArmorType from '../../common/armorType'
import GW2ApiInfusionUpgradeFlag from '../../common/infusionUpgradeFlag'
import GW2ApiInfixUpgrade from './common/infixUpgrade'

export type GW2APiUpgradeComponentFlag =
  | GW2ApiOneHandedWeaponType
  | GW2ApiTwoHandedWeaponType
  | GW2ApiAquaticWeaponType
  | GW2ApiArmorType
  | 'Trinket'

interface GW2ApiUpgradeComponentDetails {
  type: GW2ApiUpgradeComponentType
  flags: GW2APiUpgradeComponentFlag[]
  infusion_upgrade_flags: GW2ApiInfusionUpgradeFlag[]
  suffix: string
  infix_upgrade: GW2ApiInfixUpgrade
  bonuses?: string[] //TODO should have its own type, not sure about the value
}

export default GW2ApiUpgradeComponentDetails
