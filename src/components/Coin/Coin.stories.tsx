import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Coin from './Coin';

export default {
  title: 'Components/Coin',
  component: Coin,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Coin>;

const Template: ComponentStory<typeof Coin> = (args) => {
  return <Coin {...args} />;
};

export const CoinMight = Template.bind({});
CoinMight.args = {
  value: 1234123,
};
