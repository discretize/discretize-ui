import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TextDivider from './TextDivider';

export default {
  title: 'Components/TextDivider',
  component: TextDivider,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof TextDivider>;

const Template: ComponentStory<typeof TextDivider> = (args) => {
  return <TextDivider {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  text: 'Test',
};
