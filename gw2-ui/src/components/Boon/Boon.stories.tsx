import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import Boon from './Boon';

const meta: Meta<typeof Boon> = {
  title: 'Components/Boon',
  component: Boon,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Boon> = (args) => {
  return <Boon {...args} />;
};

export const BoonMight: StoryObj<typeof Boon> = {
  render: Template,

  args: {
    name: 'Might',
  },
};
