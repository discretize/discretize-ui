import { Boon, CommonEffect, Condition, Skill, Trait } from '@discretize/gw2-ui-new';
import { makeStyles } from 'tss-react/mui';
import firstUppercase from '../helpers/firstUppercase';

const useStyles = makeStyles()(() => ({
  gw2component: {
    fontSize: 20,
  },
}));

const AssumedBuffs = ({ value }) => {
  const { classes } = useStyles();

  return (
    <>
      {value.map(({ id, type, gw2id }) => {
        switch (type) {
          case 'Boon':
            return (
              <Boon
                name={firstUppercase(id)}
                disableText
                key={`${type}_${id}`}
                className={classes.gw2component}
              />
            );
          case 'Condition':
            return (
              <Condition
                name={firstUppercase(id)}
                disableText
                key={`${type}_${id}`}
                className={classes.gw2component}
              />
            );
          case 'Skill':
            return (
              <Skill
                id={gw2id}
                disableText
                key={`${type}_${gw2id}`}
                className={classes.gw2component}
              />
            );
          case 'Trait':
            return (
              <Trait
                id={gw2id}
                disableText
                key={`${type}_${gw2id}`}
                className={classes.gw2component}
              />
            );
          case 'CommonEffect':
            return (
              <CommonEffect
                name={firstUppercase(id)}
                disableText
                key={`${type}_${id}`}
                className={classes.gw2component}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};
export default AssumedBuffs;
