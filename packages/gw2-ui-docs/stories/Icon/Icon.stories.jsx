import React from 'react';
import { number, text, boolean } from '@storybook/addon-knobs';
import { Icon } from 'gw2-ui';

import categories from '../categories';
import readme from './Icon.readme.md';
import docs from './Icon.docs.md';

export default {
  category: categories.HELPERS,
  name: 'Icon',
  readme,
  docs,
  story: () => (
    <Icon
      src={text(
        'src',
        'https://render.guildwars2.com/file/2FA9DF9D6BC17839BBEA14723F1C53D645DDB5E1/102852.png',
      )}
      applyCount={number('applyCount', null)}
      zoom={number('zoom', null)}
      inline={boolean('inline', true)}
      gutterRight={boolean('gutterRight', false)}
      gutterLeft={boolean('gutterLeft', false)}
      hexagon={boolean('hexagon', false)}
      inactive={boolean('inactive', false)}
      component={text('component', 'span')}
      style={{ fontSize: number('fontSize', 24) }}
    />
  ),
};
