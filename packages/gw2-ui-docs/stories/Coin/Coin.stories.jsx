import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { Coin } from 'gw2-ui';

import categories from '../categories';
import readme from './Coin.readme.md';
import docs from './Coin.docs.md';

export default {
  category: categories.HELPERS,
  name: 'Coin',
  readme,
  docs,
  story: () => (
    <Coin
      value={number('value', 123456789)}
      component={text('component', 'span')}
      style={{ fontSize: number('fontSize', 24) }}
    />
  ),
};
