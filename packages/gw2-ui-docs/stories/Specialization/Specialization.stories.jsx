import { boolean, number } from '@storybook/addon-knobs'
import { Specialization } from 'gw2-ui-bulk'
import React from 'react'
import categories from '../categories'
import docs from './Specialization.docs.md'
import readme from './Specialization.readme.md'

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
  related: [
    { category: categories.HELPERS, name: 'IconWithText' },
    { category: categories.HELPERS, name: 'Icon' },
    { category: categories.HELPERS, name: 'WikiLink' },
    { category: categories.HELPERS, name: 'Spinner' },
    { category: categories.HELPERS, name: 'Progress' },
    { category: categories.HELPERS, name: 'Error' },
  ],
}
