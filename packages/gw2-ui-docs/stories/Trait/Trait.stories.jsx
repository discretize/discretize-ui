import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';
import { Trait } from 'gw2-ui';

import categories from '../categories';
import readme from './Trait.readme.md';
import docs from './Trait.docs.md';

export default {
  category: categories.CORE,
  name: 'Trait',
  readme,
  docs,
  story: () => (
    <Trait
      id={number('id', 229)}
      disableIcon={boolean('disableIcon', false)}
      disableText={boolean('disableText', false)}
      disableLink={boolean('disableLink', false)}
      disableTooltip={boolean('disableTooltip', false)}
      inline={boolean('inline', true)}
      inactive={boolean('inactive', false)}
      style={{ fontSize: number('style.fontSize', 24) }}
    />
  ),
};

/* stories.add('performance', () => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>output</th>
      </tr>
    </thead>
    {Array.from({ length: 200 }, (value, index) => index + 1000).map(id => (
      <tr key={id}>
        <td>{id}</td>
        <td>
          <Trait id={id} />
        </td>
      </tr>
    ))}
  </table>
)); */
