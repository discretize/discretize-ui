import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import Effect from './Effect';

const meta: Meta<typeof Effect> = {
  title: 'Helper Components/Effect',
  component: Effect,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Effect> = (args) => {
  return <Effect {...args} />;
};

export const BoonMight: StoryObj<typeof Effect> = {
  render: Template,

  args: {
    name: 'Might',
    type: 'Boon',
    description: 'Increased outgoing damage; stacks intensity.',
  },
};
