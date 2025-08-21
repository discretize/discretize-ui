import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import { APILanguageProvider } from '../../i18n/';
import Profession from './Profession';

const meta: Meta<typeof Profession> = {
  title: 'Components/Profession',
  component: Profession,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Profession> = (args) => {
  return <Profession {...args} />;
};

export const Firebrand: StoryObj<typeof Profession> = {
  render: Template,

  args: {
    name: 'Firebrand',
  },
};

export const Invalid: StoryObj<typeof Profession> = {
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
