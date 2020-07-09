import React from 'react';
import { select, boolean, number } from '@storybook/addon-knobs';
import { Condition, conditions } from 'gw2-ui';

import categories from '../categories';
import readme from './Condition.readme.md';
import docs from './Condition.docs.md';

export default {
  category: categories.CORE,
  name: 'Condition',
  readme,
  docs,
  story: () => (
    <Condition
      name={select('name', Object.keys(conditions), Object.keys(conditions)[0])}
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
