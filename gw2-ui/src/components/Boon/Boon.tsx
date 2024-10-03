import React, { type CSSProperties, type ReactElement } from 'react';
import { type BoonsTypes } from '../../data/boons';
import { translate, useAPILanguage } from '../../i18n';
import {
  TRANSLATIONS_BOONS,
  TRANSLATIONS_BOON_DESCRIPTIONS,
} from '../../i18n/boons';
import Effect from '../Effect/Effect';

export interface BoonProps {
  name: BoonsTypes;
  count?: number;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Boon = (props: BoonProps): ReactElement => {
  const { name, count = 1 } = props;
  const language = useAPILanguage();

  const translation = translate(TRANSLATIONS_BOONS, name, language);
  const description = translate(TRANSLATIONS_BOON_DESCRIPTIONS, name, language);

  return (
    <Effect
      {...props}
      type="Boon"
      name={name}
      displayName={translation}
      description={description}
      iconProps={{ applyCount: count }}
    />
  );
};

export default Boon;
