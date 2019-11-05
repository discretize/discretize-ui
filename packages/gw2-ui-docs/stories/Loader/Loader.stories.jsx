import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { Loader } from 'gw2-ui';

import categories from '../categories';
import readme from './Loader.readme.md';
import docs from './Loader.docs.md';

export default {
  category: categories.HELPERS,
  name: 'Loader',
  readme,
  docs,
  story: () => (
    <Loader
      component={text('component', 'span')}
      style={{ fontSize: number('fontSize', 24) }}
    />
  ),
};
