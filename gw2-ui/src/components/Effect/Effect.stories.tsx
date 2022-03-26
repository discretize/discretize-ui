import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Effect from './Effect';

export default {
  title: 'Helper Components/Effect',
  component: Effect,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Effect>;

const Template: ComponentStory<typeof Effect> = (args) => {
  return <Effect {...args} />;
};

export const BoonMight = Template.bind({});
BoonMight.args = {
  name: 'Might',
  type: 'Boon',
  description: 'Increased outgoing damage; stacks intensity.',
};
