import {
  Boon,
  CommonEffect,
  Condition,
  Item,
  Skill,
  Trait,
} from '@discretize/gw2-ui-new';
import classNames from 'classnames';
import firstUppercase from '../../helpers/firstUppercase';
import classes from './AssumedBuffs.module.css';

export interface AssumedBuffsProps {
  value: (
    | { type: 'Boon'; id: string; gw2id?: undefined }
    | { type: 'Condition'; id: string; gw2id?: undefined }
    | { type: 'Skill'; gw2id: number; id?: undefined }
    | { type: 'Trait'; gw2id: number; id?: undefined }
    | { type: 'CommonEffect'; id: string; gw2id?: undefined }
    | { type: 'Item'; id?: undefined; gw2id: number }
  )[];
  className?: string;
}

const AssumedBuffs = ({ value, className }: AssumedBuffsProps) => {
  return (
    <div className={className}>
      {value.map(({ id, type, gw2id }, index) => {
        const key = `${type}_${id}-${gw2id}-${index}`;
        switch (type) {
          case 'Boon':
            return (
              <Boon
                name={firstUppercase(id)}
                disableText
                key={key}
                className={classNames(classes.component)}
              />
            );
          case 'Condition':
            return (
              <Condition
                name={firstUppercase(id)}
                disableText
                key={key}
                className={classes.component}
              />
            );
          case 'Skill':
            return (
              <Skill
                id={gw2id}
                disableText
                key={key}
                className={classes.component}
              />
            );
          case 'Trait':
            return (
              <Trait
                id={gw2id}
                disableText
                key={key}
                className={classes.component}
              />
            );
          case 'CommonEffect':
            return (
              <CommonEffect
                name={firstUppercase(id)}
                disableText
                key={key}
                className={classes.component}
              />
            );
          case 'Item':
            return (
              <Item
                id={gw2id}
                disableText
                key={key}
                className={classes.component}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
export default AssumedBuffs;
