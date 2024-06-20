import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Specialization from './Specialization';

export default {
  title: 'Components/Specialization',
  component: Specialization,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Specialization>;

const Template: StoryFn<typeof Specialization> = (args) => {
  return <Specialization {...args} />;
};

export const Simple = {
  render: Template,

  args: {
    id: 42,
  },
};
