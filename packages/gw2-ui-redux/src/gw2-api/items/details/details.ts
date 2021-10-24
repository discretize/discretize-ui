import GW2ApiArmorDetails from './armor'
import GW2ApiBackItemDetails from './backItem'
import GW2ApiBagDetails from './bag'
import GW2ApiConsumableDetails from './consumable'
import GW2ApiGatheringToolDetails from './gatheringTool'
import Gw2ApiGizmoDetails from './gizmo'
import GW2ApiMiniatureDetails from './miniature'
import GW2ApiSalvageKitDetails from './salvageKit'
import GW2ApiTrinketDetails from './trinket'
import GW2ApiWeaponTypeDetails from './weapon'
import GW2ApiUpgradeComponentDetails from './upgradeComponent'

type GW2ApiItemDetails =
  | GW2ApiArmorDetails
  | GW2ApiBackItemDetails
  | GW2ApiBagDetails
  | GW2ApiConsumableDetails
  | GW2ApiGatheringToolDetails
  | Gw2ApiGizmoDetails
  | GW2ApiMiniatureDetails
  | GW2ApiSalvageKitDetails
  | GW2ApiTrinketDetails
  | GW2ApiWeaponTypeDetails
  | GW2ApiUpgradeComponentDetails

export default GW2ApiItemDetails
