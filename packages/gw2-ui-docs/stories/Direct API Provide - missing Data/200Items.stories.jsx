import { Item, Skill, Trait } from 'gw2-ui-bulk'
import React from 'react'
import categories from '../categories'
import docs from './200Items.docs.md'
const traits = require('./traits.json')

const PAGE_NAME = 'API data as props + missing data'

export default {
  category: categories.MISSING_DATA,
  name: PAGE_NAME,
  docs,
  story: () => (
    <>
      <Skill missing name="Epilogue Ashes Of the Just" />
      <Skill missing name="Chapter 4: scorched aftermath" />
      <Skill id={9143} />
      <Item id={91805} />
      <Item id={43360} />
      <Item id={79722} />
      <Item id={49940} />

      {traits
        .filter((trait) => !trait.description)
        .slice(0, 200)
        .map((value) => (
          <div>
            <Trait
              data={{
                name: value.name,
                icon: value.icon,
                id: value.id,
                specialization: value.specialization,
              }}
              text={value.name + ' ' + value.id}
              key={value.id}
            />
          </div>
        ))}
    </>
  ),
}
