import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Aura from './Aura';

export default {
  title: 'Components/Aura',
  component: Aura,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Aura>;

const Template: StoryFn<typeof Aura> = (args) => {
  return <Aura {...args} />;
};

export const Simple = {
  render: Template,

  args: {
    name: 'Light',
  },
};
