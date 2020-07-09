import React from 'react';
import { select, boolean, number } from '@storybook/addon-knobs';
import { Boon, boons } from 'gw2-ui';

import categories from '../categories';
import readme from './Boon.readme.md';
import docs from './Boon.docs.md';

export default {
  category: categories.CORE,
  name: 'Boon',
  readme,
  docs,
  story: () => (
    <Boon
      name={select('name', Object.keys(boons), Object.keys(boons)[0])}
      count={number('count', null)}
      disableIcon={boolean('disableIcon', false)}
      disableText={boolean('disableText', false)}
      disableLink={boolean('disableLink', false)}
      disableTooltip={boolean('disableTooltip', false)}
      inline={boolean('inline', true)}
      style={{ fontSize: number('style.fontSize', 24) }}
    />
  ),
  related: [
    { category: categories.HELPERS, name: 'Effect' },
    { category: categories.HELPERS, name: 'IconWithText' },
    { category: categories.HELPERS, name: 'Icon' },
    { category: categories.HELPERS, name: 'WikiLink' },
    { category: categories.HELPERS, name: 'Tooltip' },
    { category: categories.HELPERS, name: 'Error' },
  ],
};
