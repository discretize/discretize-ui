import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import HelperIcon from './HelperIcon';

export default {
  title: 'Components/HelperIcon',
  component: HelperIcon,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof HelperIcon>;

const Template: StoryFn<typeof HelperIcon> = (args) => {
  return <HelperIcon {...args} />;
};

export const Example = {
  render: Template,

  args: {
    text: 'Test-Helper',
  },
};
