import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import { APILanguageProvider } from '../../i18n';
import Race from './Race';

const meta: Meta<typeof Race> = {
  title: 'Components/Race',
  component: Race,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Race> = (args) => {
  return <Race {...args} />;
};

export const Simple: StoryObj<typeof Race> = {
  render: Template,

  args: {
    name: 'Asura',
  },
};

export function Languages() {
  return (
    <div>
      <Race name="Asura" />
      <br />

      <APILanguageProvider value="zh">
        <Race name="Asura" />
        <br />
      </APILanguageProvider>

      <APILanguageProvider value="es">
        <Race name="Human" />
        <br />
      </APILanguageProvider>
    </div>
  );
}
