import React, { CSSProperties, ReactElement } from 'react';
import { BoonsTypes } from '../../data/boons';
import { translate, useAPILanguage } from '../../i18n';
import {
  TRANSLATIONS_BOONS,
  TRANSLATIONS_BOON_DESCRIPTIONS,
} from '../../i18n/boons';
import Effect from '../Effect/Effect';
import { IconProps } from '../Icon/Icon';

export interface BoonProps {
  name: BoonsTypes;
  count?: number;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
  iconProps?: IconProps;
}

const Boon = (props: BoonProps): ReactElement => {
  const { name, count = 1, iconProps } = props;
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
      iconProps={{ applyCount: count, ...iconProps }}
    />
  );
};

export default Boon;
