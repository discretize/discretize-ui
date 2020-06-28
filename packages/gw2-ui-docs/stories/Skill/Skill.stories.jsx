import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';
import { Skill } from 'gw2-ui';

import categories from '../categories';
import readme from './Skill.readme.md';
import docs from './Skill.docs.md';

export default {
  category: categories.CORE,
  name: 'Skill',
  readme,
  docs,
  story: () => (
    <Skill
      id={number('id', 14375)}
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
    { category: categories.HELPERS, name: 'Spinner' },
    { category: categories.HELPERS, name: 'Progress' },
    { category: categories.HELPERS, name: 'Error' },
  ],
};
