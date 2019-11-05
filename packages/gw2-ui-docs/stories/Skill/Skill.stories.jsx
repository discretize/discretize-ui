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
      style={{ fontSize: number('fontSize', 24) }}
    />
  ),
};
