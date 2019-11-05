import React from 'react';
import { text, number, boolean } from '@storybook/addon-knobs';
import { Item } from 'gw2-ui';
import {
  itemTypeNames as ITEM_TYPE_NAMES,
  itemStatNames as ITEM_STAT_NAMES,
  itemArmorWeights as ITEM_ARMOR_WEIGHTS,
} from 'gw2-ui-builder';

import categories from '../categories';
import readme from './Item.readme.md';
import docs from './Item.docs.md';

export default {
  category: categories.CORE,
  name: 'Item',
  readme,
  docs: `${docs}

### Supported types

${Object.values(ITEM_TYPE_NAMES)
    .map(typeName => `- \`${typeName}\`\n`)
    .join('')}

### Supported stats

${Object.values(ITEM_STAT_NAMES)
    .map(statName => `- \`${statName}\`\n`)
    .join('')}

### Supported armor weights

${Object.values(ITEM_ARMOR_WEIGHTS)
    .map(weight => `- \`${weight}\`\n`)
    .join('')}`,
  story: () => (
    <Item
      id={number('id', 46774)}
      type={text('type', '')}
      stat={text('stat', '')}
      weight={text('weight', '')}
      disableIcon={boolean('disableIcon', false)}
      disableText={boolean('disableText', false)}
      disableLink={boolean('disableLink', false)}
      disableTooltip={boolean('disableTooltip', false)}
      inline={boolean('inline', true)}
      style={{ fontSize: number('fontSize', 24) }}
    />
  ),
  related: [
    { category: categories.HELPERS, name: 'Loader' },
    { category: categories.HELPERS, name: 'IconWithText' },
    { category: categories.HELPERS, name: 'Icon' },
    { category: categories.HELPERS, name: 'WikiLink' },
    { category: categories.HELPERS, name: 'Tooltip' },
    { category: categories.HELPERS, name: 'Coin' },
    { category: categories.HELPERS, name: 'Error' },
  ],
};
