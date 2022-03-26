import GW2ApiArmorDetails from './armor';
import GW2ApiBackItemDetails from './backItem';
import GW2ApiBagDetails from './bag';
import GW2ApiConsumableDetails from './consumable';
import GW2ApiGatheringToolDetails from './gatheringTool';
import Gw2ApiGizmoDetails from './gizmo';
import GW2ApiMiniatureDetails from './miniature';
import GW2ApiSalvageKitDetails from './salvageKit';
import GW2ApiTrinketDetails from './trinket';
import GW2ApiWeaponTypeDetails from './weapon';
import GW2ApiUpgradeComponentDetails from './upgradeComponent';

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
