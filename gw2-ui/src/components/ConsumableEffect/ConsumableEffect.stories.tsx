import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ConsumableEffect from './ConsumableEffect';

export default {
  title: 'Components/ConsumableEffect',
  component: ConsumableEffect,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof ConsumableEffect>;

const Template: ComponentStory<typeof ConsumableEffect> = (args) => {
  return <ConsumableEffect {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  name: 'Enhancement',
};
