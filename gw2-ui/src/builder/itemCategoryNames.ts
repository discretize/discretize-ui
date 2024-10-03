import type ValueOf from './valueOf';

export type ItemCategoryName = ValueOf<ItemCategoryNames>;

export interface ItemCategoryNames {
  ARMOR: string;
  TRINKET: string;
  BACK: string;
  WEAPON: string;
}

const itemCategoryNames: ItemCategoryNames = {
  ARMOR: 'Armor',
  TRINKET: 'Trinket',
  BACK: 'Back',
  WEAPON: 'Weapon',
};

export default itemCategoryNames;
