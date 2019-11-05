import React, { Fragment } from 'react';
import classNames from 'classnames';

import Icon from '../Icon';
import { withStyles, attributes } from '../helpers';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '1.8125rem',
  },
  text: {
    marginLeft: '0.125em',
    color: theme.palette.tooltip.secondary,
  },
  amendment: {
    marginLeft: '0.125em',
  },
});

const TooltipFact = ({ className, classes, data }) => {
  const { type, icon, prefix } = data;

  let key;
  let value;
  let count;

  switch (type) {
    case 'AttributeAdjust': {
      const { text, value: factValue, target } = data;

      const attribute = !text && target && attributes[target];
      key = attribute ? `${attribute} Increase` : text;
      value = `${!text || text.endsWith('Increase') ? '+' : ''}${Number(
        factValue,
      ).toLocaleString()}`;

      break;
    }
    case 'Buff': {
      const { duration, status, description, apply_count: applyCount } = data;

      if (duration) {
        key = (
          <Fragment>
            {status}
            <span className={classes.amendment}>{`(${duration}s)`}</span>
          </Fragment>
        );
      } else {
        key = status;
      }
      value = description;
      count = applyCount;

      break;
    }
    case 'BuffConversion': {
      const { source, target, percent } = data;

      key = `Gain ${attributes[target]} Based on a Percentage of ${
        attributes[source]
      }`;
      value = `${percent}%`;

      break;
    }
    case 'ComboField': {
      const { text, field_type: fieldType } = data;

      key = text;
      value = fieldType;

      break;
    }
    case 'ComboFinisher': {
      const { text, percent, finisher_type: finisherType } = data;

      key = text;
      value = `${finisherType}${
        percent !== undefined && percent !== 0 && percent !== 100
          ? ` (${percent}% Chance)`
          : ''
      }`;

      break;
    }
    case 'Damage': {
      const { text, hit_count: hitCount, dmg_multiplier: dmgMultiplier } = data;

      if (hitCount > 1) {
        key = (
          <Fragment>
            {text}
            <span className={classes.amendment}>{`(${hitCount}x)`}</span>
          </Fragment>
        );
      } else {
        key = text;
      }
      value = Math.round(1047.5 * 1000 * (dmgMultiplier / 2597)); // Greatsword weapon strength;

      break;
    }
    case 'Distance': {
      const { text, distance } = data;

      key = text;
      value = distance;

      break;
    }
    case 'Duration': {
      const { text, duration } = data;

      key = text;
      value = duration;

      break;
    }
    case 'Heal': {
      const { text, hit_count: hitCount } = data;

      key = text;
      value = `${hitCount}x`;

      break;
    }
    case 'HealingAdjust': {
      const { text, hit_count: hitCount } = data;

      key = text;
      value = `${hitCount}x`;

      break;
    }
    case 'NoData': {
      const { text } = data;

      value = text;

      break;
    }
    case 'Number': {
      const { text, value: factValue } = data;

      key = text;
      value = factValue;

      break;
    }
    case 'Percent': {
      const { text, percent } = data;

      key = text;
      value = `${percent}%`;

      break;
    }
    case 'PrefixedBuff': {
      const {
        text,
        duration,
        status,
        description,
        apply_count: applyCount,
      } = data;

      if (duration) {
        key = (
          <Fragment>
            {status}
            <span className={classes.amendment}>{`(${duration}s)`}</span>
          </Fragment>
        );
      } else {
        key = text;
      }
      value = description;
      count = applyCount;

      break;
    }
    case 'Radius': {
      const { text, distance } = data;

      key = text;
      value = distance;

      break;
    }
    case 'Range': {
      const { text, value: factValue } = data;

      key = text;
      value = Number(factValue).toLocaleString();

      break;
    }
    case 'Recharge': {
      const { text, value: factValue } = data;

      key = text;
      value = factValue;

      break;
    }
    case 'StunBreak': {
      value = 'Breaks Stun';
      break;
    }
    case 'Time': {
      const { text, duration } = data;

      key = text;
      value = `${duration} second${duration > 1 ? 's' : ''}`;

      break;
    }
    case 'Unblockable': {
      const { text } = data;

      value = text;

      break;
    }
    default: {
      // eslint-disable-next-line no-console
      console.warn('Unknown fact type', data);

      const { text, value: factValue } = data;

      if (value === true) {
        value = text;
      } else {
        key = text;
        value = factValue;
      }

      break;
    }
  }

  if (!key && !value) {
    return null;
  }

  return (
    <div className={classNames(className, classes.root)}>
      <div className={classes.icon}>
        {prefix && prefix.icon && (
          <Icon src={prefix.icon} disableText applyCount={prefix.apply_count} />
        )}
        {icon && <Icon src={icon} applyCount={count} />}
      </div>

      <div className={classes.text}>
        {key}
        {key ? ': ' : ''}
        {value}
      </div>
    </div>
  );
};

export default withStyles(styles)(TooltipFact);
