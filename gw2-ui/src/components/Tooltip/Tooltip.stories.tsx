import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Helper Components/Tooltip',
  component: Tooltip,
  // argTypes: {
  //   className: { control: false },
  // },
};
export default meta;

const Template: StoryFn<typeof Tooltip> = (args) => {
  return (
    <>
      <Tooltip
        {...args}
        content={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </>
        }
      >
        <div
          style={{
            padding: 5,
            borderRadius: 5,
            backgroundColor: 'orange',
          }}
        >
          Hover me
        </div>
      </Tooltip>
      <br />
      <Tooltip {...args} content={<>Lorem ipsum</>} disabled>
        <div
          style={{
            padding: 5,
            borderRadius: 5,
            backgroundColor: 'grey',
          }}
        >
          My Tooltip is disabled
        </div>
      </Tooltip>
    </>
  );
};

export const Simple: StoryObj<typeof Tooltip> = {
  render: Template,
};
