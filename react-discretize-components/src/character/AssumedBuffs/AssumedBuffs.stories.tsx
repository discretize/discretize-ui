import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import AssumedBuffs from './AssumedBuffs';

const meta: Meta<typeof AssumedBuffs> = {
  title: 'Character/AssumedBuffs',
  component: AssumedBuffs,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof AssumedBuffs> = (args) => {
  return <AssumedBuffs {...args} />;
};

export const Example: StoryObj<typeof AssumedBuffs> = {
  render: Template,

  args: {
    value: [
      { id: 'Might', type: 'Boon' },
      { id: 'Fury', type: 'Boon' },
      { gw2id: 1786, type: 'Trait' },
      { gw2id: 12497, type: 'Skill' },
      { gw2id: 14407, type: 'Skill' },
      { gw2id: 14405, type: 'Skill' },
      { gw2id: 14404, type: 'Skill' },
      {
        gw2id: 79722,
        type: 'Item',
      },
      { gw2id: 96613, type: 'Item' },
      { id: 'Mist Attunement 3', type: 'Augmentation' },
    ],
  },
};
