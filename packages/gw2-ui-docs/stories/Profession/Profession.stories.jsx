import React from 'react';
import { select, boolean, number } from '@storybook/addon-knobs';
import { Profession, professions } from 'gw2-ui';

import categories from '../categories';
import readme from './Profession.readme.md';
import docs from './Profession.docs.md';

export default {
  category: categories.CORE,
  name: 'Profession',
  readme,
  docs,
  story: () => (
    <Profession
      name={select(
        'name',
        [null, ...professions.map(([name]) => name)],
        'Elementalist',
      )}
      eliteSpecialization={select(
        'eliteSpecialization',
        [
          null,
          ...professions.flatMap(
            ([, eliteSpecializations]) => eliteSpecializations,
          ),
        ],
        null,
      )}
      disableIcon={boolean('disableIcon', false)}
      disableText={boolean('disableText', false)}
      disableLink={boolean('disableLink', false)}
      inline={boolean('inline', true)}
      style={{ fontSize: number('style.fontSize', 24) }}
    />
  ),
  related: [
    { category: categories.HELPERS, name: 'IconWithText' },
    { category: categories.HELPERS, name: 'Icon' },
    { category: categories.HELPERS, name: 'WikiLink' },
    { category: categories.HELPERS, name: 'Error' },
  ],
};
