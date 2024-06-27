import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import Legends from './Legends';

const meta: Meta<typeof Legends> = {
  title: 'Character/Legends',
  component: Legends,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Legends> = (args) => {
  return <Legends {...args} />;
};

export const Example: StoryObj<typeof Legends> = {
  render: Template,

  args: {
    legend1Id: 28419,
    legend2Id: 62891,
  },
};
