import type { ComponentMeta } from '@storybook/react';
import React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Helper Components/Tooltip',
  component: Tooltip,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Tooltip>;

const Template = (args) => {
  return (
    <>
      <Tooltip
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
    </>
  );
};

export const Simple = Template.bind({});
