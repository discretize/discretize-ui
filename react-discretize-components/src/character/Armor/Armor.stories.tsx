import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Armor from './Armor';

export default {
  title: 'Character/Armor',
  component: Armor,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Armor>;

const Template: ComponentStory<typeof Armor> = (args) => {
  return <Armor {...args} />;
};

export const Example = Template.bind({});
Example.args = {
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
};

export const NoIds = Template.bind({});
NoIds.args = {
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
};
