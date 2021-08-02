import React from 'react'
import { number, text, boolean } from '@storybook/addon-knobs'
import { Progress } from 'gw2-ui-bulk'

import categories from '../categories'
import readme from './Progress.readme.md'
import docs from './Progress.docs.md'

export default {
  category: categories.HELPERS,
  name: 'Progress',
  readme,
  docs,
  story: () => (
    <Progress
      component={text('component', 'span')}
      inline={boolean('inline', true)}
      style={{ fontSize: number('style.fontSize', 24) }}
    />
  ),
}
