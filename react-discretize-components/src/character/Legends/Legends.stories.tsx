import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Legends from './Legends';

export default {
  title: 'Character/Legends',
  component: Legends,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Legends>;

const Template: ComponentStory<typeof Legends> = (args) => {
  return <Legends {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  legend1Id: 28419,
  legend2Id: 62891,
};
