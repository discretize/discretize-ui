import clsx from 'clsx';
import React from 'react';
import type GW2ApiFact from '../../gw2api/types/common/fact';
import apiAttributes from '../../helpers/apiAttributes';
import formatDuration from '../../helpers/formatDuration';
import classes from './DetailsFact.module.css';

import Icon from '../Icon/Icon';
import { attributes } from '../../builder';
import { capitalize } from '../../helpers/capitalize';

const getKeyValue = (data: GW2ApiFact) => {
  let key: React.ReactNode;
  let value: React.ReactNode;
  let count: number | undefined = undefined;
  switch (data.type) {
    case 'AttributeAdjust': {
      const { text, value: factValue, target } = data;

      const attribute = !text && target && apiAttributes[target];
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
          <>
            {status}
            <span className={classes.headerFact}>{`(${formatDuration(
              duration,
            )})`}</span>
          </>
        );
      } else {
        key = status;
      }
      value = description;
      count = applyCount;

      break;
    }

    case 'BuffConversion': {
      const { percent, source, target } = data;

      const getAttr = (target: string) => {
        return capitalize(
          Object.keys(attributes).find((key) => attributes[key] === target) ||
            target,
        );
      };

      key = (
        <>
          Gain {getAttr(target)} based on a percentage of {getAttr(source)}
        </>
      );
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
          <>
            {text}
            <span className={classes.headerFact}>{`(${hitCount}x)`}</span>
          </>
        );
      } else {
        key = text;
      }
      value = Math.round(1047.5 * 1000 * (dmgMultiplier / 2597)); // Greatsword weapon strength

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
          <>
            {status}
            <span className={classes.headerFact}>{`(${duration}s)`}</span>
          </>
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
      // This line is a ts error if we forget a type
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const is_it_really_never: never = data;
      // eslint-disable-next-line no-console
      console.warn('Unknown fact type', data);

      const d = data as any;
      key = d.text || Math.random();
      value = `Unknown fact type: ${d.type}`;

      break;
    }
  }
  return { key, value, count };
};

export interface FactsProps {
  facts: GW2ApiFact[];
  className?: string;
}
const Facts: React.FC<FactsProps> = ({ facts, className }) => {
  return (
    <div className={clsx(className)}>
      {facts
        .map((fact) => ({
          ...getKeyValue(fact),
          icon: fact.icon,
        }))
        .map(({ key, value, count, icon }, index) => (
          <div
            key={`${key}-${value}-${count}-${index}`}
            className={classes.factRoot}
          >
            <div className={classes.factIconWrapper}>
              {icon && (
                <Icon
                  className={classes.factIcon}
                  src={icon}
                  applyCount={count}
                />
              )}
            </div>
            <div className={classes.factText}>
              {key}
              {key ? ': ' : ''}
              {value}{' '}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Facts;
