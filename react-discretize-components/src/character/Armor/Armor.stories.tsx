import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import Armor from './Armor';

const meta: Meta<typeof Armor> = {
  title: 'Character/Armor',
  component: Armor,
  // argTypes: {
  //   className: { control: false },
  // },
};
export default meta;

const Template: StoryFn<typeof Armor> = (args) => {
  return <Armor {...args} />;
};

export const Example: StoryObj<typeof Armor> = {
  render: Template,

  args: {
    helmAffix: 'Berserker',
    helmRuneId: 24836,
    helmInfusionId: 49432,
    shouldersAffix: 'Berserker',
    shouldersRuneId: 24836,
    shouldersInfusionId: 49432,
    coatAffix: 'Berserker',
    coatRuneId: 24836,
    coatInfusionId: 49432,
    glovesAffix: 'Berserker',
    glovesRuneId: 24836,
    glovesInfusionId: 49432,
    leggingsAffix: 'Berserker',
    leggingsRuneId: 24836,
    leggingsInfusionId: 49432,
    bootsAffix: 'Berserker',
    bootsRuneId: 24836,
    bootsInfusionId: 49432,
    helmId: 48075,
    shouldersId: 48077,
    coatId: 48073,
    glovesId: 48074,
    leggingsId: 48076,
    bootsId: 48072,
  },
};

export const NoIds: StoryObj<typeof Armor> = {
  render: Template,

  args: {
    weight: 'Heavy',
    helmAffix: 'Berserker',
    helmRuneId: 24836,
    helmInfusionId: 49432,
    shouldersAffix: 'Berserker',
    shouldersRuneId: 24836,
    shouldersInfusionId: 49432,
    coatAffix: 'Berserker',
    coatRuneId: 24836,
    coatInfusionId: 49432,
    glovesAffix: 'Berserker',
    glovesRuneId: 24836,
    glovesInfusionId: 49432,
    leggingsAffix: 'Berserker',
    leggingsRuneId: 24836,
    leggingsInfusionId: 49432,
    bootsAffix: 'Berserker',
    bootsRuneId: 24836,
    bootsInfusionId: 49432,
  },
};
