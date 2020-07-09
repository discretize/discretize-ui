import React from 'react';
import { number, object } from '@storybook/addon-knobs';
import { Attributes } from 'gw2-ui';

import categories from '../categories';
import readme from './Attributes.readme.md';
import docs from './Attributes.docs.md';

export default {
  category: categories.CORE,
  name: 'Attributes',
  readme,
  docs,
  story: () => (
    <Attributes
      level={number('level', 80)}
      items={object('items', [48073, 37131])}
    >
      {attributes => {
        const {
          base: baseAttributes,
          items: {
            attributes: itemAttributes,
            errors: itemErrors,
            loading: itemLoading,
          },
        } = attributes;

        return JSON.stringify({
          baseAttributes,
          itemAttributes,
          itemErrors,
          itemLoading,
        });
      }}
    </Attributes>
  ),
};
