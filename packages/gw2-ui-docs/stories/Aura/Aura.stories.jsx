import React from 'react';
import { select, boolean, number } from '@storybook/addon-knobs';
import { Aura, auras } from 'gw2-ui';

import categories from '../categories';
import readme from './Aura.readme.md';
import docs from './Aura.docs.md';

export default {
  category: categories.CORE,
  name: 'Aura',
  readme,
  docs,
  story: () => (
    <Aura
      name={select('name', Object.keys(auras), Object.keys(auras)[0])}
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
