import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import Character from './Character';

const meta: Meta<typeof Character> = {
  title: 'Character/Character',
  component: Character,
  // argTypes: {
  //   className: { control: false },
  // },
};
export default meta;

const Template: StoryFn<typeof Character> = (args) => {
  return <Character {...args} />;
};

export const Example: StoryObj<typeof Character> = {
  render: Template,

  args: {
    attributes: {
      profession: 'Elementalist',
      specialization: 'Weaver',
      data: {
        Power: 3860.1800000000003,
        Toughness: 1000,
        Vitality: 1297,
        Precision: 2122,
        Ferocity: 1760.74,
        'Condition Damage': 750,
        Expertise: 0,
        Concentration: 0,
        'Agony Resistance': 0,
        Armor: 2015,
        Health: 14615,
        'Critical Chance': 1.0342857142857143,
        'Critical Damage': 2.673826666666667,
        'Healing Power': 0,
        'Condition Duration': 0,
        'Boon Duration': 0,
      },
    },
    unbuffedAttributes: {
      profession: 'Elementalist',
      specialization: 'Weaver',
      data: {
        Power: 3290,
        Toughness: 1000,
        Vitality: 1297,
        Precision: 2122,
        Ferocity: 1618,
        'Condition Damage': 0,
        Expertise: 0,
        Concentration: 0,
        'Agony Resistance': 0,
        Armor: 2015,
        Health: 14615,
        'Critical Chance': 0.6342857142857142,
        'Critical Damage': 2.578666666666667,
        'Healing Power': 0,
        'Condition Duration': 0,
        'Boon Duration': 0,
      },
      info: 'Simulated unbuffed attributes are not exact and may not match ingame hero panel! For example, soulbeast\'s "with axe" and "with torch/dagger" buffs are both included, simulating a scenario which doesn\'t occur in either weapon set on some builds. Use with caution.',
    },
    armor: {
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
    weapon: {
      weapon1MainId: 76158,
      weapon1MainAffix: 'Berserker',
      weapon1MainInfusion1Id: 49432,
      weapon1MainSigil1Id: 24615,
      weapon1OffId: 76158,
      weapon1OffAffix: 'Berserker',
      weapon1OffInfusionId: 49432,
      weapon1OffSigilId: 24868,
    },
    backAndTrinket: {
      backItemAffix: 'Berserker',
      backItemInfusion1Id: 49432,
      backItemInfusion2Id: 49432,
      amuletAffix: 'Berserker',
      ring1Affix: 'Assassin',
      ring1Infusion1Id: 49432,
      ring1Infusion2Id: 49432,
      ring1Infusion3Id: 49432,
      ring2Affix: 'Assassin',
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
      ring2Id: 80793,
    },
    consumables: {
      foodId: 91805,
      utilityId: 50082,
      relicId: 100432,
    },
    assumedBuffs: {
      value: [
        { id: 'Might', type: 'Boon' },
        { id: 'Fury', type: 'Boon' },
        { gw2id: 1786, type: 'Trait' },
        { gw2id: 12497, type: 'Skill' },
        { gw2id: 14407, type: 'Skill' },
        { gw2id: 14405, type: 'Skill' },
        { gw2id: 14404, type: 'Skill' },
        { id: 'reinforced-armor', type: 'CommonEffect' },
        { id: 'jade-bot', gw2id: 96613, type: 'Item' },
      ],
    },
    skills: {
      healId: 5802,
      utility1Id: 5838,
      utility2Id: 5933,
      utility3Id: 63262,
      eliteId: 30800,
    },
    imageElement: (
      <img
        style={{ margin: 'auto', maxHeight: 620, maxWidth: 620 }}
        src="https://wiki.guildwars2.com/images/thumb/4/40/Asura_02_concept_art_(transparent).png/150px-Asura_02_concept_art_(transparent).png"
        alt="Profession"
      />
    ),
  },
};
