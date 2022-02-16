import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TraitLine from './TraitLine';

export default {
  title: 'Components/TraitLine',
  component: TraitLine,
  argTypes: {
    className: { control: false },
    onSelect: { control: false },
  },
} as ComponentMeta<typeof TraitLine>;

const Template: ComponentStory<typeof TraitLine> = (args) => {
  return <TraitLine {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  onSelect: undefined,
  data: {
    id: 41,
    name: 'Air',
    profession: 'Elementalist',
    elite: false,
    minor_traits: [221, 222, 223],
    major_traits: [227, 224, 232, 229, 214, 1502, 226, 1503, 1672],
    icon: 'https://render.guildwars2.com/file/D3DB62FF6055021A717F3C6A0C19502F2C4EC1FF/1011983.png',
    background:
      'https://render.guildwars2.com/file/97BE972EC832ABC4F8645FF4A063EFF89B2942B8/1012034.png',
  },
  defaultSelected: [227, 214, 1672],
  selectable: true,
  resettable: true,
};
