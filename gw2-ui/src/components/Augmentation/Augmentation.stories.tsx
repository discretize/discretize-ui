import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import Augmentation from './Augmentation';

const meta: Meta<typeof Augmentation> = {
  title: 'Components/Augmentation',
  component: Augmentation,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Augmentation> = (args) => {
  return <Augmentation {...args} />;
};

export const God: StoryObj<typeof Augmentation> = {
  render: Template,

  args: {
    name: 'Mist Attunement 4',
  },
};
