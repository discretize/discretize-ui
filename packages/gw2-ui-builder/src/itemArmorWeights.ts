import ValueOf from './valueOf'

export type ItemArmorWeight = ValueOf<ItemArmorWeights>

export interface ItemArmorWeights {
  HEAVY: string
  MEDIUM: string
  LIGHT: string
}

const itemArmorWeights: ItemArmorWeights = {
  HEAVY: 'Heavy',
  MEDIUM: 'Medium',
  LIGHT: 'Light',
}

export default itemArmorWeights
