import { boolean, number } from '@storybook/addon-knobs'
import { Trait } from 'gw2-ui-bulk'
import React from 'react'
import categories from '../categories'
import docs from './Trait.docs.md'
import readme from './Trait.readme.md'

export default {
  category: categories.CORE,
  name: 'Trait',
  readme,
  docs,
  story: () => (
    <Trait
      id={number('id', 229)}
      disableIcon={boolean('disableIcon', false)}
      disableText={boolean('disableText', false)}
      disableLink={boolean('disableLink', false)}
      disableTooltip={boolean('disableTooltip', false)}
      inline={boolean('inline', true)}
      inactive={boolean('inactive', false)}
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
}
