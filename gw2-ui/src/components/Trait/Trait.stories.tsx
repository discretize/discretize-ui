import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import Trait from './Trait';

const meta: Meta<typeof Trait> = {
  title: 'Components/Trait',
  component: Trait,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Trait> = (args) => {
  return <Trait {...args} />;
};

export const FreshAir: StoryObj<typeof Trait> = {
  render: Template,

  args: {
    id: 1503,
  },
};

export const RecklessDodge: StoryObj<typeof Trait> = {
  render: Template,

  args: {
    id: 1446,
  },
};
