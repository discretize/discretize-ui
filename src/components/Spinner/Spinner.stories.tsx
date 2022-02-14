import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Helper Components/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => {
  return (
    <>
      Spinner with inline {args.inline ? 'enabled' : 'disabled'}
      <Spinner {...args} />
    </>
  );
};

export const Simple = Template.bind({});
