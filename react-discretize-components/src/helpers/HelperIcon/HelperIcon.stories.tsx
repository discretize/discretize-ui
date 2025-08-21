import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import HelperIcon from './HelperIcon';

const meta: Meta<typeof HelperIcon> = {
  title: 'Components/HelperIcon',
  component: HelperIcon,
  // argTypes: {
  //   className: { control: false },
  // },
};
export default meta;

const Template: StoryFn<typeof HelperIcon> = (args) => {
  return <HelperIcon {...args} />;
};

export const Example: StoryObj<typeof HelperIcon> = {
  render: Template,

  args: {
    text: 'Test-Helper',
  },
};
