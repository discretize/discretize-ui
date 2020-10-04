import React from 'react'
import { number, text, boolean, select } from '@storybook/addon-knobs'
import { IconWithText } from 'gw2-ui'

import categories from '../categories'
import readme from './IconWithText.readme.md'
import docs from './IconWithText.docs.md'

export default {
  category: categories.HELPERS,
  name: 'IconWithText',
  readme,
  docs,
  story: () => (
    <IconWithText
      loading={boolean('loading', false)}
      icon={text(
        'icon',
        'https://render.guildwars2.com/file/2FA9DF9D6BC17839BBEA14723F1C53D645DDB5E1/102852.png',
      )}
      iconPosition={select('iconPosition', ['left', 'right'])}
      text={text('text', 'Example text')}
      disableIcon={boolean('disableIcon', false)}
      disableText={boolean('disableText', false)}
      inline={boolean('inline', true)}
      component={text('component', 'span')}
      style={{ fontSize: number('style.fontSize', 24) }}
    />
  ),
  related: [
    {
      category: categories.HELPERS,
      name: 'Icon',
    },
    {
      category: categories.HELPERS,
      name: 'Spinner',
    },
    {
      category: categories.HELPERS,
      name: 'Progress',
    },
  ],
}
