import { Item } from 'gw2-ui-bulk'
import React from 'react'
import categories from '../categories'
import docs from './100Items.docs.md'

const PAGE_NAME = '100 Items - API'

export default {
  category: categories.PERFORMANCE,
  name: PAGE_NAME,
  docs,
  story: () =>
    [...Array(100).keys()]
      .map((value) => `${value + 150}`)
      .map((value) => <Item key={value} id={value} />),
}
