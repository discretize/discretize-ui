import React, { Fragment } from 'react';
import classNames from 'classnames';

import { TooltipHeader, TooltipDescription } from '../Tooltip';
import {
  withStyles,
  formatFlavor,
  attributes as attributesMap,
} from '../helpers';
import Coin from '../Coin';

const styles = {
  nested: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  title: {},
  titleNested: {
    color: '#5599ff',
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  iconNested: {
    border: 'none',
    fontSize: '0.875rem',
  },
  description: {},
  stat: {
    color: '#30ad37',
  },
  statNested: {
    color: '#5599ff',
  },
  flavor: {
    color: '#a4c7c9',
  },
  buffDescription: {
    color: '#5599ff',
  },
  bonus: {
    color: '#aaaaaa',
  },
  bonusActive: {
    color: '#5599ff',
  },
};

const ItemTooltipContent = ({
  classes,
  nested,
  nestedContent,
  bonusCount,
  data: {
    icon,
    name,
    rarity,
    level,
    description,
    flags = [],
    details: {
      type,
      min_power: minPower,
      max_power: maxPower,
      defense,
      weight_class: weightClass,
      infix_upgrade: {
        attributes,
        buff: { description: buffDescription } = {},
      } = {},
      bonuses,
    } = {},
    vendor_value: vendorValue,
  },
}) => (
  <div className={classNames(nested && classes.nested)}>
    <TooltipHeader
      iconSrc={icon}
      iconPlaceholder={type}
      classes={{
        title: classNames(classes.title, nested && classes.titleNested),
        icon: classNames(nested && classes.iconNested),
      }}
    >
      {name}
      {nested && bonusCount >= 0 && bonuses && bonuses.length
        ? ` (${Math.min(bonusCount, bonuses.length)}/${bonuses.length})`
        : ''}
    </TooltipHeader>

    <div className={classes.attributes}>
      {minPower !== undefined && maxPower !== undefined && (
        <div className={classes.attribute}>
          {`Weapon Strength: `}
          <span className={classes.stat}>{`${minPower} - ${maxPower}`}</span>
        </div>
      )}

      {defense > 0 && (
        <div className={classes.attribute}>
          {`Defense: `}
          <span className={classes.stat}>{defense}</span>
        </div>
      )}

      {attributes &&
        attributes.length > 0 &&
        attributes.map(({ attribute, modifier }) => (
          <div key={`${attribute}-${modifier}`} className={classes.attribute}>
            <span
              className={classNames(classes.stat, nested && classes.statNested)}
            >
              {`+${modifier} ${attributesMap[attribute]}`}
            </span>
          </div>
        ))}

      {(!attributes || !attributes.length) && buffDescription && (
        <div className={classes.buffDescription}>{buffDescription}</div>
      )}

      {bonuses &&
        bonuses.length > 0 &&
        bonuses.map((bonus, index) => (
          <div
            key={bonus}
            className={classNames(
              classes.bonus,
              bonusCount > index && classes.bonusActive,
            )}
          >
            <span>({index + 1}): </span>
            {bonus}
          </div>
        ))}
    </div>

    <div className={classes.nested}>{nestedContent}</div>

    {!nested && (
      <TooltipDescription className={classes.description}>
        {[
          rarity,
          weightClass,
          type,
          level > 0 && `Required Level: ${level}`,
          formatFlavor(description, { flavor: classes.flavor }),
          flags.includes('Unique'),
          flags.includes('AccountBound') && 'Account Bound',
          flags.includes('Soulbound') && 'Soulbound',
          vendorValue > 0 && <Coin value={vendorValue} />,
        ]
          .filter(line => !!line)
          .map((element, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>
              {element}
              <br />
            </Fragment>
          ))}
      </TooltipDescription>
    )}
  </div>
);

export default withStyles(styles)(ItemTooltipContent);
