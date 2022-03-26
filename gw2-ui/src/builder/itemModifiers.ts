import ITEM_CATEGORIES, { ItemCategoryName } from './itemCategoryNames';
import ITEM_TYPE_NAMES, { ItemTypeName } from './itemTypeNames';
import ITEM_RARITIES, { ItemRarity } from './itemRarities';
import ITEM_STAT_TYPES, { ItemStatType } from './itemStatTypes';
import ITEM_ARMOR_WEIGHTS, { ItemArmorWeight } from './itemArmorWeights';

export type ItemModifier = number;

export type ItemModifierAttribute =
  | [ItemModifier]
  | [ItemModifier, ItemModifier];

export interface ItemModifierAttributes {
  [itemStatType: ItemStatType]: ItemModifierAttribute;
}

export interface ItemModifierDefense {
  [itemArmorWeight: ItemArmorWeight]: ItemModifier;
}

export interface ItemModifiers {
  attributes: ItemModifierAttributes;
  defense?: ItemModifierDefense | ItemModifier;
  minPower?: ItemModifier;
  maxPower?: ItemModifier;
}

export interface ItemModifierType {
  [itemRarity: ItemRarity]: ItemModifiers;
}

export interface ItemModifierCategory {
  [itemTypeName: ItemTypeName]: ItemModifierType;
}

export interface ItemModifiersCollection {
  [itemCategory: ItemCategoryName]: ItemModifierCategory;
}

