import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import Weapons from './Weapons';

const meta: Meta<typeof Weapons> = {
  title: 'Character/Weapons',
  component: Weapons,
  // argTypes: {
  //   className: { control: false },
  // },
};
export default meta;

const Template: StoryFn<typeof Weapons> = (args) => {
  return <Weapons {...args} />;
};

export const Example: StoryObj<typeof Weapons> = {
  render: Template,

  args: {
    weapon1MainId: 76158,
    weapon1MainAffix: 'Berserker',
    weapon1MainInfusion1Id: 49432,
    weapon1MainSigil1Id: 24615,
    weapon1OffId: 86098,
    weapon1OffAffix: 'Berserker',
    weapon1OffInfusionId: 49432,
    weapon1OffSigilId: 24868,
    weapon2MainType: 'Greatsword',
    weapon2MainAffix: 'Berserker',
    weapon2MainInfusion1Id: 49432,
    weapon2MainSigil1Id: 24615,
    weapon2MainInfusion2Id: 49432,
    weapon2MainSigil2Id: 24868,
  },
};

export const TwoHanded: StoryObj<typeof Weapons> = {
  render: Template,

  args: {
    weapon1MainId: 30689,
    weapon1MainAffix: 'Berserker',
    weapon1MainInfusion1Id: 49432,
    weapon1MainSigil1Id: 24615,
    weapon1MainInfusion2Id: 49432,
    weapon1MainSigil2Id: 24868,
  },
};

export const EmptyOffhand: StoryObj<typeof Weapons> = {
  render: Template,

  args: {
    weapon1MainId: 76158,
    weapon1MainAffix: 'Berserker',
    weapon1MainInfusion1Id: 49432,
    weapon1MainSigil1Id: 24615,
  },
};
