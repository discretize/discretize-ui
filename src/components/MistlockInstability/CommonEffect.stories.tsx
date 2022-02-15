import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MistlockInstability from './MistlockInstability';

export default {
  title: 'Components/MistlockInstability',
  component: MistlockInstability,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof MistlockInstability>;

const Template: ComponentStory<typeof MistlockInstability> = (args) => {
  return <MistlockInstability {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  name: 'Adrenaline Rush',
};
