import { Item } from 'gw2-ui-bulk'
import React from 'react'
import categories from '../categories'
import docs from './200Items.docs.md'

const PAGE_NAME = '200 Items'

export default {
  category: categories.PERFORMANCE,
  name: PAGE_NAME,
  docs,
  story: () =>
    [...Array(200).keys()]
      .map((value) => `${value + 200}`)
      .map((value) => <Item key={value} id={value} />),
}
