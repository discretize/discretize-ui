import React from 'react'
import { number, boolean } from '@storybook/addon-knobs'
import { Specialization, withBulkRequest } from 'gw2-ui'

import categories from '../categories'
import readme from './Specialization.readme.md'
import docs from './Specialization.docs.md'

export default {
  category: categories.CORE,
  name: 'Specialization',
  readme,
  docs,
  story: () =>
    withBulkRequest('Specialization')(() => (
      <Specialization
        id={number('id', 59)}
        disableIcon={boolean('disableIcon', false)}
        disableText={boolean('disableText', false)}
        disableLink={boolean('disableLink', false)}
        inline={boolean('inline', true)}
        style={{ fontSize: number('style.fontSize', 24) }}
      />
    )),
  related: [
    { category: categories.HELPERS, name: 'IconWithText' },
    { category: categories.HELPERS, name: 'Icon' },
    { category: categories.HELPERS, name: 'WikiLink' },
    { category: categories.HELPERS, name: 'Spinner' },
    { category: categories.HELPERS, name: 'Progress' },
    { category: categories.HELPERS, name: 'Error' },
  ],
}
