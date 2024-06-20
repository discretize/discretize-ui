import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Progress from './Progress';

export default {
  title: 'Helper Components/Progress',
  component: Progress,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Progress>;

const Template: StoryFn<typeof Progress> = (args) => {
  return (
    <>
      <Progress {...args} />
    </>
  );
};

export const Simple = {
  render: Template,
};
