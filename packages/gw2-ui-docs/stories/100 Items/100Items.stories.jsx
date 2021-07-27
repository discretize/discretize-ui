import { Skill, withPageName } from 'gw2-ui'
import React from 'react'
import categories from '../categories'
import docs from './100Items.docs.md'

const PAGE_NAME = '100 Items'

const Data = () => {
  return [...Array(100).keys()]
    .map((value) => `${value + 200}`)
    .map((value) => <Skill key={value} id={value} />)
}

export default {
  category: categories.PERFORMANCE,
  name: PAGE_NAME,
  docs,
  story: () => {
    return withPageName(PAGE_NAME)(Data)
  },
}
