import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import WikiLink from './WikiLink';

export default {
  title: 'Helper Components/WikiLink',
  component: WikiLink,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof WikiLink>;

const Template: StoryFn<typeof WikiLink> = (args) => {
  return (
    <>
      <WikiLink {...args} />
    </>
  );
};

export const BaneSignet = {
  render: Template,

  args: {
    to: 'Bane Signet',
  },
};
