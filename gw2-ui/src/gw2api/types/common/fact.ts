import GW2ApiFactComboFieldType from './comboFieldType';
import GW2ApiAttribute from './attribute';

type Optional<T, S extends keyof T> = Omit<T, S> & Partial<Pick<T, S>>;

interface GW2ApiFactBase {
  text?: string;
  icon?: string;
}

// Note: the API does not always return a .text property for these, possibly a bug
export interface GW2ApiFactAttributeAdjust extends GW2ApiFactBase {
  type: 'AttributeAdjust';
  value?: number;
  target: GW2ApiAttribute | 'None'; // TODO: why does the API return None sometimes?
}

export interface GW2ApiFactBuff extends GW2ApiFactBase {
  type: 'Buff';
  status?: string; //TODO: Likely can be its own type.
  description?: string;
  apply_count?: number;
  duration?: number;
}

export interface GW2ApiFactBuffConversion extends GW2ApiFactBase {
  type: 'BuffConversion';
  percent: number;
  source: GW2ApiAttribute;
  target: GW2ApiAttribute;
}

export interface GW2ApiFactComboField extends GW2ApiFactBase {
  type: 'ComboField';
  field_type: GW2ApiFactComboFieldType;
}

export interface GW2ApiFactComboFinisher extends GW2ApiFactBase {
  type: 'ComboFinisher';
  percent: number;
  finisher_type: 'Blast' | 'Leap' | 'Projectile' | 'Whirl';
  chance?: number; // This exists sometimes, not sure why
}

export interface GW2ApiFactDamage extends GW2ApiFactBase {
  type: 'Damage';
  hit_count: number;
  dmg_multiplier: number;
}

export interface GW2ApiFactDistance extends GW2ApiFactBase {
  type: 'Distance';
  distance: number;
}

export interface GW2ApiFactDuration extends GW2ApiFactBase {
  type: 'Duration';
  duration: number;
}

export interface GW2ApiFactHeal extends GW2ApiFactBase {
  type: 'Heal';
  hit_count: number;
}

export interface GW2ApiFactHealingAdjust extends GW2ApiFactBase {
  type: 'HealingAdjust';
  hit_count: number;
}

export interface GW2ApiFactNoData extends GW2ApiFactBase {
  type: 'NoData';
}

export interface GW2ApiFactNumber extends GW2ApiFactBase {
  type: 'Number';
  value: number;
}

export interface GW2ApiFactPercent extends GW2ApiFactBase {
  type: 'Percent';
  percent: number;
}

export interface GW2ApiFactPrefixedBuff
  extends Optional<Omit<GW2ApiFactBuff, 'type'>, 'status'> {
  type: 'PrefixedBuff';
  prefix: Partial<Omit<GW2ApiFactBuff, 'type'>>;
}

export interface GW2ApiFactRadius extends GW2ApiFactBase {
  type: 'Radius';
  distance: number;
}

export interface GW2ApiFactRange extends GW2ApiFactBase {
  type: 'Range';
  value: number;
}

export interface GW2ApiFactRecharge extends GW2ApiFactBase {
  type: 'Recharge';
  value: number;
}

export interface GW2ApiFactStunBreak extends GW2ApiFactBase {
  type: 'StunBreak';
  value: boolean;
}

export interface GW2ApiFactTime extends GW2ApiFactBase {
  type: 'Time';
  duration: number;
}

export interface GW2ApiFactUnblockable extends GW2ApiFactBase {
  type: 'Unblockable';
  value: boolean;
}

type GW2ApiFact =
  | GW2ApiFactAttributeAdjust
  | GW2ApiFactBuff
  | GW2ApiFactBuffConversion
  | GW2ApiFactComboField
  | GW2ApiFactComboFinisher
  | GW2ApiFactDamage
  | GW2ApiFactDistance
  | GW2ApiFactDuration
  | GW2ApiFactHeal
  | GW2ApiFactHealingAdjust
  | GW2ApiFactNoData
  | GW2ApiFactNumber
  | GW2ApiFactPercent
  | GW2ApiFactPrefixedBuff
  | GW2ApiFactRadius
  | GW2ApiFactRange
  | GW2ApiFactRecharge
  | GW2ApiFactStunBreak
  | GW2ApiFactTime
  | GW2ApiFactUnblockable;

export default GW2ApiFact;

export type GW2ApiFactType = GW2ApiFact['type'];
