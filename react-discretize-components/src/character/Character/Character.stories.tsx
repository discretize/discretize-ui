import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Character from './Character';

export default {
  title: 'Character/Character',
  component: Character,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Character>;

const Template: ComponentStory<typeof Character> = (args) => {
  return <Character {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  attributes: {
    profession: 'Elementalist',
    specialization: 'Weaver',
    data: {
      Armor: 2514,
      Power: 3926,
      Precision: 2384,
      Toughness: 1243,
      Vitality: 1235,
      Ferocity: 1556,
      'Condition Damage': 750,
      Expertise: 0,
      Concentration: 243,
      'Healing Power': 0,
      'Agony Resistance': 162,
      'Condition Duration': 0.456564,
      'Boon Duration': 0.1628776,
      'Critical Chance': 0.876767,
      'Critical Damage': 2.5373333333333337,
      Health: 13995,
    },
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
};
