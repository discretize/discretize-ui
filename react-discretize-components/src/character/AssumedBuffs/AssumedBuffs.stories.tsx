import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import AssumedBuffs from './AssumedBuffs';

export default {
  title: 'Character/AssumedBuffs',
  component: AssumedBuffs,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof AssumedBuffs>;

const Template: StoryFn<typeof AssumedBuffs> = (args) => {
  return <AssumedBuffs {...args} />;
};

export const Example = {
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
    ],
  },
};
