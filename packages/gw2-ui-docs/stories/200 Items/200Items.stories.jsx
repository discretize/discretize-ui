import React from 'react'
import { withPageName, Item } from 'gw2-ui'

import categories from '../categories'
import docs from './200Items.docs.md'

const PAGE_NAME = '200 Items'

const Data = () => {
  return [...Array(200).keys()]
    .map((value) => `${value + 200}`)
    .map((value) => <Item key={value} id={value} />)
}

export default {
  category: categories.PERFORMANCE,
  name: PAGE_NAME,
  docs,
  story: () => {
    return withPageName(PAGE_NAME)(Data)
  },
}
