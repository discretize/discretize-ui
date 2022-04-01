import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Weapons from './Weapons';

export default {
  title: 'Character/Weapons',
  component: Weapons,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Weapons>;

const Template: ComponentStory<typeof Weapons> = (args) => {
  return <Weapons {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  weapon1MainId: 76158,
  weapon1MainAffix: 'Berserker',
  weapon1MainInfusion1Id: 49432,
  weapon1MainSigil1Id: 24615,
  weapon1MainSigil1: 'Force',
  weapon1OffId: 86098,
  weapon1OffAffix: 'Berserker',
  weapon1OffInfusionId: 49432,
  weapon1OffSigilId: 24868,
  weapon1OffSigil: 'Impact/night/slaying-both',
  weapon2MainId: 30689,
  weapon2MainAffix: 'Berserker',
  weapon2MainInfusion1Id: 49432,
  weapon2MainSigil1Id: 24615,
  weapon2MainInfusion2Id: 49432,
  weapon2MainSigil2Id: 24868,
  weapon2MainSigil1: 'Force',
  weapon2MainSigil2: 'Impact/night/slaying-both',
};
export const TwoHanded = Template.bind({});
TwoHanded.args = {
  weapon1MainId: 30689,
  weapon1MainAffix: 'Berserker',
  weapon1MainInfusion1Id: 49432,
  weapon1MainSigil1Id: 24615,
  weapon1MainInfusion2Id: 49432,
  weapon1MainSigil2Id: 24868,
  weapon1MainSigil1: 'Force',
  weapon1MainSigil2: 'Impact/night/slaying-both',
};
export const EmptyOffhand = Template.bind({});
EmptyOffhand.args = {
  weapon1MainId: 76158,
  weapon1MainAffix: 'Berserker',
  weapon1MainInfusion1Id: 49432,
  weapon1MainSigil1Id: 24615,
  weapon1MainSigil1: 'Force',
};
