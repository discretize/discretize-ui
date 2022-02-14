import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Icon from './Icon';

export default {
  title: 'Helper Components/Icon',
  component: Icon,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (
  args: ComponentProps<typeof Icon>,
) => {
  return (
    <>
      <Icon {...args} />
    </>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  src: 'https://render.guildwars2.com/file/2FA9DF9D6BC17839BBEA14723F1C53D645DDB5E1/102852.png',
};
