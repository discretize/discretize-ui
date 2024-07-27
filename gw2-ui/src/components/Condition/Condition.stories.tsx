import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import Condition from './Condition';

const meta: Meta<typeof Condition> = {
  title: 'Components/Condition',
  component: Condition,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Condition> = (args) => {
  return <Condition {...args} />;
};

export const Bleed: StoryObj<typeof Condition> = {
  render: Template,

  args: {
    name: 'Bleeding',
  },
};
