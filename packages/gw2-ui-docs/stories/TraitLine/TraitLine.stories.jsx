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
    />
  ),
};
