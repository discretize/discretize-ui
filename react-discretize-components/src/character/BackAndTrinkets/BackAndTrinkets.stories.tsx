import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';
import BackAndTrinkets from './BackAndTrinkets';

const meta: Meta<typeof BackAndTrinkets> = {
  title: 'Character/BackAndTrinkets',
  component: BackAndTrinkets,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof BackAndTrinkets> = (args) => {
  return <BackAndTrinkets {...args} />;
};

export const Example: StoryObj = {
  render: Template,

  args: {
    backItemAffix: 'Berserker',
    backItemInfusion1Id: 49432,
    backItemInfusion2Id: 49432,
    amuletAffix: 'Berserker',
    ring1Affix: 'Assassin',
    ring1Infusion1Id: 49432,
    ring1Infusion2Id: 49432,
    ring1Infusion3Id: 49432,
    ring2Affix: 'Berserker',
    ring2Infusion1Id: 49432,
    ring2Infusion2Id: 49432,
    ring2Infusion3Id: 49432,
    accessory1Affix: 'Berserker',
    accessory1InfusionId: 49432,
    accessory2Affix: 'Berserker',
    accessory2InfusionId: 49432,
    backItemId: 37039,
    accessory1Id: 39232,
    accessory2Id: 39233,
    amuletId: 39272,
    ring1Id: 80793,
    ring2Id: 75669,
  },
};

export const NoIds: StoryObj<typeof BackAndTrinkets> = {
  render: Template,

  args: {
    backItemAffix: 'Berserker',
    backItemInfusion1Id: 49432,
    backItemInfusion2Id: 49432,
    amuletAffix: 'Berserker',
    ring1Affix: 'Assassin',
    ring1Infusion1Id: 49432,
    ring1Infusion2Id: 49432,
    ring1Infusion3Id: 49432,
    ring2Affix: 'Berserker',
    ring2Infusion1Id: 49432,
    ring2Infusion2Id: 49432,
    ring2Infusion3Id: 49432,
    accessory1Affix: 'Berserker',
    accessory1InfusionId: 49432,
    accessory2Affix: 'Berserker',
    accessory2InfusionId: 49432,
  },
};
