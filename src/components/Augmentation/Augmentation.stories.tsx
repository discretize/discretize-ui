import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Augmentation from './Augmentation';

export default {
  title: 'Components/Augmentation',
  component: Augmentation,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Augmentation>;

const Template: ComponentStory<typeof Augmentation> = (args) => {
  return <Augmentation {...args} />;
};

export const God = Template.bind({});
God.args = {
  name: 'Mist Attunement 4',
};
