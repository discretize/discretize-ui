import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Race from './Race';

export default {
  title: 'Components/Race',
  component: Race,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Race>;

const Template: ComponentStory<typeof Race> = (args) => {
  return <Race {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  name: 'Asura',
};
