import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Skill from './Skill';

export default {
  title: 'Components/Skill',
  component: Skill,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Skill>;

const Template: ComponentStory<typeof Skill> = (
  args: React.ComponentProps<typeof Skill>,
) => {
  return <Skill {...args} />;
};

export const LavaFont = Template.bind({});
LavaFont.args = {
  id: 5548,
};

export function Multiple() {
  return (
    <div>
      <p>
        The meta rotation is <Skill id={5548} /> → <Skill id={5564} /> →{' '}
        <Skill id={1175} />. When <Skill id={1175} /> finishes,{' '}
        <Skill id={5548} /> should be off cooldown, making for a smooth
        rotation.
      </p>
      <p>
        Check your browser console - there should be a single request to the
        API, fetching all three skills in a single request, and fetching the
        duplicate skills only once:
      </p>
      <pre>https://api.guildwars2.com/v2/skills?ids=1175,5548,5564</pre>
      <p>
        And if you browse to another component and back, there should be no
        request at all.
      </p>
    </div>
  );
}
