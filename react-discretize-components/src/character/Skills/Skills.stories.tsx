import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import Skills from './Skills';

const meta: Meta<typeof Skills> = {
  title: 'Character/Skills',
  component: Skills,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Skills> = (args) => {
  return <Skills {...args} />;
};

export const Example: StoryObj<typeof Skills> = {
  render: Template,

  args: {
    healId: 5802,
    utility1Id: 5838,
    utility2Id: 5933,
    utility3Id: 63262,
    eliteId: 30800,
  },
};
