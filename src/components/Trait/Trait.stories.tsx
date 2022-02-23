import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Trait from './Trait';

export default {
  title: 'Components/Trait',
  component: Trait,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Trait>;

const Template: ComponentStory<typeof Trait> = (args) => {
  return <Trait {...args} />;
};

export const FreshAir = Template.bind({});
FreshAir.args = {
  id: 1503,
};

export const RecklessDodge = Template.bind({});
RecklessDodge.args = {
  id: 1446,
};
