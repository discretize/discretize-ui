import { ThemeProvider } from '@mui/material/styles';
import { withTheme } from '@mui/styles';
import React from 'react';
import gw2Styles from './professionThemes';

const specializationAliases = {
  dragonhunter: 'guardian',
  firebrand: 'guardian',
  willbender: 'guardian',
  herald: 'revenant',
  renegade: 'revenant',
  vindicator: 'revenant',
  berserker: 'warrior',
  spellbreaker: 'warrior',
  bladesworn: 'warrior',
  scrapper: 'engineer',
  holosmith: 'engineer',
  mechanist: 'engineer',
  druid: 'ranger',
  soulbeast: 'ranger',
  untamed: 'ranger',
  daredevil: 'thief',
  deadeye: 'thief',
  specter: 'thief',
  tempest: 'elementalist',
  weaver: 'elementalist',
  catalyst: 'elementalist',
  chronomancer: 'mesmer',
  mirage: 'mesmer',
  virtuoso: 'mesmer',
  reaper: 'necromancer',
  scourge: 'necromancer',
  harbinger: 'necromancer',
};

export default (props) => (Component) =>
  withTheme(({ theme, ...rest }) => {
    const { profession, specialization, type } = props || { ...rest };

    let alias;

    alias = profession && typeof profession === 'string' && profession.toLowerCase();

    if (!alias) {
      const lowerCaseSpecialization =
        specialization && typeof specialization === 'string' && specialization.toLowerCase();
      alias =
        lowerCaseSpecialization &&
        (specializationAliases[lowerCaseSpecialization] || lowerCaseSpecialization);
    }

    if (!alias) {
      alias = type && typeof type === 'string' && type.toLowerCase();
    }

    const gw2Theme = alias && (!theme || alias !== theme.name) && gw2Styles[alias];

    return gw2Theme ? (
      <ThemeProvider theme={gw2Theme}>
        <Component {...rest} />
      </ThemeProvider>
    ) : (
      <Component {...rest} />
    );
  });
