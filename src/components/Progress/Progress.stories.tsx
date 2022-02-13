import type { ComponentMeta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Progress from './Progress';

export default {
  title: 'Helper Components/Progress',
  component: Progress,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Progress>;

const Template = (args: ComponentProps<typeof Progress>) => {
  return (
    <>
      <Progress {...args} />
    </>
  );
};

export const Simple = Template.bind({});
