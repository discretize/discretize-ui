import { ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import classNames from 'classnames';
import { makeStyles } from 'tss-react/mui';
import NoSelection from '../../helpers/NoSelection';
import { useDefaultStyles } from '../../styles/defaultStyles';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'grid',
    justifyContent: 'center',
    gridAutoFlow: 'column',
    margin: -12,
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: 12,
  },
  borderLeft: {
    borderLeft: '1px solid #1e2124',
  },
}));

export interface ConsumablesProps {
  foodId?: number;
  utilityId?: number;
  infusionId?: number;
}

const Consumables = ({ foodId, utilityId, infusionId }: ConsumablesProps) => {
  const { classes } = useStyles();
  const defaultStyles = useDefaultStyles();
  const { gw2Item, title } = defaultStyles.classes;
  return (
    <div className={classes.root}>
      <div className={classes.gridItem}>
        {foodId ? (
          <Item id={foodId} className={gw2Item} disableText />
        ) : (
          <NoSelection className={gw2Item} />
        )}
        <span className={title}>
          <ConsumableEffect name="Nourishment" disableText /> Food
        </span>
      </div>
      <div className={classNames(classes.gridItem, classes.borderLeft)}>
        {utilityId ? (
          <Item id={utilityId} className={gw2Item} disableText />
        ) : (
          <NoSelection className={gw2Item} />
        )}
        <span className={title}>
          <ConsumableEffect name="Enhancement" disableText />
          Utility
        </span>
      </div>
      {infusionId && (
        <div className={classNames(classes.gridItem, classes.borderLeft)}>
          <Item id={infusionId} className={gw2Item} disableText />
          <span className={title}>Infusion</span>
        </div>
      )}
    </div>
  );
};

export default Consumables;
