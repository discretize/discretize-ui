import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { APILanguageProvider } from '../../i18n';
import CommonEffect from './CommonEffect';

export default {
  title: 'Components/CommonEffect',
  component: CommonEffect,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof CommonEffect>;

const Template: StoryFn<typeof CommonEffect> = (args) => {
  return <CommonEffect {...args} />;
};

export const Simple = {
  render: Template,

  args: {
    name: 'Agony',
  },
};

export function Translated() {
  return (
    <>
      This is an english effect: <CommonEffect name="Agony" />,{' '}
      <CommonEffect name="Barrier" />
      <APILanguageProvider value="de">
        <p>
          This is a german effect:
          <CommonEffect name="Mistlock Singularity" />,{' '}
          <CommonEffect name="Revealed" />
        </p>
      </APILanguageProvider>
    </>
  );
}
