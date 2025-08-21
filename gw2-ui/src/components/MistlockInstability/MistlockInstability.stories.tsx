import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import MistlockInstability from './MistlockInstability';

const meta: Meta<typeof MistlockInstability> = {
  title: 'Components/MistlockInstability',
  component: MistlockInstability,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof MistlockInstability> = (args) => {
  return <MistlockInstability {...args} />;
};

export const Simple: StoryObj<typeof MistlockInstability> = {
  render: Template,

  args: {
    name: 'Adrenaline Rush',
  },
};
