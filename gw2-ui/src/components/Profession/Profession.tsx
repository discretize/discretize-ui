import clsx from 'clsx';
import React, { type CSSProperties, type ReactElement } from 'react';
import PROFESSIONS, {
  type EliteSpecTypes,
  type ProfessionTypes,
} from '../../data/professions';
import professioncss from './professions.module.css';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink from '../WikiLink/WikiLink';
import css from './Profession.module.css';
import { translate, useAPILanguage } from '../../i18n';
import TRANSLATIONS_PROFESSIONS from '../../i18n/professions';

export interface ProfessionProps {
  name: ProfessionTypes | EliteSpecTypes;
  text?: string;
  disableTooltip?: boolean;
  disableIcon?: boolean;
  disableLink?: boolean;
  disableText?: boolean;
  inline?: boolean;
  style?: CSSProperties;
  className?: string;
}

const Profession = ({
  name: professionOrSpecName,
  text,
  disableTooltip,
  disableIcon,
  disableLink,
  disableText,
  inline,
  style,
  className,
}: ProfessionProps): ReactElement => {
  const language = useAPILanguage();

  let profession: ProfessionTypes | undefined;
  const specialization = professionOrSpecName;

  for (const _id in PROFESSIONS) {
    const id = _id as ProfessionTypes;
    if (
      id === professionOrSpecName ||
      PROFESSIONS[id].includes(professionOrSpecName as any)
    ) {
      profession = id;
      break;
    }
  }

  if (!profession) {
    return (
      <Error
        code={404}
        name="Invalid Profession"
        message={`Error: no data for Profession ${professionOrSpecName}`}
        disableTooltip={disableTooltip}
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        className={className}
        style={style}
      />
    );
  }

  const translatedText = translate(
    TRANSLATIONS_PROFESSIONS,
    specialization,
    language,
  );

  return (
    <IconWithText
      text={
        disableLink ? (
          text || translatedText
        ) : (
          <WikiLink
            to={specialization}
            text={text || translatedText}
            className={clsx(
              profession && professioncss[`coloredProfession${profession}`],
            )}
          />
        )
      }
      disableIcon={disableIcon}
      disableText={disableText}
      inline={inline}
      iconProps={{
        className: css[`imageProfession${specialization}`],
        iconViaClassname: true,
      }}
      style={style}
      className={clsx(
        profession && professioncss[`coloredProfession${profession}`],
        className,
      )}
    />
  );
};

export default Profession;
