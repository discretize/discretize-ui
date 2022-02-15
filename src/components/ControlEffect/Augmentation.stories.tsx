import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ControlEffect from './ControlEffect';

export default {
  title: 'Components/ControlEffect',
  component: ControlEffect,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof ControlEffect>;

const Template: ComponentStory<typeof ControlEffect> = (args) => {
  return <ControlEffect {...args} />;
};

export const Daze = Template.bind({});
Daze.args = {
  name: 'Daze',
};
