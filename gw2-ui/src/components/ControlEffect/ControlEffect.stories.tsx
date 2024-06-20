import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ControlEffect from './ControlEffect';
import { APILanguageProvider } from '../../i18n';

export default {
  title: 'Components/ControlEffect',
  component: ControlEffect,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof ControlEffect>;

const Template: StoryFn<typeof ControlEffect> = (args) => {
  return <ControlEffect {...args} />;
};

export const Daze = {
  render: Template,

  args: {
    name: 'Daze',
  },
};

export function Translated() {
  return (
    <>
      This is an english effect: <ControlEffect name="Daze" />,{' '}
      <ControlEffect name="Knockback" />
      <APILanguageProvider value="de">
        <p>
          This is a german effect:
          <ControlEffect name="Daze" />, <ControlEffect name="Knockback" />
        </p>
      </APILanguageProvider>
    </>
  );
}
