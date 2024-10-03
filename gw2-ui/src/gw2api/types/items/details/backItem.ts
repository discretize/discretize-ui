import type GW2ApiInfixUpgrade from './common/infixUpgrade';
import type GW2ApiInflusionSlot from './common/infusionSlot';

interface GW2ApiBackItemDetails {
  infusion_slots: GW2ApiInflusionSlot[];
  attribute_adjustment: number;
  infix_upgrade?: GW2ApiInfixUpgrade;
  suffix_item_id?: number;
  secondary_suffix_item_id: string;
  stat_choices?: number[];
}

export default GW2ApiBackItemDetails;
