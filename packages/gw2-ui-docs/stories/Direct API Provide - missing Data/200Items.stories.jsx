import { Trait, Item } from 'gw2-ui-bulk'
import React from 'react'
import categories from '../categories'
import docs from './200Items.docs.md'
const traits = require('./traits.json')

const PAGE_NAME = 'API data as props + missing data'

export default {
  category: categories.PERFORMANCE,
  name: PAGE_NAME,
  docs,
  story: () => (
    <>
      <Item id={91805} />
      <Item id={43360} />
      <Item id={79722} />
      <Item id={49940} />
      <Item
        data={{
          name: 'Attuned Mist Band (Infused)',
          id: 80793,
          icon: 'https://render.guildwars2.com/file/EAA61AAF9BEF031104FD063C0A301A520EF5F5E6/1614682.png',
          rarity: 'Ascended',
          details: {
            type: 'Ring',
            infix_upgrade: {
              attributes: [
                {
                  attribute: 'Power',
                  modifier: 106,
                },
                {
                  attribute: 'ConditionDamage',
                  modifier: 106,
                },
                {
                  attribute: 'Precision',
                  modifier: 56,
                },
                {
                  attribute: 'ConditionDuration',
                  modifier: 56,
                },
              ],
            },
          },
        }}
      />
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
