import ValueOf from './valueOf';

export type ItemRarity = ValueOf<ItemRarities>;

export interface ItemRarities {
  LEGENDARY: string;
  ASCENDED: string;
  EXOTIC: string;
  RARE: string;
  MASTERWORK: string;
  FINE: string;
  BASIC: string;
}

const itemRarities: ItemRarities = {
  LEGENDARY: 'Legendary',
  ASCENDED: 'Ascended',
  EXOTIC: 'Exotic',
  RARE: 'Rare',
  MASTERWORK: 'Masterwork',
  FINE: 'Fine',
  BASIC: 'Basic',
};

export default itemRarities;
