import { Item } from '@discretize/gw2-ui-new';
import classNames from 'classnames';
import { makeStyles } from 'tss-react/mui';
import DynamicItem from '../../helpers/DynamicItem/DynamicItem';
import { useDefaultStyles } from '../../styles/defaultStyles';
import { formatInfusion } from '../Armor/Armor';

const useStyles = makeStyles()(() => ({
  root: {
    gridTemplateColumns: 'repeat(3,1fr)',
    margin: '-12px',
    display: 'grid',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: 12,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: '0.8125rem',
  },
  borderLeft: {
    borderLeft: '1px solid #1e2124',
  },
  borderBottom: {
    borderBottom: '1px solid #1e2124',
  },
  upperRowItem: {
    alignSelf: 'end',
  },
}));

export const Infusions = ({
  infusionIds,
}: {
  infusionIds: (number | undefined)[];
}) => {
  const { classes } = useDefaultStyles();
  const occurrences = (infusionIds.filter((id) => !!id) as number[]).reduce(
    (acc: Record<number, number>, curr) => {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    },
    {},
  );
  return (
    <div className={classes.infusions}>
      {Object.entries(occurrences).map(([id, amount], index) => (
        <>
          {index !== 0 && <br />}
          {amount}x <Item id={Number(id)} text={formatInfusion} />
        </>
      ))}
    </div>
  );
};

type Affix = React.ComponentProps<typeof Item>['stat'];

export interface BackAndTrinketsProps {
  showInfusions?: boolean;
  backItemId?: number;
  backItemInfusion1Id?: number;
  backItemInfusion2Id?: number;
  backItemAffix?: Affix;
  accessory1Id?: number;
  accessory1InfusionId?: number;
  accessory1Affix?: Affix;
  accessory2Id?: number;
  accessory2InfusionId?: number;
  accessory2Affix?: Affix;
  amuletId?: number;
  amuletAffix?: Affix;
  ring1Id?: number;
  ring1Infusion1Id?: number;
  ring1Infusion2Id?: number;
  ring1Infusion3Id?: number;
  ring1Affix?: Affix;
  ring2Id?: number;
  ring2Infusion1Id?: number;
  ring2Infusion2Id?: number;
  ring2Infusion3Id?: number;
  ring2Affix?: Affix;
}

const BackAndTrinkets = ({
  showInfusions,
  backItemId,
  backItemInfusion1Id,
  backItemInfusion2Id,
  backItemAffix,
  accessory1Id,
  accessory1InfusionId,
  accessory1Affix,
  accessory2Id,
  accessory2InfusionId,
  accessory2Affix,
  amuletId,
  amuletAffix,
  ring1Id,
  ring1Infusion1Id,
  ring1Infusion2Id,
  ring1Infusion3Id,
  ring1Affix,
  ring2Id,
  ring2Infusion1Id,
  ring2Infusion2Id,
  ring2Infusion3Id,
  ring2Affix,
}: BackAndTrinketsProps) => {
  const { classes } = useStyles();
  const defaultStyles = useDefaultStyles();
  const { title } = defaultStyles.classes;

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
          upgrades={[accessory2InfusionId]}
          type="Accessory"
        />
      </div>

      <div className={classes.gridItem}>
        <DynamicItem id={amuletId} affix={amuletAffix} type="Amulet" />
        <span className={title}>{amuletAffix}</span>
      </div>

      <div className={classNames(classes.gridItem, classes.borderLeft)}>
        <DynamicItem
          id={ring1Id}
          affix={ring1Affix}
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
