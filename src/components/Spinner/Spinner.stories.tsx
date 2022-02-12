import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Spinner from './Spinner';

export default {
  title: 'Helper Components/Spinner',
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

export const Simple = () => (
  <>
    A Spinner <Spinner component={{}} inline={false} /> to signal loading.
  </>
);

export const Inline = () => (
  <>
    An inline Spinner <Spinner component={{}} inline={true} /> to signal
    loading.
  </>
);
