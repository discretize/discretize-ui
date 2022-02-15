import React, { ReactElement } from 'react';

import Tooltip from '../Tooltip/Tooltip';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink from '../WikiLink/WikiLink';
import Error from '../Error/Error';

import ATTRIBUTES, { AttributeTypes } from '../../data/attributes';
import css from './Attribute.module.css';

export interface AttributeProps {
  name: AttributeTypes;
  disableTooltip: boolean;
  disableIcon: boolean;
  disableText: boolean;
  disableLink: boolean;
  inline: boolean;
}

const Attribute = ({
  name,
  disableTooltip,
  disableIcon,
  disableText,
  disableLink,
  inline,
}: AttributeProps): ReactElement => {
  const description = Object.values(ATTRIBUTES).reduce<string | undefined>(
    (prev, cur) => cur[name] || prev,
    undefined,
  );

  if (!name || typeof description === 'undefined') {
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

  return (
    <Tooltip
      content={
        <>
          <DetailsHeader>{name}</DetailsHeader>
          <DetailsText lines={[description]} />
        </>
      }
      disabled={disableTooltip}
    >
      <IconWithText
        text={
          disableLink ? name : <WikiLink to={name} className={css.wikiLink} />
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{
          className: css[`imageAttribute${name.replace(' ', '')}`],
          iconViaClassname: true,
        }}
        className={css.iconWithText}
      />
    </Tooltip>
  );
};

export default Attribute;
