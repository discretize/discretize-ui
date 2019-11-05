import React from 'react';
import { create } from 'jss';
import { JssProvider, createGenerateClassName, ThemeProvider } from 'react-jss';
import camelCase from 'jss-camel-case';
import defaultUnit from 'jss-default-unit';
import nested from 'jss-nested';
import propsSort from 'jss-props-sort';
import vendorPrefixer from 'jss-vendor-prefixer';

const jss = create();
jss.use(nested(), camelCase(), defaultUnit(), vendorPrefixer(), propsSort());

const generateClassName = createGenerateClassName();

const theme = {
  palette: {
    text: {
      primary: '#000',
      secondary: 'rgba(255,255,255,0.7)',
      error: '#dd2c00',
    },
    link: {
      default: '#00cccc',
      hover: '#00c',
      type: 'dark',
    },
    tooltip: {
      title: '#eebb66',
      primary: '#fff',
      secondary: 'rgba(255,255,255,0.7)',
    },
    border: 'rgb(9, 10, 14)',
  },
  shape: {
    borderRadius: 0,
  },
  spacing: {
    unit: 8,
  },
  typography: {
    text: {
      fontSize: '1em',
      fontWeight: 400,
      fontFamily:
        'Menomonia, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      lineHeight: '1.46429em',
    },
    tooltip: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily:
        'Menomonia, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      lineHeight: '1.16667em',
      textShadow: '1px 1px 1px rgb(9, 10, 14)',
    },
  },
  zIndex: {
    tooltip: 1500,
  },

  colors: {
    profession: {
      elementalist: {
        light: '#f6bebc',
        medium: '#f68a87',
        dark: '#dc423e',
      },
      engineer: {
        light: '#e8bc84',
        medium: '#d09c59',
        dark: '#87581d',
      },
      guardian: {
        light: '#bce8fd',
        medium: '#72c1d9',
        dark: '#186885',
      },
      mesmer: {
        light: '#d09eea',
        medium: '#b679d5',
        dark: '#69278a',
      },
      necromancer: {
        light: '#bfe6d0',
        medium: '#52a76f',
        dark: '#2c9d5d',
      },
      ranger: {
        light: '#d2f6bc',
        medium: '#8cdc82',
        dark: '#67a833',
      },
      revenant: {
        light: '#e4aea3',
        medium: '#d16e5a',
        dark: '#a66356',
      },
      thief: {
        light: '#dec6c9',
        medium: '#c08f95',
        dark: '#974550',
      },
      warrior: {
        light: '#fff2a4',
        medium: '#ffd166',
        dark: '#caaa2a',
      },
    },
    rarity: {
      legendary: {
        medium: '#4C139D',
      },
      ascended: {
        medium: '#fb3e8d',
      },
      exotic: {
        medium: '#ffa405',
      },
      rare: {
        medium: '#fcd00b',
      },
      masterwork: {
        medium: '#1a9306',
      },
      fine: {
        medium: '#62A4DA',
      },
      basic: {
        medium: '#000',
      },
      junk: {
        medium: '#AAA',
      },
    },
  },

  props: {},
  overrides: {},
};

const Gw2ThemeProvider = ({ children }) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </JssProvider>
);

export default Gw2ThemeProvider;
