import React from 'react';
import { number, text, select } from '@storybook/addon-knobs';
import { WikiLink } from 'gw2-ui';

import categories from '../categories';
import readme from './WikiLink.readme.md';
import docs from './WikiLink.docs.md';

export default {
  category: categories.HELPERS,
  name: 'WikiLink',
  readme,
  docs,
  story: () => (
    <WikiLink
      to={text('to', 'Fireball')}
      lang={select('lang', ['en'])}
      color={select('color', [null, 'inherit'])}
      component={text('component', 'a')}
      style={{ fontSize: number('fontSize', 24) }}
    />
  ),
};
