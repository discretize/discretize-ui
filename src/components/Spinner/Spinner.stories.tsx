import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Spinner from './Spinner';

export default {
  title: 'Helper Components/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template = (args: ComponentProps<typeof Spinner>) => {
  return (
    <>
      Spinner with inline {args.inline ? 'enabled' : 'disabled'}
      <Spinner {...args} />
    </>
  );
};

export const Simple = Template.bind({});
