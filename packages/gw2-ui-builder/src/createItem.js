import ITEM_ARMOR_WEIGHTS from './itemArmorWeights';
import ITEM_CATEGORIES from './itemCategories';
import ITEM_CATEGORY_NAMES from './itemCategoryNames';
import ITEM_MODIFIERS from './itemModifiers';
import ITEM_RARITIES from './itemRarities';
import ITEM_STAT_NAMES from './itemStatNames';
import ITEM_STATS from './itemStats';
import ITEM_TYPE_NAMES from './itemTypeNames';

const getModifiers = ({ rarity, category, type, stat, weight }) => {
  const {
    attributes: attributeModifiers,
    defense: defensePerWeight,
    minPower,
    maxPower,
  } = ITEM_MODIFIERS[category][type][rarity];

  const { type: statType, bonuses: statBonuses } = ITEM_STATS[stat];

  const statModifiers = attributeModifiers[statType];

  if (!statModifiers) {
    throw new Error(`Invalid item stat '${stat}' for type '${type}'`);
  }

  const attributes = [];
  statModifiers.forEach((modifier, index) =>
    statBonuses[index].forEach(attribute =>
      attributes.push({
        attribute,
        modifier,
      }),
    ),
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

export default ({
  rarity = ITEM_RARITIES.ASCENDED,
  level = 80,
  type,
  stat,
  weight,
  nameSuffix = type,
  name = `${stat}'s ${nameSuffix}`,
}) => {
  if (!rarity) {
    throw new Error(`Missing item rarity`);
  } else if (rarity !== ITEM_RARITIES.ASCENDED) {
    throw new Error(
      `Invalid item rarity '${rarity}', only '${
        ITEM_RARITIES.ASCENDED
      }' is supported`,
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

  const category = Object.keys(ITEM_CATEGORIES).find(key =>
    ITEM_CATEGORIES[key].includes(type),
  );

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

  return {
    ...(name && { name }),
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
