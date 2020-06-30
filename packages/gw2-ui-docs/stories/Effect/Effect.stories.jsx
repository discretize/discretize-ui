import React from 'react';
import { text, boolean, number } from '@storybook/addon-knobs';
import { Effect } from 'gw2-ui';

import categories from '../categories';
import readme from './Effect.readme.md';
import docs from './Effect.docs.md';

export default {
  category: categories.HELPERS,
  name: 'Effect',
  readme,
  docs,
  story: () => (
    <Effect
      type={text('type', 'Boon')}
      name={text('name', 'Might')}
      description={text(
        'description',
        'Increases outgoing damage; stacks intensity.',
      )}
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
