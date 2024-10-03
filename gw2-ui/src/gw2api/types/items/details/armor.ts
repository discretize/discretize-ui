import type GW2ApiArmorSlotType from '../../common/armorSlotType';
import type GW2ApiWeightClass from '../../common/weightClass';
import type GW2ApiInfixUpgrade from './common/infixUpgrade';
import type GW2ApiInflusionSlot from './common/infusionSlot';

interface GW2ApiArmorDetails {
  type: GW2ApiArmorSlotType;
  weight_class: GW2ApiWeightClass;
  defense: number;
  infusion_slots: GW2ApiInflusionSlot[];
  attribute_adjustment: number;
  infix_upgrade?: GW2ApiInfixUpgrade;
  suffix_item_id?: number;
  secondary_suffix_item_id: string;
  stat_choices?: number[];
}

export default GW2ApiArmorDetails;
