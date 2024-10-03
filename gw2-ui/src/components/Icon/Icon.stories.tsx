import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { type ComponentProps } from 'react';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Helper Components/Icon',
  component: Icon,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Icon> = (args: ComponentProps<typeof Icon>) => {
  return (
    <>
      <Icon {...args} />
    </>
  );
};

export const Simple: StoryObj<typeof Icon> = {
  render: Template,

  args: {
    src: 'https://render.guildwars2.com/file/2FA9DF9D6BC17839BBEA14723F1C53D645DDB5E1/102852.png',
  },
};
