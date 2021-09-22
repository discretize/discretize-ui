import { Skill, Item } from 'gw2-ui-bulk'
import React from 'react'
import categories from '../categories'
import docs from './200Items.docs.md'
const skills = require('./skills_temp.json')
const items = require("./items.json")

const PAGE_NAME = 'API data as props + lazy load tooltip'

export default {
  category: categories.PERFORMANCE,
  name: PAGE_NAME,
  docs,
  story: () => (
    <>
      {skills.slice(0, 200).map((value) => (
        <Skill
          data={{
            name: value.name,
            icon: value.icon,
            id: value.id,
            professions: value.professions,
          }}
          key={value.id}
        />
      ))}
      {items.slice(0, 200).map((value) => (
        <Item
          data={{
            name: value.name,
            icon: value.icon,
            id: value.id,
            rarity: value.rarity,
          }}
          key={value.id}
        />
      ))}
    </>
  ),
}
