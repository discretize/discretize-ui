import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Skills from './Skills';

export default {
  title: 'Character/Skills',
  component: Skills,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Skills>;

const Template: ComponentStory<typeof Skills> = (args) => {
  return <Skills {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  healId: 5802,
  utility1Id: 5838,
  utility2Id: 5933,
  utility3Id: 63262,
  eliteId: 30800,
};
