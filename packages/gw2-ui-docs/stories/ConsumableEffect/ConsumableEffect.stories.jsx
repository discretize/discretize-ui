import React from 'react'
import { select, boolean, number } from '@storybook/addon-knobs'
import { ConsumableEffect, consumableEffects } from 'gw2-ui'

import categories from '../categories'
import readme from './ConsumableEffect.readme.md'
import docs from './ConsumableEffect.docs.md'

export default {
  category: categories.CORE,
  name: 'ConsumableEffect',
  readme,
  docs,
  story: () => (
    <ConsumableEffect
      name={select(
        'name',
        Object.keys(consumableEffects),
        Object.keys(consumableEffects)[0],
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
