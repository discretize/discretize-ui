import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import TooltipContainer from './TooltipContainer';

const meta: Meta<typeof TooltipContainer> = {
  title: 'Helper Components/TooltipContainer',
  component: TooltipContainer,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof TooltipContainer> = (args) => {
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

export const Simple: StoryObj<typeof TooltipContainer> = {
  render: Template,
};
