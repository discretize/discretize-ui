import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { Spinner } from 'gw2-ui';

import categories from '../categories';
import readme from './Spinner.readme.md';
import docs from './Spinner.docs.md';

export default {
  category: categories.HELPERS,
  name: 'Spinner',
  readme,
  docs,
  story: () => (
    <Spinner
      component={text('component', 'span')}
      style={{ fontSize: number('style.fontSize', 24) }}
    />
  ),
};
