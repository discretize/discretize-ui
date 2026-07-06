import type ValueOf from './valueOf';

export type ItemCategoryName = ValueOf<ItemCategoryNames>;

export type ItemCategoryNames = typeof itemCategoryNames;

const itemCategoryNames = {
  ARMOR: 'Armor',
  TRINKET: 'Trinket',
  BACK: 'Back',
  WEAPON: 'Weapon',
} as const;

export default itemCategoryNames;
