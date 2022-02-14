import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Trait from './Trait';

export default {
  title: 'Components/Trait',
  component: Trait,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Trait>;

const Template: ComponentStory<typeof Trait> = (args) => {
  return <Trait {...args} />;
};

export const FreshAir = Template.bind({});
FreshAir.args = {
  data: {
    id: 1503,
    tier: 3,
    order: 1,
    name: 'Fresh Air',
    description:
      'Recharge air attunement on a critical hit. Gain a ferocity boost when attuning to air.',
    slot: 'Major',
    facts: [
      {
        text: 'Recharge Reduced',
        type: 'Percent',
        icon: 'https://render.guildwars2.com/file/AAB7C5387A08367C2F023F19FEE70E1556AD4375/1770202.png',
        percent: 100,
      },
      {
        text: 'Apply Buff/Condition',
        type: 'Buff',
        icon: 'https://render.guildwars2.com/file/FA64C9F2750F986E52E8376F22EDBA3844A8C603/1012277.png',
        duration: 5,
        status: 'Fresh Air',
        description: 'Critical damage is increased.',
        apply_count: 1,
      },
    ],
    specialization: 41,
    icon: 'https://render.guildwars2.com/file/FA64C9F2750F986E52E8376F22EDBA3844A8C603/1012277.png',
  },
};

export const RecklessDodge = Template.bind({});
RecklessDodge.args = {
  data: {
    id: 1446,
    tier: 1,
    order: 0,
    name: 'Reckless Dodge',
    description: 'Damage foes at the end of a dodge roll.',
    slot: 'Minor',
    facts: [
      {
        text: 'Combat Only',
        type: 'NoData',
        icon: 'https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png',
      },
    ],
    skills: [
      {
        name: 'Reckless Impact',
        facts: [
          {
            text: 'Unblockable',
            type: 'Unblockable',
            icon: 'https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png',
            value: true,
          },
          {
            text: 'Damage',
            type: 'Damage',
            icon: 'https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png',
            hit_count: 1,
            dmg_multiplier: 1.5,
          },
          {
            text: 'Radius',
            type: 'Distance',
            icon: 'https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png',
            distance: 180,
          },
          {
            text: 'Number of Targets',
            type: 'Number',
            icon: 'https://render.guildwars2.com/file/BBE8191A494B0352259C10EADFDACCE177E6DA5B/1770208.png',
            value: 5,
          },
          {
            text: 'Apply Buff/Condition',
            type: 'Buff',
            icon: 'https://render.guildwars2.com/file/2FA9DF9D6BC17839BBEA14723F1C53D645DDB5E1/102852.png',
            duration: 5,
            status: 'Might',
            description: 'Increased outgoing damage; stacks intensity.',
            apply_count: 1,
          },
        ],
        description:
          'Damage foes at the end of your dodge roll. Gain might for each foe struck by this attack.',
        icon: 'https://render.guildwars2.com/file/D7040004B112A4075A1038917CEF5FFA0BC100A2/102788.png',
        flags: [],
        id: 14268,
        chat_link: '[&Brw3AAA=]',
      },
    ],
    specialization: 4,
    icon: 'https://render.guildwars2.com/file/4D0864C3335DC7A7046713714ED0FD0D57F4021E/1012819.png',
  },
};
