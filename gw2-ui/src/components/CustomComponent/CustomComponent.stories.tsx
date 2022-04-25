import type { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomComponent from './CustomComponent';

export default {
  title: 'Components/CustomComponent',
  component: CustomComponent,
  argTypes: {
    className: { control: false },
    text: {
      control: { type: 'string' },
    },
  },
} as ComponentMeta<typeof CustomComponent>;

const Template: ComponentStory<typeof CustomComponent> = (args) => {
  return <CustomComponent {...args} />;
};

export const Single = Template.bind({});
Single.args = {
  type: 'Skill',
  data: {
    name: 'Chapter 3: Azure Sun',
    professions: ['Guardian'],
    description:
      'Inspired by countless poems describing the comforting powers of the water-reflected sun, grant boons to allies.',
    icon: 'https://wiki.guildwars2.com/images/b/bf/Chapter_3-_Azure_Sun.png',
    categories: ['Tome'],
    facts: [
      {
        text: 'Recharge',
        type: 'Recharge',
        icon: 'https://render.guildwars2.com/file/D767B963D120F077C3B163A05DC05A7317D7DB70/156651.png',
        value: 8,
      },
      {
        text: 'Apply Buff/Condition',
        type: 'Buff',
        icon: 'https://render.guildwars2.com/file/58E92EBAF0DB4DA7C4AC04D9B22BCA5ECF0100DE/102843.png',
        duration: 5,
        status: 'Vigor',
        description:
          'Endurance regeneration increased by 50%; stacks duration.',
        apply_count: 1,
      },
      {
        text: 'Apply Buff/Condition',
        type: 'Buff',
        icon: 'https://render.guildwars2.com/file/F69996772B9E18FD18AD0AABAB25D7E3FC42F261/102835.png',
        duration: 6,
        status: 'Regeneration',
        description: 'Gain health every second; stacks duration.',
        apply_count: 1,
      },
      {
        text: 'Apply Buff/Condition',
        type: 'Buff',
        icon: 'https://render.guildwars2.com/file/20CFC14967E67F7A3FD4A4B8722B4CF5B8565E11/102836.png',
        duration: 5,
        status: 'Swiftness',
        description: 'Movement speed increased by 33%; stacks duration.',
        apply_count: 1,
      },
      {
        text: 'Number of Targets',
        type: 'Number',
        icon: 'https://render.guildwars2.com/file/BBE8191A494B0352259C10EADFDACCE177E6DA5B/1770208.png',
        value: 5,
      },
      {
        text: 'Radius',
        type: 'Distance',
        icon: 'https://render.guildwars2.com/file/B0CD8077991E4FB1622D2930337ED7F9B54211D5/156665.png',
        distance: 240,
      },
      {
        text: 'Range',
        type: 'Range',
        icon: 'https://render.guildwars2.com/file/0AAB34BEB1C9F4A25EC612DDBEACF3E20B2810FA/156666.png',
        value: 900,
      },
    ],
  },
};
