import React, { CSSProperties, ReactElement, useContext } from 'react';
import { AugmentationsTypes } from '../../data/augmentations';
import { APILanguageContext, translate } from '../../i18n';
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
  const language = useContext(APILanguageContext);

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
      name={translation}
      description={description}
    />
  );
};

export default Augmentation;
