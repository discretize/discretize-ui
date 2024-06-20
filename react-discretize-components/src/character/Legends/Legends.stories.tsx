import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Legends from './Legends';

export default {
  title: 'Character/Legends',
  component: Legends,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Legends>;

const Template: StoryFn<typeof Legends> = (args) => {
  return <Legends {...args} />;
};

export const Example = {
  render: Template,

  args: {
    legend1Id: 28419,
    legend2Id: 62891,
  },
};
