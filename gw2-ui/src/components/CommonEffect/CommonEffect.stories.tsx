import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { APILanguageProvider } from '../../i18n';
import CommonEffect from './CommonEffect';

const meta: Meta<typeof CommonEffect> = {
  title: 'Components/CommonEffect',
  component: CommonEffect,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof CommonEffect> = (args) => {
  return <CommonEffect {...args} />;
};

export const Simple: StoryObj<typeof CommonEffect> = {
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
