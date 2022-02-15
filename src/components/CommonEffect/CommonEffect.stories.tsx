import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CommonEffect from './CommonEffect';

export default {
  title: 'Components/CommonEffect',
  component: CommonEffect,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof CommonEffect>;

const Template: ComponentStory<typeof CommonEffect> = (args) => {
  return <CommonEffect {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  name: 'Agony',
};
