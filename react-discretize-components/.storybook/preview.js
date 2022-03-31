import '@discretize/typeface-menomonia';
import '../../gw2-ui/src/default_style.css';
import 'typeface-fira-mono';
import 'typeface-muli';
import 'typeface-raleway';
import { CssBaseline, ThemeProvider } from '@mui/material';
import muiTheme from '../src/styles/muiTheme';
import globals from '../src/styles/globals';
import { Global } from '@emotion/react';

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
      <Global globals={globals} />
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </>
  ),
];
