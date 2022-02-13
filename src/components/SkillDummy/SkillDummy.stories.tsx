import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SkillDummy from './SkillDummy';

export default {
  title: 'Helper Components/Skill (dummy)',
  component: SkillDummy,
} as ComponentMeta<typeof SkillDummy>;

const Template = (args: React.ComponentProps<typeof SkillDummy>) => {
  return (
    <>
      <SkillDummy {...args} />
    </>
  );
};

export const LavaFont: ComponentStory<typeof SkillDummy> = Template.bind({});
LavaFont.args = {
  id: 5548,
};

export function Multiple() {
  return (
    <div>
      <p>
        The meta rotation is <SkillDummy id={5548} /> → <SkillDummy id={5564} />{' '}
        → <SkillDummy id={1175} />. When <SkillDummy id={1175} /> finishes,{' '}
        <SkillDummy id={5548} /> should be off cooldown, making for a smooth
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
