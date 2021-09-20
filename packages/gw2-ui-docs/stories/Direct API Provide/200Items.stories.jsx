import { Skill } from 'gw2-ui-bulk'
import React from 'react'
import categories from '../categories'
import docs from './200Items.docs.md'
const skills = require('./skills_temp.json')

const PAGE_NAME = 'API data as props + lazy load tooltip'

export default {
  category: categories.PERFORMANCE,
  name: PAGE_NAME,
  docs,
  story: () =>
    skills.slice(0, 200).map((value) => (
      <Skill
        data={{
          name: value.name,
          icon: value.icon,
          id: value.id,
          professions: value.professions,
        }}
        key={value.id}
      />
    )),
}
