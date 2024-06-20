import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import MistlockInstability from './MistlockInstability';

export default {
  title: 'Components/MistlockInstability',
  component: MistlockInstability,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof MistlockInstability>;

const Template: StoryFn<typeof MistlockInstability> = (args) => {
  return <MistlockInstability {...args} />;
};

export const Simple = {
  render: Template,

  args: {
    name: 'Adrenaline Rush',
  },
};