const itemModifiers: ItemModifiersCollection = {
  [ITEM_CATEGORIES.ARMOR]: {
    [ITEM_TYPE_NAMES.HELM]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [63, 45],
          [ITEM_STAT_TYPES.QUADRUPLE]: [54, 30],
          [ITEM_STAT_TYPES.ALL]: [30],
        },
        defense: {
          [ITEM_ARMOR_WEIGHTS.LIGHT]: 77,
          [ITEM_ARMOR_WEIGHTS.MEDIUM]: 102,
          [ITEM_ARMOR_WEIGHTS.HEAVY]: 127,
        },
      },
    },
    [ITEM_TYPE_NAMES.SHOULDERS]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [47, 34],
          [ITEM_STAT_TYPES.QUADRUPLE]: [40, 22],
          [ITEM_STAT_TYPES.ALL]: [22],
        },
        defense: {
          [ITEM_ARMOR_WEIGHTS.LIGHT]: 77,
          [ITEM_ARMOR_WEIGHTS.MEDIUM]: 102,
          [ITEM_ARMOR_WEIGHTS.HEAVY]: 127,
        },
      },
    },
    [ITEM_TYPE_NAMES.COAT]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [141, 101],
          [ITEM_STAT_TYPES.QUADRUPLE]: [121, 67],
          [ITEM_STAT_TYPES.ALL]: [67],
        },
        defense: {
          [ITEM_ARMOR_WEIGHTS.LIGHT]: 330,
          [ITEM_ARMOR_WEIGHTS.MEDIUM]: 355,
          [ITEM_ARMOR_WEIGHTS.HEAVY]: 381,
        },
      },
    },
    [ITEM_TYPE_NAMES.GLOVES]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [47, 34],
          [ITEM_STAT_TYPES.QUADRUPLE]: [40, 22],
          [ITEM_STAT_TYPES.ALL]: [22],
        },
        defense: {
          [ITEM_ARMOR_WEIGHTS.LIGHT]: 140,
          [ITEM_ARMOR_WEIGHTS.MEDIUM]: 165,
          [ITEM_ARMOR_WEIGHTS.HEAVY]: 191,
        },
      },
    },
    [ITEM_TYPE_NAMES.LEGGINGS]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [94, 67],
          [ITEM_STAT_TYPES.QUADRUPLE]: [81, 44],
          [ITEM_STAT_TYPES.ALL]: [44],
        },
        defense: {
          [ITEM_ARMOR_WEIGHTS.LIGHT]: 203,
          [ITEM_ARMOR_WEIGHTS.MEDIUM]: 229,
          [ITEM_ARMOR_WEIGHTS.HEAVY]: 254,
        },
      },
    },
    [ITEM_TYPE_NAMES.BOOTS]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [47, 34],
          [ITEM_STAT_TYPES.QUADRUPLE]: [40, 22],
          [ITEM_STAT_TYPES.ALL]: [22],
        },
        defense: {
          [ITEM_ARMOR_WEIGHTS.LIGHT]: 140,
          [ITEM_ARMOR_WEIGHTS.MEDIUM]: 165,
          [ITEM_ARMOR_WEIGHTS.HEAVY]: 191,
        },
      },
    },
  },

  [ITEM_CATEGORIES.TRINKET]: {
    [ITEM_TYPE_NAMES.ACCESSORY]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [110, 74],
          [ITEM_STAT_TYPES.QUADRUPLE]: [92, 49],
          [ITEM_STAT_TYPES.ALL]: [50],
        },
      },
    },
    [ITEM_TYPE_NAMES.AMULET]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [157, 108],
          [ITEM_STAT_TYPES.QUADRUPLE]: [133, 71],
          [ITEM_STAT_TYPES.ALL]: [72],
        },
      },
    },
    [ITEM_TYPE_NAMES.RING]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [126, 85],
          [ITEM_STAT_TYPES.QUADRUPLE]: [106, 56],
          [ITEM_STAT_TYPES.ALL]: [57],
        },
      },
    },
  },

  [ITEM_CATEGORIES.BACK]: {
    [ITEM_TYPE_NAMES.BACK_ITEM]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [63, 40],
          [ITEM_STAT_TYPES.QUADRUPLE]: [52, 27],
          [ITEM_STAT_TYPES.ALL]: [28],
        },
      },
    },
  },

  [ITEM_CATEGORIES.WEAPON]: {
    [ITEM_TYPE_NAMES.GREATSWORD]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [251, 179],
          [ITEM_STAT_TYPES.QUADRUPLE]: [215, 118],
          [ITEM_STAT_TYPES.ALL]: [118],
        },
        minPower: 1045,
        maxPower: 1155,
      },
    },
    [ITEM_TYPE_NAMES.HAMMER]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [251, 179],
          [ITEM_STAT_TYPES.QUADRUPLE]: [215, 118],
          [ITEM_STAT_TYPES.ALL]: [118],
        },
        minPower: 1034,
        maxPower: 1166,
      },
    },
    [ITEM_TYPE_NAMES.LONGBOW]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [251, 179],
          [ITEM_STAT_TYPES.QUADRUPLE]: [215, 118],
          [ITEM_STAT_TYPES.ALL]: [118],
        },
        minPower: 966,
        maxPower: 1134,
      },
    },
    [ITEM_TYPE_NAMES.RIFLE]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [251, 179],
          [ITEM_STAT_TYPES.QUADRUPLE]: [215, 118],
          [ITEM_STAT_TYPES.ALL]: [118],
        },
        minPower: 1035,
        maxPower: 1265,
      },
    },
    [ITEM_TYPE_NAMES.SHORT_BOW]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [251, 179],
          [ITEM_STAT_TYPES.QUADRUPLE]: [215, 118],
          [ITEM_STAT_TYPES.ALL]: [118],
        },
        minPower: 950,
        maxPower: 1050,
      },
    },
    [ITEM_TYPE_NAMES.STAFF]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [251, 179],
          [ITEM_STAT_TYPES.QUADRUPLE]: [215, 118],
          [ITEM_STAT_TYPES.ALL]: [118],
        },
        minPower: 1034,
        maxPower: 1166,
      },
    },

    [ITEM_TYPE_NAMES.AXE]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [125, 90],
          [ITEM_STAT_TYPES.QUADRUPLE]: [108, 59],
          [ITEM_STAT_TYPES.ALL]: [59],
        },
        minPower: 900,
        maxPower: 1100,
      },
    },
    [ITEM_TYPE_NAMES.DAGGER]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [125, 90],
          [ITEM_STAT_TYPES.QUADRUPLE]: [108, 59],
          [ITEM_STAT_TYPES.ALL]: [59],
        },
        minPower: 970,
        maxPower: 1030,
      },
    },
    [ITEM_TYPE_NAMES.MACE]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [125, 90],
          [ITEM_STAT_TYPES.QUADRUPLE]: [108, 59],
          [ITEM_STAT_TYPES.ALL]: [59],
        },
        minPower: 940,
        maxPower: 1060,
      },
    },
    [ITEM_TYPE_NAMES.PISTOL]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [125, 90],
          [ITEM_STAT_TYPES.QUADRUPLE]: [108, 59],
          [ITEM_STAT_TYPES.ALL]: [59],
        },
      },
    },
    [ITEM_TYPE_NAMES.SWORD]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [125, 90],
          [ITEM_STAT_TYPES.QUADRUPLE]: [108, 59],
          [ITEM_STAT_TYPES.ALL]: [59],
        },
        minPower: 950,
        maxPower: 1050,
      },
    },

    [ITEM_TYPE_NAMES.SCEPTER]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [125, 90],
          [ITEM_STAT_TYPES.QUADRUPLE]: [108, 59],
          [ITEM_STAT_TYPES.ALL]: [59],
        },
        minPower: 940,
        maxPower: 1060,
      },
    },

    [ITEM_TYPE_NAMES.FOCUS]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [125, 90],
          [ITEM_STAT_TYPES.QUADRUPLE]: [108, 59],
          [ITEM_STAT_TYPES.ALL]: [59],
        },
        minPower: 873,
        maxPower: 927,
      },
    },
    [ITEM_TYPE_NAMES.SHIELD]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [125, 90],
          [ITEM_STAT_TYPES.QUADRUPLE]: [108, 59],
          [ITEM_STAT_TYPES.ALL]: [59],
        },
        defense: 64,
        minPower: 846,
        maxPower: 954,
      },
    },
    [ITEM_TYPE_NAMES.TORCH]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [125, 90],
          [ITEM_STAT_TYPES.QUADRUPLE]: [108, 59],
          [ITEM_STAT_TYPES.ALL]: [59],
        },
        minPower: 828,
        maxPower: 972,
      },
    },
    [ITEM_TYPE_NAMES.WARHORN]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [125, 90],
          [ITEM_STAT_TYPES.QUADRUPLE]: [108, 59],
          [ITEM_STAT_TYPES.ALL]: [59],
        },
        minPower: 855,
        maxPower: 945,
      },
    },
    [ITEM_TYPE_NAMES.TRIDENT]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [251, 179],
          [ITEM_STAT_TYPES.QUADRUPLE]: [215, 118],
          [ITEM_STAT_TYPES.ALL]: [118],
        },
        minPower: 950,
        maxPower: 1050,
      },
    },
    [ITEM_TYPE_NAMES.HARPOON]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [251, 179],
          [ITEM_STAT_TYPES.QUADRUPLE]: [215, 118],
          [ITEM_STAT_TYPES.ALL]: [118],
        },
        minPower: 950,
        maxPower: 1050,
      },
    },
    [ITEM_TYPE_NAMES.SPEARGUN]: {
      [ITEM_RARITIES.ASCENDED]: {
        attributes: {
          [ITEM_STAT_TYPES.TRIPLE]: [251, 179],
          [ITEM_STAT_TYPES.QUADRUPLE]: [215, 118],
          [ITEM_STAT_TYPES.ALL]: [118],
        },
        minPower: 950,
        maxPower: 1050,
      },
    },
  },
};

export default itemModifiers;
