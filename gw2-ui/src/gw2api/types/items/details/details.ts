import type GW2ApiArmorDetails from './armor';
import type GW2ApiBackItemDetails from './backItem';
import type GW2ApiBagDetails from './bag';
import type GW2ApiConsumableDetails from './consumable';
import type GW2ApiGatheringToolDetails from './gatheringTool';
import type Gw2ApiGizmoDetails from './gizmo';
import type GW2ApiMiniatureDetails from './miniature';
import type GW2ApiSalvageKitDetails from './salvageKit';
import type GW2ApiTrinketDetails from './trinket';
import type GW2ApiWeaponTypeDetails from './weapon';
import type GW2ApiUpgradeComponentDetails from './upgradeComponent';

type Keys =
  | keyof GW2ApiArmorDetails
  | keyof GW2ApiBackItemDetails
  | keyof GW2ApiBagDetails
  | keyof GW2ApiConsumableDetails
  | keyof GW2ApiGatheringToolDetails
  | keyof Gw2ApiGizmoDetails
  | keyof GW2ApiMiniatureDetails
  | keyof GW2ApiSalvageKitDetails
  | keyof GW2ApiTrinketDetails
  | keyof GW2ApiWeaponTypeDetails
  | keyof GW2ApiUpgradeComponentDetails;

type WrapInUndefined<T> = T & Record<Exclude<Keys, keyof T>, undefined>;

type GW2ApiItemDetails =
  | WrapInUndefined<GW2ApiArmorDetails>
  | WrapInUndefined<GW2ApiBackItemDetails>
  | WrapInUndefined<GW2ApiBagDetails>
  | WrapInUndefined<GW2ApiConsumableDetails>
  | WrapInUndefined<GW2ApiGatheringToolDetails>
  | WrapInUndefined<Gw2ApiGizmoDetails>
  | WrapInUndefined<GW2ApiMiniatureDetails>
  | WrapInUndefined<GW2ApiSalvageKitDetails>
  | WrapInUndefined<GW2ApiTrinketDetails>
  | WrapInUndefined<GW2ApiWeaponTypeDetails>
  | WrapInUndefined<GW2ApiUpgradeComponentDetails>;

export default GW2ApiItemDetails;
