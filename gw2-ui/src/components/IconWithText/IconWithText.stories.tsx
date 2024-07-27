import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import IconWithText from './IconWithText';

const meta: Meta<typeof IconWithText> = {
  title: 'Helper Components/IconWithText',
  component: IconWithText,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof IconWithText> = (args) => {
  return (
    <>
      <IconWithText {...args} />
    </>
  );
};

export const BaneSignet: StoryObj<typeof IconWithText> = {
  render: Template,

  args: {
    icon: 'https://render.guildwars2.com/file/9FF294A9CC489D4FE8CED934A0C4359964B67443/103638.png',
    text: 'Bane Signet',
  },
};

export const Loading: StoryObj<typeof IconWithText> = {
  render: Template,

  args: {
    loading: true,
  },
};
