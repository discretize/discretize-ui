import ValueOf from './valueOf'

export type Attribute = ValueOf<Attributes>

export interface Attributes {
  POWER: string
  PRECISION: string
  TOUGHNESS: string
  VITALITY: string
  CONCENTRATION: string
  CONDITION_DAMAGE: string
  EXPERTISE: string
  FEROCITY: string
  HEALING_POWER: string
}

const attributes: Attributes = {
  POWER: 'Power',
  PRECISION: 'Precision',
  TOUGHNESS: 'Toughness',
  VITALITY: 'Vitality',
  CONCENTRATION: 'BoonDuration',
  CONDITION_DAMAGE: 'ConditionDamage',
  EXPERTISE: 'ConditionDuration',
  FEROCITY: 'CritDamage',
  HEALING_POWER: 'Healing',
}

export default attributes
