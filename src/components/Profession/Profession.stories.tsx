import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { APILanguageProvider } from '../../gw2api/hooks';
import Profession from './Profession';

export default {
  title: 'Components/Profession',
  component: Profession,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Profession>;

const Template: ComponentStory<typeof Profession> = (args) => {
  return <Profession {...args} />;
};

export const Firebrand = Template.bind({});
Firebrand.args = {
  name: 'Firebrand',
};

export const invalid = Template.bind({});
invalid.args = {
  name: 'AAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh' as any,
};

export function Translated() {
  return (
    <>
      This is an english guardian: <Profession name="Guardian" />
      <APILanguageProvider value="zh">
        <p>
          This is a chinese guardian:
          <Profession name="Guardian" />
        </p>
      </APILanguageProvider>
    </>
  );
}
