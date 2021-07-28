import React from 'react'
import { number, array, boolean } from '@storybook/addon-knobs'
import { TraitLine, withGW2UI } from 'gw2-ui'

import categories from '../categories'
import readme from './TraitLine.readme.md'
import docs from './TraitLine.docs.md'

export default {
  category: categories.CORE,
  name: 'TraitLine',
  readme,
  docs,
  story: () =>
    withGW2UI('TraitLine')(() => (
      <TraitLine
        id={number('id', 41)}
        defaultSelected={array('defaultSelected', [
          227,
          214,
          1672,
        ]).map((value) => Number(value))}
        selectable={boolean('selectable', true)}
        resettable={boolean('resettable', true)}
      />
    )),
  related: [
    { category: categories.CORE, name: 'Trait' },
    { category: categories.HELPERS, name: 'IconWithText' },
    { category: categories.HELPERS, name: 'Icon' },
    { category: categories.HELPERS, name: 'WikiLink' },
    { category: categories.HELPERS, name: 'Tooltip' },
    { category: categories.HELPERS, name: 'Spinner' },
    { category: categories.HELPERS, name: 'Progress' },
    { category: categories.HELPERS, name: 'Error' },
  ],
}
