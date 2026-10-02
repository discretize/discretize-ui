import type ValueOf from './valueOf';

export type ItemRarity = ValueOf<ItemRarities>;

export type ItemRarities = typeof itemRarities;

const itemRarities = {
  LEGENDARY: 'Legendary',
  ASCENDED: 'Ascended',
  EXOTIC: 'Exotic',
  RARE: 'Rare',
  MASTERWORK: 'Masterwork',
  FINE: 'Fine',
  BASIC: 'Basic',
} as const;

export default itemRarities;
