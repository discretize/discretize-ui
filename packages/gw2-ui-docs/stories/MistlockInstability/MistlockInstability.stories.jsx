import React from 'react'
import { select, boolean, number } from '@storybook/addon-knobs'
import { MistlockInstability, mistlockInstabilities } from 'gw2-ui'

import categories from '../categories'
import readme from './MistlockInstability.readme.md'
import docs from './MistlockInstability.docs.md'

export default {
  category: categories.CORE,
  name: 'MistlockInstability',
  readme,
  docs,
  story: () => (
    <MistlockInstability
      name={select(
        'name',
        Object.keys(mistlockInstabilities),
        Object.keys(mistlockInstabilities)[0],
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
    { category: categories.HELPERS, name: 'Effect' },
    { category: categories.HELPERS, name: 'IconWithText' },
    { category: categories.HELPERS, name: 'Icon' },
    { category: categories.HELPERS, name: 'WikiLink' },
    { category: categories.HELPERS, name: 'Tooltip' },
    { category: categories.HELPERS, name: 'Error' },
  ],
}
