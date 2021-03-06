import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { APILanguageProvider } from '../../i18n';
import Error from './Error';

export default {
  title: 'Helper Components/Error',
  component: Error,
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => {
  return (
    <>
      <Error {...args} />
    </>
  );
};

const ERROR_NAMES = {
  404: { en: 'Mishap :(', es: 'Accidente :(' },
  500: 'Network Mishap :(',
};
const ERROR_MESSAGES = {
  404: {
    en: `Quaggan looked everywhere but coouldn't find what yoou're looking foor *pohooo*`,
    es: 'Quaggan did not expect the spanish translation.',
  },
  500: `Quaggan's network waddles slower than a centaur *pohooo*`,
};

export const NotFound = Template.bind({});
NotFound.args = {
  code: 404,
  message: ERROR_MESSAGES,
  name: ERROR_NAMES,
};

export const NetworkError = Template.bind({});
NetworkError.args = {
  code: 500,
  message: ERROR_MESSAGES,
  name: ERROR_NAMES,
};

export function Translated() {
  return (
    <>
      English: <Error code={404} message={ERROR_MESSAGES} name={ERROR_NAMES} />
      <br />
      <APILanguageProvider value="es">
        Spanish:{' '}
        <Error code={404} message={ERROR_MESSAGES} name={ERROR_NAMES} />
      </APILanguageProvider>
    </>
  );
}
