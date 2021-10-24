const GATHERING_TOOL_TYPES = ['Foraging', 'Logging', 'Mining'] as const
type GW2ApiGatheringToolType = typeof GATHERING_TOOL_TYPES[number]

export default GW2ApiGatheringToolType
