import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import Attribute from './Attribute';

const meta: Meta<typeof Attribute> = {
  title: 'Components/Attribute',
  component: Attribute,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Attribute> = (args) => {
  return <Attribute {...args} />;
};

export const BoonDuration: StoryObj<typeof Attribute> = {
  render: Template,

  args: {
    name: 'Boon Duration',
  },
};
