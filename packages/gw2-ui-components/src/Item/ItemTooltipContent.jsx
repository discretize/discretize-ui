import React, { Fragment } from 'react';

import { TooltipHeader, TooltipDescription } from '../Tooltip';
import {
  withStyles,
  formatFlavor,
  attributes as attributesMap,
} from '../helpers';
import Coin from '../Coin';

const styles = {
  title: {},
  description: {},
  stat: {
    color: '#30ad37',
  },
  flavor: {
    color: '#a4c7c9',
  },
};

const ItemTooltipContent = ({
  classes,
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
      infix_upgrade: { attributes } = {},
    } = {},
    vendor_value: vendorValue,
  },
}) => (
  <Fragment>
    <TooltipHeader
      iconSrc={icon}
      iconPlaceholder={type}
      classes={{ title: classes.title }}
    >
      {name}
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
          <div className={classes.attribute}>
            <span className={classes.stat}>
              {`+${modifier} ${attributesMap[attribute]}`}
            </span>
          </div>
        ))}
    </div>

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
        .map(element => (
          <Fragment>
            {element}
            <br />
          </Fragment>
        ))}
    </TooltipDescription>
  </Fragment>
);

export default withStyles(styles)(ItemTooltipContent);
