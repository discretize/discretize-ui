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

export function Documentation() {
  return (
    <>
      <h1>Documentation</h1>
      <p>
        Traitline has two modes of operation: controlled and uncontrolled. Both
        of them make use of props in a different way.
      </p>
      <h3>Controlled mode</h3>
      <p>
        This mode should be used if the application is supposed to implement on
        click actions and handle the state of the selection. Check the console,
        you should see a message whenever you click a trait! Allowed props:
        <ol>
          <li>id - provide the id</li>
          <li>selected - provide your state variable here</li>
          <li>
            onSelect - function that is called on click of a trait. It provides
            the tier, index and id of the clicked skill as parameters.
          </li>
        </ol>
      </p>
      <TraitLine
        id={41}
        selected={[227, 214, 1672]}
        onSelect={({ id, tier }) =>
          console.log(`Clicked skill ${id} in tier ${tier}`)
        }
      />
      <code>
        {
          '<TraitLine \
      id={41} \
      selected={[227, 214, 1672]} \
      onSelect={({ id, tier }) => \
        console.log(`Clicked skill ${id} in tier ${tier}`) \
      }\
    />'
        }
      </code>
      <h3>Uncontrolled mode</h3>
      <p>
        This mode takes care of the state! You can set following props:
        <ol>
          <li>id - provide the id</li>
          <li>defaultSelected - provide your initial selection here</li>
          <li>selectable - makes the traits selectable</li>
          <li>
            resettable - enables the reset button on the top left that restores
            the initial state
          </li>
        </ol>
      </p>
      <TraitLine
        id={41}
        defaultSelected={[227, 214, 1672]}
        selectable
        resettable
      />
      <code>
        {
          '<TraitLine \
          id={41} \
          defaultSelected={[227, 214, 1672]} \
          selectable \
          resettable \
        />'
        }
      </code>
    </>
  );
}
