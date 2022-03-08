import GW2ApiUpgradeComponentType from '../../common/upgradeComponentType';
import {
  GW2ApiOtherWeaponType,
  GW2ApiWeaponTypeForItemDetails,
} from '../../common/weaponType';
import GW2ApiArmorType from '../../common/armorType';
import GW2ApiInfusionUpgradeFlag from '../../common/infusionUpgradeFlag';
import GW2ApiInfixUpgrade from './common/infixUpgrade';

export type GW2APiUpgradeComponentFlag =
  | Exclude<GW2ApiWeaponTypeForItemDetails, GW2ApiOtherWeaponType>
  | GW2ApiArmorType
  | 'Trinket';

interface GW2ApiUpgradeComponentDetails {
  type: GW2ApiUpgradeComponentType;
  flags: GW2APiUpgradeComponentFlag[];
  infusion_upgrade_flags: GW2ApiInfusionUpgradeFlag[];
  suffix: string;
  infix_upgrade: GW2ApiInfixUpgrade;
  bonuses?: string[]; // only from runes, the 6 bonuses a rune provides
  attribute_adjustment: number;
}

export default GW2ApiUpgradeComponentDetails;
