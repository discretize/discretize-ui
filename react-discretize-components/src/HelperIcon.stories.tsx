import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import HelperIcon from './HelperIcon';

export default {
  title: 'Components/HelperIcon',
  component: HelperIcon,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof HelperIcon>;

const Template: ComponentStory<typeof HelperIcon> = (args) => {
  return <HelperIcon {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  text: 'Test-Helper',
};
