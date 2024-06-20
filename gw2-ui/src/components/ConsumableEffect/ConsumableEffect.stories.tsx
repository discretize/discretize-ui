import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ConsumableEffect from './ConsumableEffect';

export default {
  title: 'Components/ConsumableEffect',
  component: ConsumableEffect,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof ConsumableEffect>;

const Template: StoryFn<typeof ConsumableEffect> = (args) => {
  return <ConsumableEffect {...args} />;
};

export const Simple = {
  render: Template,

  args: {
    name: 'Enhancement',
  },
};
