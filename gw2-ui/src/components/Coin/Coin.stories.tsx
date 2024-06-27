import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import Coin from './Coin';

const meta: Meta<typeof Coin> = {
  title: 'Components/Coin',
  component: Coin,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Coin> = (args) => {
  return <Coin {...args} />;
};

export const CoinMight: StoryObj<typeof Coin> = {
  render: Template,

  args: {
    value: 1234123,
  },
};
