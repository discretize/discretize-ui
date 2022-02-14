import type { ComponentMeta } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Error from './Error';

export default {
  title: 'Helper Components/Error',
  component: Error,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Error>;

const Template = (args: ComponentProps<typeof Error>) => {
  return (
    <>
      <Error {...args} />
    </>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  code: 404,
  message: 'Quaggan experienced a devastating mishap *pohooo*',
  name: 'Mishap :(',
};
