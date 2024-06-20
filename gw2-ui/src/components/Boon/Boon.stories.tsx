import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Boon from './Boon';

export default {
  title: 'Components/Boon',
  component: Boon,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Boon>;

const Template: StoryFn<typeof Boon> = (args) => {
  return <Boon {...args} />;
};

export const BoonMight = {
  render: Template,

  args: {
    name: 'Might',
  },
};
