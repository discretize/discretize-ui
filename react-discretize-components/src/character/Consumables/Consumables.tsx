import { ConsumableEffect, Item } from '@discretize/gw2-ui-new';
import classNames from 'classnames';
import NoSelection from '../../helpers/NoSelection/NoSelection';
import defaultClasses from '../../styles/defaultStyles.module.css';
import classes from './Consumables.module.css';
export interface ConsumablesProps {
  foodId?: number;
  utilityId?: number;
  infusionId?: number;
  relicId?: number;
}

const Consumables = ({
  foodId,
  utilityId,
  infusionId,
  relicId,
}: ConsumablesProps) => {
  const { gw2Item, title } = defaultClasses;

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

      {relicId && (
        <div className={classNames(classes.gridItem, classes.borderLeft)}>
          <Item id={relicId} className={gw2Item} disableText />
          <span className={title}>Relic</span>
        </div>
      )}
    </div>
  );
};

export default Consumables;
