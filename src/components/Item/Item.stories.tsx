import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { APILanguageProvider } from '../../gw2api/hooks';
import Item from './Item';

export default {
  title: 'Components/Item',
  component: Item,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => {
  return <Item {...args} />;
};

export const Single = Template.bind({});
Single.args = {
  data: {
    name: 'Attuned Ring of Red Death',
    description:
      'This item crackles with the infused energy of the Fractals of the Mists and is attuned to have a bonus agony infusion slot.',
    type: 'Trinket',
    level: 80,
    rarity: 'Ascended',
    vendor_value: 495,
    game_types: ['Activity', 'Wvw', 'Dungeon', 'Pve'],
    flags: [
      'HideSuffix',
      'AccountBound',
      'NotUpgradeable',
      'Unique',
      'AccountBindOnUse',
      'Attuned',
    ],
    restrictions: [],
    id: 75187,
    chat_link: '[&AgGzJQEA]',
    icon: 'https://render.guildwars2.com/file/B155B37AD048CA9054F749043C3E4E99973DF8DF/511826.png',
    details: {
      type: 'Ring',
      infusion_slots: [
        {
          flags: ['Infusion'],
        },
        {
          flags: ['Infusion'],
        },
      ],
      attribute_adjustment: 268.884,
      infix_upgrade: {
        id: 584,
        buff: {
          skill_id: 15742,
          description: '+32 Power\n+18 Ferocity\n+18 Precision',
        },
        attributes: [
          {
            attribute: 'Power',
            modifier: 126,
          },
          {
            attribute: 'Precision',
            modifier: 85,
          },
          {
            attribute: 'CritDamage',
            modifier: 85,
          },
        ],
      },
      secondary_suffix_item_id: '',
    },
    upgrades_from: [
      {
        upgrade: 'Attunement',
        item_id: 37086,
      },
    ],
  },
};
