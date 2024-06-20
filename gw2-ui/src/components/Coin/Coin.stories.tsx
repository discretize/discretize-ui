import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Coin from './Coin';

export default {
  title: 'Components/Coin',
  component: Coin,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Coin>;

const Template: StoryFn<typeof Coin> = (args) => {
  return <Coin {...args} />;
};

export const CoinMight = {
  render: Template,

  args: {
    value: 1234123,
  },
};
