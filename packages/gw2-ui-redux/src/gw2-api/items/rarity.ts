const RARITIES = [
  'Junk',
  'Basic',
  'Fine',
  'Masterwork',
  'Rare',
  'Exotic',
  'Ascended',
  'Legendary',
] as const
type GW2ApiItemRarity = typeof RARITIES[number]

export default GW2ApiItemRarity
