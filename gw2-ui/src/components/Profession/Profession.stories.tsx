import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { APILanguageProvider } from '../../i18n/';
import Profession from './Profession';

export default {
  title: 'Components/Profession',
  component: Profession,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Profession>;

const Template: StoryFn<typeof Profession> = (args) => {
  return <Profession {...args} />;
};

export const Firebrand = {
  render: Template,

  args: {
    name: 'Firebrand',
  },
};

export const invalid = {
  render: Template,

  args: {
    name: 'AAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh' as any,
  },
};

export function Translated() {
  return (
    <>
      This is an english guardian: <Profession name="Guardian" />,{' '}
      <Profession name="Willbender" />
      <APILanguageProvider value="zh">
        <p>
          This is a chinese guardian:
          <Profession name="Guardian" />, <Profession name="Willbender" />
        </p>
      </APILanguageProvider>
    </>
  );
}
