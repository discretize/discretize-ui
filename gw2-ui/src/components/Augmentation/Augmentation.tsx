import React, { CSSProperties, ReactElement } from 'react';
import { AugmentationsTypes } from '../../data/augmentations';
import { translate, useAPILanguage } from '../../i18n';
import {
  TRANSLATIONS_AUGMENTATIONS,
  TRANSLATIONS_AUGMENTATION_DESCRIPTIONS,
} from '../../i18n/augmentations';
import Effect from '../Effect/Effect';

export interface AugmentationProps {
  name: AugmentationsTypes;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const Augmentation = (props: AugmentationProps): ReactElement => {
  const { name } = props;
  const language = useAPILanguage();

  let translation = translate(TRANSLATIONS_AUGMENTATIONS, name, language);
  let description = translate(
    TRANSLATIONS_AUGMENTATION_DESCRIPTIONS,
    name,
    language,
  );

  return (
    <Effect
      {...props}
      type="Augmentation"
      name={name}
      displayName={translation}
      description={description}
    />
  );
};

export default Augmentation;
