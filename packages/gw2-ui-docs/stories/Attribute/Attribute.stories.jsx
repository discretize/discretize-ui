import React from 'react'
import { select, boolean, number } from '@storybook/addon-knobs'
import { Attribute, attributes } from 'gw2-ui-bulk'

import categories from '../categories'
import readme from './Attribute.readme.md'
import docs from './Attribute.docs.md'

export default {
  category: categories.CORE,
  name: 'Attribute',
  readme,
  docs,
  story: () => {
    const selectableAttributes = Object.entries(
      attributes,
    ).flatMap(([, values]) => Object.keys(values))
    return (
      <Attribute
        name={select('name', selectableAttributes, selectableAttributes[0])}
        disableIcon={boolean('disableIcon', false)}
        disableText={boolean('disableText', false)}
        disableLink={boolean('disableLink', false)}
        disableTooltip={boolean('disableTooltip', false)}
        inline={boolean('inline', true)}
        style={{ fontSize: number('style.fontSize', 24) }}
      />
    )
  },
  related: [
    { category: categories.HELPERS, name: 'IconWithText' },
    { category: categories.HELPERS, name: 'Icon' },
    { category: categories.HELPERS, name: 'WikiLink' },
    { category: categories.HELPERS, name: 'Tooltip' },
    { category: categories.HELPERS, name: 'Error' },
  ],
}
