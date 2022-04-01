import {
  Boon,
  CommonEffect,
  Condition,
  Skill,
  Trait,
} from '@discretize/gw2-ui-new';
import classNames from 'classnames';
import { makeStyles } from 'tss-react/mui';
import firstUppercase from '../../helpers/firstUppercase';

const useStyles = makeStyles()(() => ({
  component: {
    fontSize: 20,
  },
}));

export interface AssumedBuffsProps {
  value: (
    | { type: 'Boon'; id: string; gw2id?: undefined }
    | { type: 'Condition'; id: string; gw2id?: undefined }
    | { type: 'Skill'; gw2id: number; id?: undefined }
    | { type: 'Trait'; gw2id: number; id?: undefined }
    | { type: 'CommonEffect'; id: string; gw2id?: undefined }
  )[];
  className?: string;
}

const AssumedBuffs = ({ value, className }: AssumedBuffsProps) => {
  const { classes } = useStyles();
  return (
    <div className={className}>
      {value.map(({ id, type, gw2id }) => {
        switch (type) {
          case 'Boon':
            return (
              <Boon
                name={firstUppercase(id)}
                disableText
                key={`${type}_${id}`}
                className={classNames(classes.component)}
              />
            );
          case 'Condition':
            return (
              <Condition
                name={firstUppercase(id)}
                disableText
                key={`${type}_${id}`}
                className={classes.component}
              />
            );
          case 'Skill':
            return (
              <Skill
                id={gw2id}
                disableText
                key={`${type}_${gw2id}`}
                className={classes.component}
              />
            );
          case 'Trait':
            return (
              <Trait
                id={gw2id}
                disableText
                key={`${type}_${gw2id}`}
                className={classes.component}
              />
            );
          case 'CommonEffect':
            return (
              <CommonEffect
                name={firstUppercase(id)}
                disableText
                key={`${type}_${id}`}
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
