import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { APILanguageProvider } from '../../i18n/';
import Skill from './Skill';

export default {
  title: 'Components/Skill',
  component: Skill,
  argTypes: {
    className: { control: false },
  },
} as Meta<typeof Skill>;

const Template: StoryFn<typeof Skill> = (args) => {
  return <Skill {...args} />;
};

export const LavaFont = {
  render: Template,

  args: {
    id: 5548,
  },
};

export function Multiple() {
  return (
    <div>
      <p>
        The meta rotation is <Skill id={5548} /> → <Skill id={5564} /> →{' '}
        <Skill id={1175} />. When <Skill id={1175} /> finishes,{' '}
        <Skill id={5548} /> should be off cooldown, making for a smooth
        rotation.
        <br />
        Do not cast <Skill id={42} />, because that skill does not exist.
      </p>
      <p>
        Check your browser console - there should be a single request to the
        API, fetching all skills in a single request, and fetching the duplicate
        skills only once:
      </p>
      <pre>https://api.guildwars2.com/v2/skills?ids=[list of ids]</pre>
      <p>
        And if you browse to another component and back, there should be no
        request at all.
      </p>
    </div>
  );
}

export function FixedSkills() {
  return (
    <div>
      These skills have inconsistencies in the API, which should be fixed
      automatically.
      <br />
      <br />
      Should have Life Force cost in percent:
      <br />
      <Skill id={40813} />
      <Skill id={43448} />
      <Skill id={44428} />
      <Skill id={44663} />
      <Skill id={54870} />
      <br />
      Should show maximum heat in percent:
      <br />
      <Skill id={42938} />
      <br />
    </div>
  );
}

export function Languages() {
  return (
    <div>
      <p>
        Default language:
        <Skill id={5548} />
      </p>

      <APILanguageProvider value="de">
        <p>
          de:
          <Skill id={5548} />
        </p>
      </APILanguageProvider>

      <APILanguageProvider value="en">
        <p>
          en:
          <Skill id={5548} />
        </p>
      </APILanguageProvider>

      <APILanguageProvider value="es">
        <p>
          es:
          <Skill id={5548} />
        </p>
      </APILanguageProvider>

      <APILanguageProvider value="fr">
        <p>
          fr:
          <Skill id={5548} />
        </p>
      </APILanguageProvider>

      <APILanguageProvider value="zh">
        <p>
          zh:
          <Skill id={5548} />
        </p>
      </APILanguageProvider>
    </div>
  );
}
