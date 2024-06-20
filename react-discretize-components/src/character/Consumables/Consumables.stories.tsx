import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import Consumables from './Consumables';

const meta: Meta<typeof Consumables> = {
  title: 'Character/Consumables',
  component: Consumables,
  // argTypes: {
  //   className: { control: false },
  // },
};
export default meta;

const Template: StoryFn<typeof Consumables> = (args) => {
  return <Consumables {...args} />;
};

export const Example: StoryObj<typeof Consumables> = {
  render: Template,

  args: {
    foodId: 91805,
    utilityId: 50082,
  },
};
