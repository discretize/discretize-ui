import { type Attribute } from './attributes';
import ITEM_ARMOR_WEIGHTS, { type ItemArmorWeight } from './itemArmorWeights';
import ITEM_CATEGORIES from './itemCategories';
import ITEM_CATEGORY_NAMES, {
  type ItemCategoryName,
} from './itemCategoryNames';
import ITEM_MODIFIERS, {
  type ItemModifier,
  type ItemModifierAttribute,
  type ItemModifiers,
} from './itemModifiers';
import ITEM_RARITIES, { type ItemRarity } from './itemRarities';
import ITEM_STAT_NAMES, { type ItemStatName } from './itemStatNames';
import ITEM_STATS, { type ItemStat } from './itemStats';
import ITEM_TYPE_NAMES, {
  itemTypeDisplayOverrides,
  type ItemTypeName,
} from './itemTypeNames';
import type GW2ApiInfixUpgrade from '../gw2api/types/items/details/common/infixUpgrade';

export interface GetModifiersProps {
  rarity: ItemRarity;
  category: ItemCategoryName;
  type: ItemTypeName;
  stat: ItemStatName;
  weight?: ItemArmorWeight;
}

export interface CreateItemProps {
  rarity?: ItemRarity;
  level?: number;
  type: ItemTypeName;
  stat: ItemStatName;
  weight?: ItemArmorWeight;
  nameSuffix?: string;
  name?: string;
}

export interface ItemAttribute {
  attribute: Attribute;
  modifier: ItemModifier;
}

export interface ItemModifiersResult {
  attributes: ItemAttribute[];
  defense?: ItemModifier;
  minPower?: ItemModifier;
  maxPower?: ItemModifier;
}

export interface ItemDetails {
  type: ItemTypeName;
  weight_class?: ItemArmorWeight;
  min_power?: ItemModifier;
  max_power?: ItemModifier;
  defense?: ItemModifier;
  infix_upgrade?: GW2ApiInfixUpgrade;
}

export interface CreateItemResult {
  name: string;
  type: ItemCategoryName;
  level?: number;
  rarity: ItemRarity;
  details: ItemDetails;
}

const getModifiers = ({
  rarity,
  category,
  type,
  stat,
  weight,
}: GetModifiersProps): ItemModifiersResult => {
  const {
    attributes: attributeModifiers,
    defense: defensePerWeight,
    minPower,
    maxPower,
  }: ItemModifiers = ITEM_MODIFIERS[category][type][rarity];

  const { type: statType, bonuses: statBonuses }: ItemStat = ITEM_STATS[stat];

  const statModifiers: ItemModifierAttribute | undefined =
    attributeModifiers !== undefined ? attributeModifiers[statType] : undefined;

  if (!statModifiers) {
    throw new Error(`Invalid item stat '${stat}' for type '${type}'`);
  }

  const attributes = statModifiers.flatMap((modifier, index) =>
    statBonuses[index].flatMap((attribute) => {
      return {
        attribute,
        modifier,
      };
    }),
  );

  const defense =
    defensePerWeight &&
    (typeof defensePerWeight === 'number'
      ? defensePerWeight
      : weight && defensePerWeight[weight]);

  return {
    attributes,
    ...(defense && { defense }),
    ...(minPower && { minPower }),
    ...(maxPower && { maxPower }),
  };
};

const createItem = ({
  rarity = ITEM_RARITIES.ASCENDED,
  level = 80,
  type,
  stat,
  weight,
  nameSuffix: nameSuffixOverride,
  name: nameOverride,
}: CreateItemProps): CreateItemResult => {
  if (!rarity) {
    throw new Error(`Missing item rarity`);
  } else if (![ITEM_RARITIES.ASCENDED, ITEM_RARITIES.EXOTIC].includes(rarity)) {
    throw new Error(
      `Invalid item rarity '${rarity}', only '${ITEM_RARITIES.ASCENDED}' and '${ITEM_RARITIES.EXOTIC}' are supported`,
    );
  }
  if (!level) {
    throw new Error(`Missing item level`);
  } else if (level !== 80) {
    throw new Error(`Invalid item level ${level}, only level 80 is supported`);
  }

  if (!type) {
    throw new Error(`Missing item type`);
  } else if (!Object.values(ITEM_TYPE_NAMES).includes(type)) {
    throw new Error(`Invalid item type '${type}'`);
  }

  if (!stat) {
    throw new Error(`Missing item stat`);
  } else if (!Object.values(ITEM_STAT_NAMES).includes(stat)) {
    throw new Error(`Invalid item stat '${stat}'`);
  }

  const category = Object.keys(ITEM_CATEGORIES).find((key) =>
    ITEM_CATEGORIES[key].includes(type),
  );

  if (!category) {
    throw new Error('Missing category');
  }

  if (category === ITEM_CATEGORY_NAMES.ARMOR) {
    if (!weight) {
      throw new Error(`Missing item armor weight`);
    } else if (!Object.values(ITEM_ARMOR_WEIGHTS).includes(weight)) {
      throw new Error(`Invalid item armor weight '${weight}'`);
    }
  }

  const { defense, minPower, maxPower, attributes } = getModifiers({
    rarity,
    category,
    type,
    stat,
    weight,
  });

  const nameSuffix =
    nameSuffixOverride || itemTypeDisplayOverrides[type] || type;
  const name = nameOverride || `${stat}'s ${nameSuffix}`;

  return {
    name,
    type: category,
    level,
    rarity,
    details: {
      type,
      weight_class: weight,
      ...(minPower && { min_power: minPower }),
      ...(maxPower && { max_power: maxPower }),
      ...(defense && { defense }),
      infix_upgrade: { attributes },
    },
  };
};

export default createItem;
