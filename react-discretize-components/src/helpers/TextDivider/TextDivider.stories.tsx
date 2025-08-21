import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import TextDivider from './TextDivider';

const meta: Meta<typeof TextDivider> = {
  title: 'Components/TextDivider',
  component: TextDivider,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof TextDivider> = (args) => {
  return <TextDivider {...args} />;
};

export const Example: StoryObj<typeof TextDivider> = {
  render: Template,

  args: {
    text: 'Test',
  },
};
