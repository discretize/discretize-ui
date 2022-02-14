import clsx from 'clsx';
import capitalize from 'lodash.capitalize';
import React, { ReactElement } from 'react';
import professions from '../../data/professions.json';
import globalcss from '../../global.module.css';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink from '../WikiLink/WikiLink';
import css from './Profession.module.css';

export interface ProfessionProps {
  name: string;
  disableTooltip?: boolean;
  disableIcon?: boolean;
  disableLink?: boolean;
  disableText?: boolean;
  inline?: boolean;
}

const Profession = ({
  name: propsName,
  disableTooltip,
  disableIcon,
  disableLink,
  disableText,
  inline,
}: ProfessionProps): ReactElement => {
  const professionName = capitalize(propsName);

  let profession: string | undefined;
  let specialization: string;

  if (Object.keys(professions).includes(professionName)) {
    // in this case the selected propsName is equivalent to a profession
    profession = professionName;
    specialization = professionName;
  } else {
    // in this case the user selected an elitespecialization.
    // Need to query the corresponding profession for coloring
    [profession] =
      Object.entries(professions).find(([, eliteSpec]) =>
        eliteSpec.includes(professionName),
      ) || [];
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
      />
    );
  }

  return (
    <IconWithText
      text={
        disableLink ? (
          specialization
        ) : (
          <WikiLink
            to={specialization}
            className={clsx(
              profession && globalcss[`coloredProfession${profession}`],
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
      className={profession && globalcss[`coloredProfession${profession}`]}
    />
  );
};

export default Profession;
