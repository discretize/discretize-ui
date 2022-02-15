import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Boon from './Boon';

export default {
  title: 'Components/Boon',
  component: Boon,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Boon>;

const Template: ComponentStory<typeof Boon> = (args) => {
  return <Boon {...args} />;
};

export const BoonMight = Template.bind({});
BoonMight.args = {
  name: 'Might',
};
