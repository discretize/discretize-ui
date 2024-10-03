import type GW2ApiGameType from '../common/gameType';
import { type RacesTypes } from '../../../data/races';
import { type ProfessionTypes } from '../../../data/professions';

import type GW2ApiArmorDetails from './details/armor';
import type GW2ApiBackItemDetails from './details/backItem';
import type GW2ApiBagDetails from './details/bag';
import type GW2ApiConsumableDetails from './details/consumable';
import type GW2ApiContainerDetails from './details/container';
import type GW2ApiGatheringToolDetails from './details/gatheringTool';
import type Gw2ApiGizmoDetails from './details/gizmo';
import type GW2ApiMiniatureDetails from './details/miniature';
import type GW2ApiSalvageKitDetails from './details/salvageKit';
import type GW2ApiTrinketDetails from './details/trinket';
import type GW2ApiWeaponDetails from './details/weapon';
import type GW2ApiUpgradeComponentDetails from './details/upgradeComponent';

interface GW2ApiToolDetails {
  type: 'Salvage';
  charges: number;
}

type Keys =
  | keyof GW2ApiArmorDetails
  | keyof GW2ApiBackItemDetails
  | keyof GW2ApiBagDetails
  | keyof GW2ApiConsumableDetails
  | keyof GW2ApiGatheringToolDetails
  | keyof Gw2ApiGizmoDetails
  | keyof GW2ApiMiniatureDetails
  | keyof GW2ApiSalvageKitDetails
  | keyof GW2ApiToolDetails
  | keyof GW2ApiTrinketDetails
  | keyof GW2ApiWeaponDetails
  | keyof GW2ApiUpgradeComponentDetails;

// Tell typescript that all the other properties are either missing or undefined.
// That'll make destructuring safe.
// Note: We need this hack for <Item> and <ItemDetails>
// But typescript-is doesn't handle intersection types, and we need to disable it for typechecking
type WrapInUndefined<T> = T &
  Partial<Record<Exclude<Keys, keyof T>, undefined>>;
//type WrapInUndefined<T> = T;

type GW2ApiUpgradeMethod = 'Attunement' | 'Infusion';

type GW2ApiItemRarity =
  | 'Junk'
  | 'Basic'
  | 'Fine'
  | 'Masterwork'
  | 'Rare'
  | 'Exotic'
  | 'Ascended'
  | 'Legendary';

type GW2ApiRestriction = RacesTypes | ProfessionTypes | 'Female';

type GW2ApiItemFlag =
  | 'AccountBindOnUse'
  | 'AccountBound'
  | 'Attuned'
  | 'BulkConsume'
  | 'DeleteWarning'
  | 'HideSuffix'
  | 'Infused'
  | 'MonsterOnly'
  | 'NoMysticForge'
  | 'NoSalvage'
  | 'NoSell'
  | 'NotUpgradeable'
  | 'NoUnderwater'
  | 'Soulbound'
  | 'SoulbindOnAcquire'
  | 'SoulBindOnUse'
  | 'Tonic'
  | 'Unique';

interface GW2ApiUpgradedItem {
  upgrade: GW2ApiUpgradeMethod;
  item_id: number;
}

interface GW2ApiItemBase {
  id: number;
  chat_link: string;
  name: string;
  icon?: string;
  description?: string;
  rarity: GW2ApiItemRarity;
  level: number;
  vendor_value: number;
  default_skin?: number;
  game_types: GW2ApiGameType[];
  flags: GW2ApiItemFlag[];
  restrictions: GW2ApiRestriction[];
  upgrades_into?: GW2ApiUpgradedItem[];
  upgrades_from?: GW2ApiUpgradedItem[];
}

export interface GW2ApiItemArmor extends GW2ApiItemBase {
  type: 'Armor';
  details: WrapInUndefined<GW2ApiArmorDetails>;
}
export interface GW2ApiItemBack extends GW2ApiItemBase {
  type: 'Back';
  details: WrapInUndefined<GW2ApiBackItemDetails>;
}
export interface GW2ApiItemBag extends GW2ApiItemBase {
  type: 'Bag';
  details: WrapInUndefined<GW2ApiBagDetails>;
}
export interface GW2ApiItemConsumable extends GW2ApiItemBase {
  type: 'Consumable';
  details: WrapInUndefined<GW2ApiConsumableDetails>;
}
export interface GW2ApiItemContainer extends GW2ApiItemBase {
  type: 'Container';
  details: WrapInUndefined<GW2ApiContainerDetails>;
}
export interface GW2ApiItemCraftingMaterial extends GW2ApiItemBase {
  type: 'CraftingMaterial';
  details?: undefined;
}
export interface GW2ApiItemGathering extends GW2ApiItemBase {
  type: 'Gathering';
  details: WrapInUndefined<GW2ApiGatheringToolDetails>;
}
export interface GW2ApiItemGizmo extends GW2ApiItemBase {
  type: 'Gizmo';
  details: WrapInUndefined<Gw2ApiGizmoDetails>;
}
export interface GW2ApiItemKey extends GW2ApiItemBase {
  type: 'Key';
  details?: undefined;
}
export interface GW2ApiItemMiniPet extends GW2ApiItemBase {
  type: 'MiniPet';
  details: WrapInUndefined<GW2ApiMiniatureDetails>;
}
export interface GW2ApiItemTool extends GW2ApiItemBase {
  type: 'Tool';
  details: WrapInUndefined<GW2ApiToolDetails>;
}
// This appears to be unused
/*
interface GW2ApiItemTrait extends GW2ApiItemBase {
  type: 'Trait';
  details?: undefined;
}
*/
export interface GW2ApiItemTrinket extends GW2ApiItemBase {
  type: 'Trinket';
  details: WrapInUndefined<GW2ApiTrinketDetails>;
}
export interface GW2ApiItemTrophy extends GW2ApiItemBase {
  type: 'Trophy';
  details?: undefined;
}
export interface GW2ApiItemUpgradeComponent extends GW2ApiItemBase {
  type: 'UpgradeComponent';
  details: WrapInUndefined<GW2ApiUpgradeComponentDetails>;
}
export interface GW2ApiItemWeapon extends GW2ApiItemBase {
  type: 'Weapon';
  details: WrapInUndefined<GW2ApiWeaponDetails>;
}

export interface GW2ApiItemJadeBot extends GW2ApiItemBase {
  type: 'Quux' | 'Qux'; // Don't ask
  details?: undefined;
}

type GW2ApiItem =
  | GW2ApiItemArmor
  | GW2ApiItemBack
  | GW2ApiItemBag
  | GW2ApiItemConsumable
  | GW2ApiItemContainer
  | GW2ApiItemCraftingMaterial
  | GW2ApiItemGathering
  | GW2ApiItemGizmo
  | GW2ApiItemKey
  | GW2ApiItemMiniPet
  | GW2ApiItemTool
  //| GW2ApiItemTrait
  | GW2ApiItemTrinket
  | GW2ApiItemTrophy
  | GW2ApiItemUpgradeComponent
  | GW2ApiItemWeapon
  | GW2ApiItemJadeBot;
export default GW2ApiItem;
