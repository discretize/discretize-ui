import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import WikiLink from './WikiLink';

const meta: Meta<typeof WikiLink> = {
  title: 'Helper Components/WikiLink',
  component: WikiLink,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof WikiLink> = (args) => {
  return (
    <>
      <WikiLink {...args} />
    </>
  );
};

export const BaneSignet: StoryObj<typeof WikiLink> = {
  render: Template,

  args: {
    to: 'Bane Signet',
  },
};
