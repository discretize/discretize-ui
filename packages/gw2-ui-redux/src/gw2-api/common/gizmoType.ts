const GIZMO_TYPES = [
  'Default',
  'ContainerKey',
  'RentableContractNpc',
  'UnlimitedConsumable',
] as const
type GW2ApiGizmoType = typeof GIZMO_TYPES[number]

export default GW2ApiGizmoType
