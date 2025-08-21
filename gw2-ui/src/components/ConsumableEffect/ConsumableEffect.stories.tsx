import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import ConsumableEffect from './ConsumableEffect';

const meta: Meta<typeof ConsumableEffect> = {
  title: 'Components/ConsumableEffect',
  component: ConsumableEffect,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof ConsumableEffect> = (args) => {
  return <ConsumableEffect {...args} />;
};

export const Simple: StoryObj<typeof ConsumableEffect> = {
  render: Template,

  args: {
    name: 'Enhancement',
  },
};
