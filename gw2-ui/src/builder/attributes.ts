import GW2ApiAttribute from '../gw2api/types/common/attribute';
import ValueOf from './valueOf';

export type Attribute = ValueOf<Attributes>;

export interface Attributes {
  POWER: GW2ApiAttribute;
  PRECISION: GW2ApiAttribute;
  TOUGHNESS: GW2ApiAttribute;
  VITALITY: GW2ApiAttribute;
  CONCENTRATION: GW2ApiAttribute;
  CONDITION_DAMAGE: GW2ApiAttribute;
  EXPERTISE: GW2ApiAttribute;
  FEROCITY: GW2ApiAttribute;
  HEALING_POWER: GW2ApiAttribute;
}

const attributes: Record<string, GW2ApiAttribute> = {
  POWER: 'Power',
  PRECISION: 'Precision',
  TOUGHNESS: 'Toughness',
  VITALITY: 'Vitality',
  CONCENTRATION: 'BoonDuration',
  CONDITION_DAMAGE: 'ConditionDamage',
  EXPERTISE: 'ConditionDuration',
  FEROCITY: 'CritDamage',
  HEALING_POWER: 'Healing',
};

export default attributes;
