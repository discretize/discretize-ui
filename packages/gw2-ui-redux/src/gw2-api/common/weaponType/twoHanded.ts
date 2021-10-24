const TWO_UANDED_WEAPON_TYPES = [
  'Greatsword',
  'Hammer',
  'LongBow',
  'Rifle',
  'ShortBow',
  'Staff',
] as const
type GW2ApiTwoHandedWeaponType = typeof TWO_UANDED_WEAPON_TYPES[number]

export default GW2ApiTwoHandedWeaponType
