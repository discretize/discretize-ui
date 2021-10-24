import GW2ApiOneHandedWeaponType from './weaponType/oneHanded'
import GW2ApiTwoHandedWeaponType from './weaponType/twoHanded'
import GW2ApiAquaticWeaponType from './weaponType/aquatic'
import GW2ApiOtherWeaponType from './weaponType/other'

type GW2ApiWeaponType =
  | GW2ApiOneHandedWeaponType
  | GW2ApiTwoHandedWeaponType
  | GW2ApiAquaticWeaponType
  | GW2ApiOtherWeaponType

export default GW2ApiWeaponType
