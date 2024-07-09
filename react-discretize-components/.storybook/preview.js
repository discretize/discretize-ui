import '@discretize/typeface-menomonia';
import '../../gw2-ui/src/default_style.css';
import 'typeface-fira-mono';
import 'typeface-muli';
import 'typeface-raleway';
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

// export const tags = ['autodocs'];
