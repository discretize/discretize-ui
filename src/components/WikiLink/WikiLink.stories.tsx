import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import WikiLink from './WikiLink';

export default {
  title: 'Helper Components/WikiLink',
  component: WikiLink,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof WikiLink>;

const Template: ComponentStory<typeof WikiLink> = (args) => {
  return (
    <>
      <WikiLink {...args} />
    </>
  );
};

export const BaneSignet = Template.bind({});
BaneSignet.args = {
  to: 'Bane Signet',
};
