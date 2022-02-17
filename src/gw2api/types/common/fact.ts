import GW2ApiFactComboFieldType from './comboFieldType';
import GW2ApiFactType from './factType';
import { ApiAttributes } from './attributeType';
import GW2ApiAttribute from './attribute';

export interface GW2ApiFactBase {
  text: string;
  icon?: string;
  type: GW2ApiFactType;
}

export interface GW2ApiFactAttributeAdjust extends GW2ApiFactBase {
  value: number;
  target: keyof ApiAttributes;
}

export interface GW2ApiFactBuff extends GW2ApiFactBase {
  status: string; //TODO: Likely can be its own type.
  description?: string;
  apply_count?: number;
  duration?: number;
}

export interface GW2ApiFactBuffConversion extends GW2ApiFactBase {
  percent: number;
  source: GW2ApiAttribute;
  target: GW2ApiAttribute;
}

export interface GW2ApiFactComboField extends GW2ApiFactBase {
  field_type: GW2ApiFactComboFieldType;
}

export interface GW2ApiFactComboFinisher extends GW2ApiFactBase {
  percent: number;
  finisher_type: 'Blast' | 'Leap' | 'Projectile' | 'Whirl';
}

export interface GW2ApiFactDamage extends GW2ApiFactBase {
  hit_count: number;
}

export interface GW2ApiFactDistance extends GW2ApiFactBase {
  distance: number;
}

export interface GW2ApiFactDuration extends GW2ApiFactBase {
  duration: number;
}

export interface GW2ApiFactHeal extends GW2ApiFactBase {
  hit_count: number;
}

export interface GW2ApiFactHealingAdjust extends GW2ApiFactBase {
  hit_count: number;
}

export interface GW2ApiFactNoData extends GW2ApiFactBase {}

export interface GW2ApiFactNumber extends GW2ApiFactBase {
  value: number;
}

export interface GW2ApiFactPercent extends GW2ApiFactBase {
  percent: number;
}

export interface GW2ApiFactPrefixedBuff extends GW2ApiFactBuff {
  prefix: GW2ApiFactBuff;
}

export interface GW2ApiFactRadius extends GW2ApiFactBase {
  distance: number;
}

export interface GW2ApiFactRange extends GW2ApiFactBase {
  value: number;
}

export interface GW2ApiFactRecharge extends GW2ApiFactBase {
  value: number;
}

export interface GW2ApiFactStunBreak extends GW2ApiFactBase {
  value: boolean;
}

export interface GW2ApiFactTime extends GW2ApiFactBase {
  duration: number;
}

export interface GW2ApiFactUnblockable extends GW2ApiFactBase {
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
