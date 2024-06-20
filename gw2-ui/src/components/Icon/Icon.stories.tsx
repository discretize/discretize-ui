import type { Meta, StoryFn } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Icon from './Icon';

export default {
  title: 'Helper Components/Icon',
  component: Icon,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args: ComponentProps<typeof Icon>) => {
  return (
    <>
      <Icon {...args} />
    </>
  );
};

export const Simple = {
  render: Template,

  args: {
    src: 'https://render.guildwars2.com/file/2FA9DF9D6BC17839BBEA14723F1C53D645DDB5E1/102852.png',
  },
};
