import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';

import mistlockInstabilities, {
  MistlockInstabilityTypes,
} from '../../data/mistlockInstabilities';
import { useTranslation } from '../../i18n';
import {
  MISTLOCK_INSTABILITIES,
  MISTLOCK_INSTABILITIES_DESCRIPTIONS,
  MISTLOCK_INSTABILTY_CONTROL,
} from '../../i18n/mistlockInstabilities';

export interface MistlockInstabilityProps {
  name: MistlockInstabilityTypes;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MistlockInstability = ({
  name,
  disableTooltip,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
}: MistlockInstabilityProps): ReactElement => {
  const nameTranslated = useTranslation(MISTLOCK_INSTABILITIES, name);
  const descriptionTranslated = useTranslation(
    MISTLOCK_INSTABILITIES_DESCRIPTIONS,
    name,
  );

  const mistlockTranslated = useTranslation(
    MISTLOCK_INSTABILTY_CONTROL,
    'Mistlock Instability',
  );

  return (
    <Effect
      type="MistlockInstability"
      name={name}
      displayName={`${mistlockTranslated}: ${nameTranslated}`}
      description={descriptionTranslated}
      disableTooltip={disableTooltip}
      disableText={disableText}
      disableLink={disableLink}
      disableIcon={disableIcon}
      className={className}
      style={style}
    />
  );
};

export default MistlockInstability;
