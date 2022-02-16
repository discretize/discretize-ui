import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TraitLine from './TraitLine';

export default {
  title: 'Components/TraitLine',
  component: TraitLine,
  argTypes: {
    className: { control: false },
    onSelect: { control: false },
    onReset: { control: false },
  },
} as ComponentMeta<typeof TraitLine>;

const Template: ComponentStory<typeof TraitLine> = (args) => {
  return <TraitLine {...args} onSelect={undefined} onReset={undefined} />;
};

export const Simple = Template.bind({});
Simple.args = {
  id: 41,
  defaultSelected: [227, 214, 1672],
  selectable: true,
  resettable: true,
};
