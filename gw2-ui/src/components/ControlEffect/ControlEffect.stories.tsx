import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import ControlEffect from './ControlEffect';
import { APILanguageProvider } from '../../i18n';

const meta: Meta<typeof ControlEffect> = {
  title: 'Components/ControlEffect',
  component: ControlEffect,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof ControlEffect> = (args) => {
  return <ControlEffect {...args} />;
};

export const Daze: StoryObj<typeof ControlEffect> = {
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
