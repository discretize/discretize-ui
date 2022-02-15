import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Aura from './Aura';

export default {
  title: 'Components/Aura',
  component: Aura,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Aura>;

const Template: ComponentStory<typeof Aura> = (args) => {
  return <Aura {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  name: 'Light',
};
