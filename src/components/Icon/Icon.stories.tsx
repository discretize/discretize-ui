import type { ComponentMeta } from '@storybook/react';
import React from 'react';
import Icon from './Icon';

export default {
  title: 'Helper Components/Icon',
  component: Icon,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Icon>;

const Template = (args) => {
  return (
    <>
      <Icon {...args} />
    </>
  );
};

export const Simple = Template.bind({});
