import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TraitLine from './TraitLine';
import Specialization from '../Specialization/Specialization';

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
      <pre>
        {`<TraitLine
  id={41}
  selected={[227, 214, 1672]}
  onSelect={({ id, tier }) =>
    console.log(\`Clicked skill \${id} in tier \${tier}\`)
  }
/>`}
      </pre>
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
      <pre>
        {`<TraitLine
  id={41}
  defaultSelected={[227, 214, 1672]}
  selectable
  resettable
/>`}
      </pre>
    </>
  );
}

const idsArray = Array(72)
  .fill(null)
  .map((element, index) => index + 1);

export function Helper() {
  const [id, setId] = React.useState(0);
  const [selected, setSelected] = React.useState([0, 0, 0]);

  return (
    <>
      <h1>Helper</h1>
      <p>
        Use this page to quickly find the ids for the traits in a traitline.
      </p>
      <p>
        <code>
          {`<TraitLine id={${id}} selected={${JSON.stringify(selected)}} />`}
        </code>
      </p>

      <p>
        <TraitLine
          id={id}
          selectable
          selected={selected}
          onSelect={(e) => {
            const { tier, id: newTrait } = e;
            setSelected((state) => {
              const newState = [...state];
              newState[tier] = newTrait;
              return newState;
            });
          }}
        />
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {idsArray.map((value) => (
          <button
            key={value}
            onClick={() => setId(value)}
            style={{ padding: '0 0.6em', margin: '0.2em' }}
          >
            {value}:{' '}
            <Specialization
              style={{ fontSize: '1.2em' }}
              id={value}
              disableLink
            />
          </button>
        ))}
      </div>
    </>
  );
}
