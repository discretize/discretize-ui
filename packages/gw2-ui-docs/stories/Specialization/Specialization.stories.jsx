import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';
import { Specialization } from 'gw2-ui';

import categories from '../categories';
import readme from './Specialization.readme.md';
import docs from './Specialization.docs.md';

export default {
  category: categories.CORE,
  name: 'Specialization',
  readme,
  docs,
  story: () => (
    <Specialization
      id={number('id', 59)}
      disableIcon={boolean('disableIcon', false)}
      disableText={boolean('disableText', false)}
      disableLink={boolean('disableLink', false)}
      inline={boolean('inline', true)}
      style={{ fontSize: number('style.fontSize', 24) }}
    />
  ),
};
