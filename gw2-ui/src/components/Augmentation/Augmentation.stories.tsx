import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Augmentation from './Augmentation';

export default {
  title: 'Components/Augmentation',
  component: Augmentation,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Augmentation>;

const Template: StoryFn<typeof Augmentation> = (args) => {
  return <Augmentation {...args} />;
};

export const God = {
  render: Template,

  args: {
    name: 'Mist Attunement 4',
  },
};
