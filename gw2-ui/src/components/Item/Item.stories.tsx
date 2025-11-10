import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import Item from './Item';
import ITEM_STAT_NAMES from '../../builder/itemStatNames';

const meta: Meta<typeof Item> = {
  title: 'Components/Item',
  component: Item,
  argTypes: {
    stat: {
      control: { type: 'select', options: Object.values(ITEM_STAT_NAMES) },
    },
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Item> = (args) => {
  return <Item {...args} />;
};

export const Single: StoryObj<typeof Item> = {
  render: Template,

  args: {
    id: 75187,
    upgrades: [86303, 86303],
  },
};

export function Multiple() {
  return (
    <>
      Empty: <Item id={75187} />
      <br />
      With Infusions: <Item id={75187} upgrades={[86303, 86303]} />
      <br />
      With Runes: <Item id={48073} upgrades={[[24706, 2]]} />
      <br />
      Invalid id: <Item id={42} />
      <br />
      Invalid upgrade: <Item id={48073} upgrades={[42]} />
    </>
  );
}

export function AscendedFood() {
  return (
    <>
      Ascended Food requires API overrides, otherwise the details are missing.
      <br />
      <Item id={91805} />
      <br />
      <Item id={97200} />
      <br />
      <Item id={99785} />
      <br />
    </>
  );
}

export const Spear = {
  name: 'Spear/Harpoon Gun',
  render: () => (
    <>
      <p>
        {`Spears/Harpoon Guns should have the correct tooltips even though their API types are "Harpoon" and "Speargun."`}
      </p>
      <Item id={73580} upgrades={[44944, 44950]} />
      <br />
      <Item id={74034} upgrades={[44944, 44950]} />
    </>
  ),
};
