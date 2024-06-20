import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Attribute from './Attribute';

export default {
  title: 'Components/Attribute',
  component: Attribute,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Attribute>;

const Template: StoryFn<typeof Attribute> = (args) => {
  return <Attribute {...args} />;
};

export const BoonDuration = {
  render: Template,

  args: {
    name: 'Boon Duration',
  },
};
