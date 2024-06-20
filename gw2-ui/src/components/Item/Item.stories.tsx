import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Item from './Item';
import ITEM_STAT_NAMES from '../../builder/itemStatNames';

export default {
  title: 'Components/Item',
  component: Item,
  argTypes: {
    stat: {
      control: { type: 'select', options: Object.values(ITEM_STAT_NAMES) },
    },
    className: { control: false },
  },
} as Meta<typeof Item>;

const Template: StoryFn<typeof Item> = (args) => {
  return <Item {...args} />;
};

export const Single = {
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
      <br />
      This one does not have overrides:
      <br />
      <Item id={97826} />
      <br />
    </>
  );
}
