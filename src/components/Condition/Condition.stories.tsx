import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Condition from './Condition';

export default {
  title: 'Components/Condition',
  component: Condition,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Condition>;

const Template: ComponentStory<typeof Condition> = (args) => {
  return <Condition {...args} />;
};

export const Bleed = Template.bind({});
Bleed.args = {
  name: 'Bleeding',
};
