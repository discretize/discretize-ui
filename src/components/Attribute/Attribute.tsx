import React, { CSSProperties, ReactElement, useContext } from 'react';

import Tooltip from '../Tooltip/Tooltip';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink from '../WikiLink/WikiLink';
import Error from '../Error/Error';

import { AttributeTypes } from '../../data/attributes';
import {
  TRANSLATIONS_ATTRIBUTES,
  TRANSLATIONS_ATTRIBUTE_DESCRIPTIONS,
} from '../../i18n/attributes';
import { APILanguageContext, translate } from '../../i18n';
import css from './Attribute.module.css';
import clsx from 'clsx';

export interface AttributeProps {
  name: AttributeTypes;
  text?: string;
  disableTooltip?: boolean;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  inline?: boolean;
  style?: CSSProperties;
  className?: string;
}

const Attribute = ({
  name,
  text,
  disableTooltip,
  disableIcon,
  disableText,
  disableLink,
  inline,
  style,
  className,
}: AttributeProps): ReactElement => {
  const language = useContext(APILanguageContext);

  if (!name || !TRANSLATIONS_ATTRIBUTES[name]) {
    return (
      <Error
        code={404}
        name={`Invalid Attribute ${name || ''}`}
        message={`Error: No data for Attribute ${name || ''}`}
        disableTooltip={disableTooltip}
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
      />
    );
  }

  let translation = translate(TRANSLATIONS_ATTRIBUTES, name, language);
  let description = translate(
    TRANSLATIONS_ATTRIBUTE_DESCRIPTIONS,
    name,
    language,
  );

  return (
    <Tooltip
      content={
        <>
          <DetailsHeader>{translation}</DetailsHeader>
          <DetailsText lines={[description]} />
        </>
      }
      disabled={disableTooltip}
    >
      <IconWithText
        text={
          disableLink ? (
            text || translation
          ) : (
            <WikiLink
              to={name}
              text={text || translation}
              className={css.wikiLink}
            />
          )
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{
          className: css[`imageAttribute${name.replaceAll(' ', '')}`],
          iconViaClassname: true,
        }}
        style={style}
        className={clsx(className, css.iconWithText)}
      />
    </Tooltip>
  );
};

export default Attribute;
