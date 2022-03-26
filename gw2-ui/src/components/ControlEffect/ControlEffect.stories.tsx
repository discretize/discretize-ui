import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ControlEffect from './ControlEffect';
import { Multiple } from '../Item/Item.stories';
import { APILanguageProvider } from '../../i18n';

export default {
  title: 'Components/ControlEffect',
  component: ControlEffect,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof ControlEffect>;

const Template: ComponentStory<typeof ControlEffect> = (args) => {
  return <ControlEffect {...args} />;
};

export const Daze = Template.bind({});
Daze.args = {
  name: 'Daze',
};

export function Translated() {
  return (
    <>
      This is an english effect: <ControlEffect name="Daze" />,{' '}
      <ControlEffect name="Knockback" />
      <APILanguageProvider value="de">
        <p>
          This is a chinese effect:
          <ControlEffect name="Daze" />, <ControlEffect name="Knockback" />
        </p>
      </APILanguageProvider>
    </>
  );
}
