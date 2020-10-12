import { Item } from 'gw2-ui'
import React from 'react'
import categories from '../categories'
import docs from './100Items.docs.md'

export default {
  category: categories.PERFORMANCE,
  name: '100 Items',
  docs,
  story: () =>
    [...Array(100).keys()]
      .map((value) => `${value}`)
      .map((value) => <Item key={value} id={value} />),
}
