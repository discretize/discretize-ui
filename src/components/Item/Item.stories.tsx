import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
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
  id: 75187,
  upgrades: [86303, 86303],
};

export function Multiple() {
  return (
    <>
      Empty: <Item id={75187} />
      <br />
      With Infusions: <Item id={75187} upgrades={[86303, 86303]} />
      <br />
      With Runes: <Item id={48073} upgrades={[[24706, 2]]} />
      <br />
      Invalid id: <Item id={42} />
      <br />
      Invalid upgrade: <Item id={48073} upgrades={[42]} />
    </>
  );
}
