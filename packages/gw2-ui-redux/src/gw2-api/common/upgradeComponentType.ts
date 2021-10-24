const TYPES = ['Default', 'Gem', 'Rune', 'Sigil'] as const
type GW2ApiUpgradeComponentType = typeof TYPES[number]

export default GW2ApiUpgradeComponentType
