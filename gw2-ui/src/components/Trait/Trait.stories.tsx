import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Trait from './Trait';

export default {
  title: 'Components/Trait',
  component: Trait,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Trait>;

const Template: StoryFn<typeof Trait> = (args) => {
  return <Trait {...args} />;
};

export const FreshAir = {
  render: Template,

  args: {
    id: 1503,
  },
};

export const RecklessDodge = {
  render: Template,

  args: {
    id: 1446,
  },
};
