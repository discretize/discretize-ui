import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import Progress from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Helper Components/Progress',
  component: Progress,
  // argTypes: {
  //   className: { control: false },
  // },
};
export default meta;

const Template: StoryFn<typeof Progress> = (args) => {
  return (
    <>
      <Progress {...args} />
    </>
  );
};

export const Simple: StoryObj<typeof Progress> = {
  render: Template,
};
