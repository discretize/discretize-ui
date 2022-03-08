export type GW2ApiOneHandedWeaponType =
  | 'Axe'
  | 'Dagger'
  | 'Mace'
  | 'Pistol'
  | 'Scepter'
  | 'Sword'
  | 'Focus'
  | 'Shield'
  | 'Torch'
  | 'Warhorn';

export type GW2ApiTwoHandedWeaponType =
  | 'Greatsword'
  | 'Hammer'
  | 'Longbow'
  | 'Rifle'
  | 'Shortbow'
  | 'Staff';

export type GW2ApiOtherWeaponType =
  | 'LargeBundle'
  | 'SmallBundle'
  | 'Toy'
  | 'ToyTwoHanded';

export type GW2ApiAquaticWeaponType = 'Speargun' | 'Trident' | 'Spear';

type GW2ApiWeaponType =
  | GW2ApiOneHandedWeaponType
  | GW2ApiTwoHandedWeaponType
  | GW2ApiAquaticWeaponType
  | GW2ApiOtherWeaponType;

export default GW2ApiWeaponType;

// Hooray for inconsistencies
export type GW2ApiWeaponTypeForItemDetails =
  | GW2ApiOneHandedWeaponType
  | Exclude<GW2ApiTwoHandedWeaponType, 'Longbow' | 'Shortbow'>
  | 'LongBow'
  | 'ShortBow'
  | GW2ApiAquaticWeaponType
  | 'Harpoon'
  | GW2ApiOtherWeaponType;
