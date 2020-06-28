import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Tooltip } from 'gw2-ui';
import styled from 'styled-components';

import categories from '../categories';
import readme from './Tooltip.readme.md';
import docs from './Tooltip.docs.md';

const Element = styled.span`
  padding: 8px;
  background-color: #d73a49;
  color: #fff;
  border-radius: 3px;
  font-size: 16px;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
`;

export default {
  category: categories.HELPERS,
  name: 'Tooltip',
  readme,
  docs,
  story: () => (
    <Tooltip
      content={text('content', 'Tooltip content')}
      render={text('render', null)}
    >
      <Element>Hover me</Element>
    </Tooltip>
  ),
};
