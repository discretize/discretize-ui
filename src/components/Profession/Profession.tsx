import clsx from 'clsx';
import { capitalize } from '../../helpers/capitalize';
import React, { CSSProperties, ReactElement } from 'react';
import PROFESSIONS, {
  EliteSpecTypes,
  ProfessionTypes,
} from '../../data/professions';
import professioncss from './professions.module.css';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink from '../WikiLink/WikiLink';
import css from './Profession.module.css';
import { APILanguageContext, translate } from '../../i18n';
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
  name: propsName,
  text,
  disableTooltip,
  disableIcon,
  disableLink,
  disableText,
  inline,
  style,
  className,
}: ProfessionProps): ReactElement => {
  const professionName = capitalize(propsName);
  const language = React.useContext(APILanguageContext);

  let profession: string | undefined;
  let specialization: string;

  if (Object.keys(PROFESSIONS).includes(professionName)) {
    // in this case the selected propsName is equivalent to a profession
    profession = professionName;
    specialization = professionName;
  } else {
    // in this case the user selected an elitespecialization.
    // Need to query the corresponding profession for coloring
    profession =
      Object.keys(PROFESSIONS).find((prof) => {
        return PROFESSIONS[prof as ProfessionTypes].includes(
          professionName as EliteSpecTypes,
        );
      }) || '';
    profession = capitalize(profession);
    specialization = capitalize(professionName);
  }

  if (!profession) {
    return (
      <Error
        code={404}
        name="Invalid Profession"
        message={`Error: no data for Profession ${propsName}`}
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
