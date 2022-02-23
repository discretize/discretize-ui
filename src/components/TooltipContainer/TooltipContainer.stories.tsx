import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TooltipContainer from './TooltipContainer';

export default {
  title: 'Helper Components/TooltipContainer',
  component: TooltipContainer,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof TooltipContainer>;

const Template: ComponentStory<typeof TooltipContainer> = (args) => {
  return (
    <>
      <TooltipContainer {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TooltipContainer>
    </>
  );
};

export const Simple = Template.bind({});
