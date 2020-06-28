import React from 'react';
import { number, array } from '@storybook/addon-knobs';
import { TraitLine } from 'gw2-ui';

import categories from '../categories';
import readme from './TraitLine.readme.md';
import docs from './TraitLine.docs.md';

export default {
  category: categories.CORE,
  name: 'TraitLine',
  readme,
  docs,
  story: () => (
    <TraitLine
      id={number('id', 41)}
      selected={array('selected', [227, 214, 1672])}
      onSelect={({ tier, id }) =>
        // eslint-disable-next-line no-alert
        alert(`Clicked major trait tier: ${tier}, id: ${id}`)
      }
    />
  ),
  related: [
    { category: categories.CORE, name: 'Trait' },
    { category: categories.HELPERS, name: 'IconWithText' },
    { category: categories.HELPERS, name: 'Icon' },
    { category: categories.HELPERS, name: 'WikiLink' },
    { category: categories.HELPERS, name: 'Tooltip' },
    { category: categories.HELPERS, name: 'Spinner' },
    { category: categories.HELPERS, name: 'Progress' },
    { category: categories.HELPERS, name: 'Error' },
  ],
};
