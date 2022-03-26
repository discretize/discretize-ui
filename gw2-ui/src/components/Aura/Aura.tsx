import React, { CSSProperties, ReactElement } from 'react';
import Effect from '../Effect/Effect';
import { AuraTypes } from '../../data/auras';
import { translate, useAPILanguage } from '../../i18n';
import {
  TRANSLATIONS_AURAS,
  TRANSLATIONS_AURA_DESCRIPTIONS,
} from '../../i18n/auras';

export interface AuraProps {
  name: AuraTypes;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Aura = (props: AuraProps): ReactElement => {
  const { name } = props;
  const language = useAPILanguage();

  let translation = translate(TRANSLATIONS_AURAS, name, language);
  let description = translate(TRANSLATIONS_AURA_DESCRIPTIONS, name, language);

  return (
    <Effect
      {...props}
      type="Aura"
      name={name}
      displayName={translation}
      description={description}
    />
  );
};

export default Aura;
