import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import Specialization from './Specialization';

const meta: Meta<typeof Specialization> = {
  title: 'Components/Specialization',
  component: Specialization,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Specialization> = (args) => {
  return <Specialization {...args} />;
};

export const Simple: StoryObj<typeof Specialization> = {
  render: Template,

  args: {
    id: 42,
  },
};
