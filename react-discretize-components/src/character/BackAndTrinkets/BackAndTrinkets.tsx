import { CreateItem, Item } from '@discretize/gw2-ui-new';
import classNames from 'classnames';
import { makeStyles } from 'tss-react/mui';
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
  infusions: {
    fontSize: '0.6rem',
    color: 'rgb(153 153 153)',
  },
  upperRowItem: {
    alignSelf: 'end',
  },
}));

type ItemUpgrades = React.ComponentProps<typeof Item>['upgrades'];

function createUpgrades(array: (number | undefined)[]): ItemUpgrades {
  return array.filter((elem) => typeof elem === 'number') as number[];
}

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
  const { gw2Item, title } = defaultStyles.classes;

  const BATItem = ({
    id,
    affix,
    upgrades,
    type,
  }: {
    id?: number;
    affix?: Affix;
    upgrades?: (number | undefined)[];
    type: string;
  }) => (
    <>
      {id ? (
        <Item
          id={id}
          stat={affix}
          upgrades={createUpgrades(upgrades || [])}
          disableText
          className={gw2Item}
        />
      ) : (
        // TODO this will not work very well atm because there are no default icons in CreateItem. Therefore, CreateItem would create all the data except for the icon... which is pointless for this component that only requires the icon and the tooltip.
        <CreateItem
          stat={affix || ''}
          type={type}
          upgrades={createUpgrades(upgrades || [])}
          className={gw2Item}
        />
      )}
    </>
  );

  const Infusions = ({
    infusionIds,
  }: {
    infusionIds: (number | undefined)[];
  }) => {
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
        <BATItem
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
        <BATItem
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
        <BATItem
          id={accessory2Id}
          affix={accessory2Affix}
          upgrades={[accessory2InfusionId]}
          type="Accessory"
        />
      </div>

      <div className={classes.gridItem}>
        <BATItem id={amuletId} affix={amuletAffix} type="Amulet" />
        <span className={title}>{amuletAffix}</span>
      </div>

      <div className={classNames(classes.gridItem, classes.borderLeft)}>
        <BATItem
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
        <BATItem
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
