import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import TextDivider from './TextDivider';

export default {
  title: 'Components/TextDivider',
  component: TextDivider,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof TextDivider>;

const Template: StoryFn<typeof TextDivider> = (args) => {
  return <TextDivider {...args} />;
};

export const Example = {
  render: Template,

  args: {
    text: 'Test',
  },
};
