import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Effect from './Effect';

export default {
  title: 'Helper Components/Effect',
  component: Effect,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Effect>;

const Template: StoryFn<typeof Effect> = (args) => {
  return <Effect {...args} />;
};

export const BoonMight = {
  render: Template,

  args: {
    name: 'Might',
    type: 'Boon',
    description: 'Increased outgoing damage; stacks intensity.',
  },
};
