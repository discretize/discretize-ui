import React from 'react';
import { select, boolean, number } from '@storybook/addon-knobs';
import { Effect, effects } from 'gw2-ui';

import categories from '../categories';
import readme from './Effect.readme.md';
import docs from './Effect.docs.md';

export default {
  category: categories.CORE,
  name: 'Effect',
  readme,
  docs,
  story: () => (
    <Effect
      name={select(
        'name',
        Object.values(effects).flatMap(nameDescriptionPairs =>
          Object.keys(nameDescriptionPairs),
        ),
        'Might',
      )}
      type={select('type', [null, ...Object.keys(effects)], null)}
      disableIcon={boolean('disableIcon', false)}
      disableText={boolean('disableText', false)}
      disableLink={boolean('disableLink', false)}
      disableTooltip={boolean('disableTooltip', false)}
      inline={boolean('inline', true)}
      style={{ fontSize: number('style.fontSize', 24) }}
    />
  ),
  related: [
    { category: categories.HELPERS, name: 'IconWithText' },
    { category: categories.HELPERS, name: 'Icon' },
    { category: categories.HELPERS, name: 'WikiLink' },
    { category: categories.HELPERS, name: 'Tooltip' },
    { category: categories.HELPERS, name: 'Error' },
  ],
};
