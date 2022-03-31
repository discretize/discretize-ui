import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Consumables from './Consumables';

export default {
  title: 'Character/Consumables',
  component: Consumables,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Consumables>;

const Template: ComponentStory<typeof Consumables> = (args) => {
  return <Consumables {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  foodId: 91805,
  utilityId: 50082,
};
