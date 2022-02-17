import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ITEM_ARMOR_WEIGHTS from '../../builder/itemArmorWeights';
import ITEM_RARITIES from '../../builder/itemRarities';
import ITEM_STAT_NAMES from '../../builder/itemStatNames';
import ITEM_TYPE_NAMES from '../../builder/itemTypeNames';
import CreateItem from './CreateItem';

export default {
  title: 'Components/CreateItem',
  component: CreateItem,
  argTypes: {
    className: { control: false },
    type: {
      control: { type: 'select', options: Object.values(ITEM_TYPE_NAMES) },
    },
    stat: {
      control: { type: 'select', options: Object.values(ITEM_STAT_NAMES) },
    },
    weight: {
      control: { type: 'select', options: Object.values(ITEM_ARMOR_WEIGHTS) },
    },
    rarity: {
      control: { type: 'select', options: Object.values(ITEM_RARITIES) },
    },
  },
} as ComponentMeta<typeof CreateItem>;

const Template: ComponentStory<typeof CreateItem> = (args) => {
  return <CreateItem {...args} />;
};

export const Single = Template.bind({});
Single.args = {
  type: 'Mace',
  stat: 'Berserker',
  upgrades: [86303, 86303],
};
