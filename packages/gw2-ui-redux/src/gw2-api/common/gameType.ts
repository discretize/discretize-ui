const GAME_TYPES = [
  'Activity',
  'Dungeon',
  'Pve',
  'Pvp',
  'PvpLobby',
  'Wvw',
] as const
type GW2ApiGameType = typeof GAME_TYPES[number]

export default GW2ApiGameType
