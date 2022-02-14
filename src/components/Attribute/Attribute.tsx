import React, { ReactElement } from 'react';

import Tooltip from '../Tooltip/Tooltip';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink from '../WikiLink/WikiLink';
import Error from '../Error/Error';

import attributes from '../../data/attributes.json';
import css from './Attribute.module.css';

export type AttributeTypes =
  | 'Power'
  | 'Precision'
  | 'Toughness'
  | 'Vitality'
  | 'Concentration'
  | 'Condition Damage'
  | 'Expertise'
  | 'Ferocity'
  | 'Healing Power'
  | 'Armor'
  | 'Boon Duration'
  | 'Critical Chance'
  | 'Critical Damage'
  | 'Condition Duration'
  | 'Health'
  | 'Agony Resistance'
  | 'Gold Find'
  | 'Karma Gain'
  | 'Magic Find'
  | 'XP Gain';

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
  const description = (Object.entries(attributes).find(([, values]) =>
    Object.keys(values).includes(name),
  ) || [])[1]?.[name];

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
