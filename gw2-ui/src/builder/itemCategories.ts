import ITEM_CATEGORY_NAMES, {
  type ItemCategoryName,
} from './itemCategoryNames';
import ITEM_TYPE_NAMES, { type ItemTypeNames } from './itemTypeNames';
import type ValueOf from './valueOf';

export type ItemCategory = ValueOf<ItemTypeNames>[];

export interface ItemCategories {
  [itemCategoryName: ItemCategoryName]: ItemCategory;
}

const itemCategories: ItemCategories = {
  [ITEM_CATEGORY_NAMES.ARMOR]: [
    ITEM_TYPE_NAMES.HELM,
    ITEM_TYPE_NAMES.SHOULDERS,
    ITEM_TYPE_NAMES.COAT,
    ITEM_TYPE_NAMES.GLOVES,
    ITEM_TYPE_NAMES.LEGGINGS,
    ITEM_TYPE_NAMES.BOOTS,
  ],

  [ITEM_CATEGORY_NAMES.TRINKET]: [
    ITEM_TYPE_NAMES.ACCESSORY,
    ITEM_TYPE_NAMES.AMULET,
    ITEM_TYPE_NAMES.RING,
  ],

  [ITEM_CATEGORY_NAMES.BACK]: [ITEM_TYPE_NAMES.BACK_ITEM],

  [ITEM_CATEGORY_NAMES.WEAPON]: [
    ITEM_TYPE_NAMES.GREATSWORD,
    ITEM_TYPE_NAMES.HAMMER,
    ITEM_TYPE_NAMES.LONGBOW,
    ITEM_TYPE_NAMES.RIFLE,
    ITEM_TYPE_NAMES.SHORT_BOW,
    ITEM_TYPE_NAMES.STAFF,

    ITEM_TYPE_NAMES.AXE,
    ITEM_TYPE_NAMES.DAGGER,
    ITEM_TYPE_NAMES.MACE,
    ITEM_TYPE_NAMES.PISTOL,
    ITEM_TYPE_NAMES.SWORD,

    ITEM_TYPE_NAMES.SCEPTER,

    ITEM_TYPE_NAMES.FOCUS,
    ITEM_TYPE_NAMES.SHIELD,
    ITEM_TYPE_NAMES.TORCH,
    ITEM_TYPE_NAMES.WARHORN,

    ITEM_TYPE_NAMES.HARPOON,
    ITEM_TYPE_NAMES.SPEARGUN,
    ITEM_TYPE_NAMES.TRIDENT,
  ],
};

export default itemCategories;
