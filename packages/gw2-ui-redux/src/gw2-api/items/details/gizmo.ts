import GW2ApiGizmoType from '../../common/gizmoType'

interface GW2ApiGizmoDetails {
  type: GW2ApiGizmoType
  guild_upgrade_id?: number
  vendor_ids?: number[]
}

export default GW2ApiGizmoDetails
