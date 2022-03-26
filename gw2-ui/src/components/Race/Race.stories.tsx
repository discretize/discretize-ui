import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { APILanguageProvider } from '../../i18n';
import Race from './Race';

export default {
  title: 'Components/Race',
  component: Race,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Race>;

const Template: ComponentStory<typeof Race> = (args) => {
  return <Race {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  name: 'Asura',
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
