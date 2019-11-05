import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { Error } from 'gw2-ui';

import categories from '../categories';
import readme from './Error.readme.md';
import docs from './Error.docs.md';

export default {
  category: categories.HELPERS,
  name: 'Error',
  readme,
  docs,
  story: () => (
    <Error
      code={text('code', '500')}
      name={text('name', 'Error name')}
      message={text('message', 'Error message')}
      style={{ fontSize: number('fontSize', 24) }}
    />
  ),
  related: [
    {
      category: categories.HELPERS,
      name: 'IconWithText',
    },
    {
      category: categories.HELPERS,
      name: 'Icon',
    },
    {
      category: categories.HELPERS,
      name: 'Tooltip',
    },
  ],
};
