import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Helper Components/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = (args) => {
  return (
    <>
      Spinner with inline {args.inline ? 'enabled' : 'disabled'}
      <Spinner {...args} />
    </>
  );
};

export const Simple = {
  render: Template,
};
