import React from 'react'
import { select, boolean, number } from '@storybook/addon-knobs'
import { Race, races } from 'gw2-ui-bulk'

import categories from '../categories'
import readme from './Race.readme.md'
import docs from './Race.docs.md'

export default {
  category: categories.CORE,
  name: 'Race',
  readme,
  docs,
  story: () => (
    <Race
      name={select('name', races, races[0])}
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
    { category: categories.HELPERS, name: 'Error' },
  ],
}
