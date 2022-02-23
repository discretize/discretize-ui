import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Progress from './Progress';

export default {
  title: 'Helper Components/Progress',
  component: Progress,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => {
  return (
    <>
      <Progress {...args} />
    </>
  );
};

export const Simple = Template.bind({});
