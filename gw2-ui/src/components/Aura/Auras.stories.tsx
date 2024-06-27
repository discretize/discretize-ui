import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import Aura from './Aura';

const meta: Meta<typeof Aura> = {
  title: 'Components/Aura',
  component: Aura,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Aura> = (args) => {
  return <Aura {...args} />;
};

export const Simple: StoryObj<typeof Aura> = {
  render: Template,

  args: {
    name: 'Light',
  },
};
