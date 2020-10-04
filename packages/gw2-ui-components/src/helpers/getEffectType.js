import augmentations from '../data/augmentations.json'
import auras from '../data/auras.json'
import boons from '../data/boons.json'
import commonEffects from '../data/commonEffects.json'
import conditions from '../data/conditions.json'
import consumableEffects from '../data/consumableEffects.json'
import controlEffects from '../data/controlEffects.json'
import mistlockInstabilities from '../data/mistlockInstabilities.json'

const effects = {
  Augmentation: Object.keys(augmentations),
  Aura: Object.keys(auras),
  Boon: Object.keys(boons),
  Common: Object.keys(commonEffects),
  Condition: Object.keys(conditions),
  Consumable: Object.keys(consumableEffects),
  Control: Object.keys(controlEffects),
  'Mistlock Instability': Object.keys(mistlockInstabilities),
}

export default (name) =>
  (Object.entries(effects).find(([, names]) => names.includes(name)) || [])[0]
