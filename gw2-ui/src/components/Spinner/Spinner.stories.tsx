import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import Spinner from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Helper Components/Spinner',
  component: Spinner,
};
export default meta;

const Template: StoryFn<typeof Spinner> = (args) => {
  return (
    <>
      Spinner with inline {args.inline ? 'enabled' : 'disabled'}
      <Spinner {...args} />
    </>
  );
};

export const Simple: StoryObj<typeof Spinner> = {
  render: Template,
};
