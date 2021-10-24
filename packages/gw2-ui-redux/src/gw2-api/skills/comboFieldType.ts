const COMBO_FIELD_TYPES = [
  'Air',
  'Dark',
  'Fire',
  'Ice',
  'Light',
  'Lightning',
  'Poison',
  'Smoke',
  'Ethereal',
  'Water',
] as const
type GW2ApiComboFieldType = typeof COMBO_FIELD_TYPES[number]

export default GW2ApiComboFieldType
