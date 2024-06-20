import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Attributes from './Attributes';

export default {
  title: 'Character/Attributes',
  component: Attributes,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Attributes>;

const Template: StoryFn<typeof Attributes> = (args) => {
  return <Attributes {...args} />;
};

export const Example = {
  render: Template,

  args: {
    profession: 'Elementalist',
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
      'Condition Duration': 0,
      'Boon Duration': 0.162,
      'Critical Chance': 1.259047619047619,
      'Critical Damage': 2.5373333333333337,
      Health: 13995,
    },
  },
};
