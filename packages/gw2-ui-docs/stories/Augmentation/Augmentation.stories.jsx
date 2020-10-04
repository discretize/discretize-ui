import React from 'react'
import { select, boolean, number } from '@storybook/addon-knobs'
import { Augmentation, augmentations } from 'gw2-ui'

import categories from '../categories'
import readme from './Augmentation.readme.md'
import docs from './Augmentation.docs.md'

export default {
  category: categories.CORE,
  name: 'Augmentation',
  readme,
  docs,
  story: () => (
    <Augmentation
      name={select(
        'name',
        Object.keys(augmentations),
        Object.keys(augmentations)[0],
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
