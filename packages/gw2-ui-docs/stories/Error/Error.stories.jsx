import React from 'react'
import { number, text, boolean } from '@storybook/addon-knobs'
import { Error } from 'gw2-ui'

import categories from '../categories'
import readme from './Error.readme.md'
import docs from './Error.docs.md'

export default {
  category: categories.HELPERS,
  name: 'Error',
  readme,
  docs,
  story: () => (
    <Error
      code={text('code', '500')}
      name={text('name', 'Error name')}
      message={text('message', 'Error message')}
      component={text('component', 'span')}
      disableIcon={boolean('disableIcon', false)}
      disableText={boolean('disableText', false)}
      disableTooltip={boolean('disableTooltip', false)}
      inline={boolean('inline', true)}
      style={{ fontSize: number('style.fontSize', 24) }}
    />
  ),
  related: [
    {
      category: categories.HELPERS,
      name: 'IconWithText',
    },
    {
      category: categories.HELPERS,
      name: 'Icon',
    },
    {
      category: categories.HELPERS,
      name: 'Tooltip',
    },
  ],
}
