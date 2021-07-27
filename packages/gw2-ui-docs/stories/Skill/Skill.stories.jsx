import { boolean, number } from '@storybook/addon-knobs'
import { Skill, withPageName } from 'gw2-ui'
import React from 'react'
import categories from '../categories'
import docs from './Skill.docs.md'
import readme from './Skill.readme.md'

const PAGE_NAME = 'Skill'
export default {
  category: categories.CORE,
  name: PAGE_NAME,
  readme,
  docs,
  story: () =>
    withPageName(PAGE_NAME)(() => (
      <Skill
        id={number('id', 14375)}
        disableIcon={boolean('disableIcon', false)}
        disableText={boolean('disableText', false)}
        disableLink={boolean('disableLink', false)}
        disableTooltip={boolean('disableTooltip', false)}
        inline={boolean('inline', true)}
        style={{ fontSize: number('style.fontSize', 24) }}
      />
    )),
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
