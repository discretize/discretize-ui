import {
  GW2ApiFactAttributeAdjust,
  GW2ApiFactBuff,
  GW2ApiFactBuffConversion,
  GW2ApiFactComboField,
  GW2ApiFactComboFinisher,
  GW2ApiFactDamage,
  GW2ApiFactDistance,
  GW2ApiFactDuration,
  GW2ApiFactHeal,
  GW2ApiFactHealingAdjust,
  GW2ApiFactNoData,
  GW2ApiFactNumber,
  GW2ApiFactPercent,
  GW2ApiFactPrefixedBuff,
  GW2ApiFactRadius,
  GW2ApiFactRange,
  GW2ApiFactRecharge,
  GW2ApiFactStunBreak,
  GW2ApiFactTime,
  GW2ApiFactUnblockable,
} from './fact';

type GW2ApiTraitedFactAdditional = {
  requires_trait: number;
  overrides?: number;
};

// This is a bit more complicated than
// GW2ApiTraitedFact & GW2ApiTraitedFactAdditional
// because otherwise typescript-is gets confused.

interface GW2ApiTraitedFactAttributeAdjust
  extends GW2ApiFactAttributeAdjust,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactBuff
  extends GW2ApiFactBuff,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactBuffConversion
  extends GW2ApiFactBuffConversion,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactComboField
  extends GW2ApiFactComboField,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactComboFinisher
  extends GW2ApiFactComboFinisher,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactDamage
  extends GW2ApiFactDamage,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactDistance
  extends GW2ApiFactDistance,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactDuration
  extends GW2ApiFactDuration,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactHeal
  extends GW2ApiFactHeal,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactHealingAdjust
  extends GW2ApiFactHealingAdjust,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactNoData
  extends GW2ApiFactNoData,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactNumber
  extends GW2ApiFactNumber,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactPercent
  extends GW2ApiFactPercent,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactPrefixedBuff
  extends GW2ApiFactPrefixedBuff,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactRadius
  extends GW2ApiFactRadius,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactRange
  extends GW2ApiFactRange,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactRecharge
  extends GW2ApiFactRecharge,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactStunBreak
  extends GW2ApiFactStunBreak,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactTime
  extends GW2ApiFactTime,
    GW2ApiTraitedFactAdditional {}
interface GW2ApiTraitedFactUnblockable
  extends GW2ApiFactUnblockable,
    GW2ApiTraitedFactAdditional {}

type GW2ApiTraitedFact =
  | GW2ApiTraitedFactAttributeAdjust
  | GW2ApiTraitedFactBuff
  | GW2ApiTraitedFactBuffConversion
  | GW2ApiTraitedFactComboField
  | GW2ApiTraitedFactComboFinisher
  | GW2ApiTraitedFactDamage
  | GW2ApiTraitedFactDistance
  | GW2ApiTraitedFactDuration
  | GW2ApiTraitedFactHeal
  | GW2ApiTraitedFactHealingAdjust
  | GW2ApiTraitedFactNoData
  | GW2ApiTraitedFactNumber
  | GW2ApiTraitedFactPercent
  | GW2ApiTraitedFactPrefixedBuff
  | GW2ApiTraitedFactRadius
  | GW2ApiTraitedFactRange
  | GW2ApiTraitedFactRecharge
  | GW2ApiTraitedFactStunBreak
  | GW2ApiTraitedFactTime
  | GW2ApiTraitedFactUnblockable;

export default GW2ApiTraitedFact;
