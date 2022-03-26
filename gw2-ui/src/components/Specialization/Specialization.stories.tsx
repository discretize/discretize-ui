import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Specialization from './Specialization';

export default {
  title: 'Components/Specialization',
  component: Specialization,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Specialization>;

const Template: ComponentStory<typeof Specialization> = (args) => {
  return <Specialization {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  id: 42,
};
