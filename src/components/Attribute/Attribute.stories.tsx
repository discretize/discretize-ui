import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Attribute from './Attribute';

export default {
  title: 'Components/Attribute',
  component: Attribute,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Attribute>;

const Template: ComponentStory<typeof Attribute> = (args) => {
  return <Attribute {...args} />;
};

export const BoonDuration = Template.bind({});
BoonDuration.args = {
  name: 'Boon Duration',
};
