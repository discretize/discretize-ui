import '@discretize/typeface-menomonia';
import React from 'react';
import 'typeface-fira-mono';
import 'typeface-muli';
import 'typeface-raleway';
import '../../gw2-ui/src/default_style.css';
import '../src/styles/defaultTheme.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// setup the MUI theming
export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];

export const tags = ['autodocs'];
