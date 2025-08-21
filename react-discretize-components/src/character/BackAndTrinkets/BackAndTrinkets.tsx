import { Item } from '@discretize/gw2-ui-new';
import classNames from 'classnames';
import { Fragment } from 'react';
import DynamicItem from '../../helpers/DynamicItem/DynamicItem';
import defaultClasses from '../../styles/defaultStyles.module.css';
import { formatInfusion } from '../Armor/Armor';
import classes from './BackAndTrinkets.module.css';

export const Infusions = ({
  infusionIds,
}: {
  infusionIds: (number | undefined)[];
}) => {
  const occurrences = (infusionIds.filter((id) => !!id) as number[]).reduce(
    (acc: Record<number, number>, curr) => {
      return (acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc);
    },
    {},
  );
  return (
    <div className={defaultClasses.infusions}>
      {Object.entries(occurrences).map(([id, amount], index) => (
        <Fragment key={`${id}-${amount}-${index}`}>
          {index !== 0 && <br />}
          {amount}x <Item id={Number(id)} text={formatInfusion} />
        </Fragment>
      ))}
    </div>
  );
};

type Affix = React.ComponentProps<typeof Item>['stat'];
type Rarity = React.ComponentProps<typeof DynamicItem>['rarity'];

export interface BackAndTrinketsProps {
  showInfusions?: boolean;
  backItemId?: number;
  backItemInfusion1Id?: number;
  backItemInfusion2Id?: number;
  backItemAffix?: Affix;
  backItemRarity?: Rarity;
  accessory1Id?: number;
  accessory1InfusionId?: number;
  accessory1Affix?: Affix;
  accessory1Rarity?: Rarity;
  accessory2Id?: number;
  accessory2InfusionId?: number;
  accessory2Affix?: Affix;
  accessory2Rarity?: Rarity;
  amuletId?: number;
  amuletAffix?: Affix;
  amuletRarity?: Rarity;
  ring1Id?: number;
  ring1Infusion1Id?: number;
  ring1Infusion2Id?: number;
  ring1Infusion3Id?: number;
  ring1Affix?: Affix;
  ring1Rarity?: Rarity;
  ring2Id?: number;
  ring2Infusion1Id?: number;
  ring2Infusion2Id?: number;
  ring2Infusion3Id?: number;
  ring2Affix?: Affix;
  ring2Rarity?: Rarity;
}

const BackAndTrinkets = ({
  showInfusions,
  backItemId,
  backItemInfusion1Id,
  backItemInfusion2Id,
  backItemAffix,
  backItemRarity,
  accessory1Id,
  accessory1InfusionId,
  accessory1Affix,
  accessory1Rarity,
  accessory2Id,
  accessory2InfusionId,
  accessory2Affix,
  accessory2Rarity,
  amuletId,
  amuletAffix,
  amuletRarity,
  ring1Id,
  ring1Infusion1Id,
  ring1Infusion2Id,
  ring1Infusion3Id,
  ring1Affix,
  ring1Rarity,
  ring2Id,
  ring2Infusion1Id,
  ring2Infusion2Id,
  ring2Infusion3Id,
  ring2Affix,
  ring2Rarity,
}: BackAndTrinketsProps) => {
  const { title } = defaultClasses;

  return (
    <div className={classes.root}>
      <div
        className={classNames(
          classes.gridItem,
          classes.borderBottom,
          classes.upperRowItem,
        )}
      >
        {showInfusions && (
          <Infusions infusionIds={[backItemInfusion1Id, backItemInfusion2Id]} />
        )}
        <span className={title}>{backItemAffix}</span>
        <DynamicItem
          id={backItemId}
          affix={backItemAffix}
          rarity={backItemRarity}
          upgrades={[backItemInfusion1Id, backItemInfusion2Id]}
          type="Back Item"
        />
      </div>

      <div
        className={classNames(
          classes.gridItem,
          classes.borderLeft,
          classes.borderBottom,
          classes.upperRowItem,
        )}
      >
        {showInfusions && <Infusions infusionIds={[accessory1InfusionId]} />}
        <span className={title}>{accessory1Affix}</span>
        <DynamicItem
          id={accessory1Id}
          affix={accessory1Affix}
          rarity={accessory1Rarity}
          upgrades={[accessory1InfusionId]}
          type="Accessory"
        />
      </div>

      <div
        className={classNames(
          classes.gridItem,
          classes.borderBottom,
          classes.upperRowItem,
        )}
      >
        {showInfusions && <Infusions infusionIds={[accessory2InfusionId]} />}
        <span className={title}>{accessory2Affix}</span>
        <DynamicItem
          id={accessory2Id}
          affix={accessory2Affix}
          rarity={accessory2Rarity}
          upgrades={[accessory2InfusionId]}
          type="Accessory"
        />
      </div>

      <div className={classes.gridItem}>
        <DynamicItem
          id={amuletId}
          affix={amuletAffix}
          rarity={amuletRarity}
          type="Amulet"
        />
        <span className={title}>{amuletAffix}</span>
      </div>

      <div className={classNames(classes.gridItem, classes.borderLeft)}>
        <DynamicItem
          id={ring1Id}
          affix={ring1Affix}
          rarity={ring1Rarity}
          upgrades={[ring1Infusion1Id, ring1Infusion2Id, ring1Infusion3Id]}
          type="Ring"
        />
        <span className={title}>{ring1Affix}</span>
        {showInfusions && (
          <Infusions
            infusionIds={[ring1Infusion1Id, ring1Infusion2Id, ring1Infusion3Id]}
          />
        )}
      </div>

      <div className={classes.gridItem}>
        <DynamicItem
          id={ring2Id}
          affix={ring2Affix}
          rarity={ring2Rarity}
          upgrades={[ring2Infusion1Id, ring2Infusion2Id, ring2Infusion3Id]}
          type="Ring"
        />
        <span className={title}>{ring2Affix}</span>
        {showInfusions && (
          <Infusions
            infusionIds={[ring2Infusion1Id, ring2Infusion2Id, ring2Infusion3Id]}
          />
        )}
      </div>
    </div>
  );
};

export default BackAndTrinkets;
