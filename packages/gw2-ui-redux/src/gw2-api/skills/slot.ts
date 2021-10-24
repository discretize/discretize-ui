const SLOTS = [
  'Downed_1',
  'Downed_2',
  'Downed_3',
  'Downed_4',
  'Pet',
  'Profession_1',
  'Profession_2',
  'Profession_3',
  'Profession_4',
  'Profession_5',
  'Utility',
  'Weapon_1',
  'Weapon_2',
  'Weapon_3',
  'Weapon_4',
  'Weapon_5',
] as const
type GW2ApiSlot = typeof SLOTS[number]

export default GW2ApiSlot
