const CONTAINER_TYPES = ['Default', 'GiftBox', 'Immediate', 'OpenUI'] as const
type GW2ApiContainerType = typeof CONTAINER_TYPES[number]

export default GW2ApiContainerType
