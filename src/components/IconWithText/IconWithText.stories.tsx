import type { ComponentMeta } from '@storybook/react';
import React from 'react';
import IconWithText from './IconWithText';

export default {
  title: 'Helper Components/IconWithText',
  component: IconWithText,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof IconWithText>;

const Template = (args) => {
  return (
    <>
      <IconWithText {...args} />
    </>
  );
};

export const BaneSignet = Template.bind({});
BaneSignet.args = {
  icon: 'https://render.guildwars2.com/file/9FF294A9CC489D4FE8CED934A0C4359964B67443/103638.png',
  text: 'Bane Signet',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
