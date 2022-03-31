/* eslint-disable no-unused-vars */
import { Typography, Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
import { CreateItem, Item } from '@discretize/gw2-ui-new';

const useStyles = makeStyles()((theme) => ({
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: 12,
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
  gw2Item: {
    fontSize: '60px',
    lineHeight: '0 !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '45px',
    },
  },
}));

type ItemUpgrades = React.ComponentProps<typeof Item>['upgrades'];

function createUpgrades(array: (number | undefined)[]): ItemUpgrades {
  return array.filter((elem) => typeof elem === 'number') as number[];
}

type Affix = React.ComponentProps<typeof Item>['stat'];

interface BackAndTrinketsProps {
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
          className={classes.gw2Item}
        />
      ) : (
        // TODO this will not work very well atm because there are no default icons in CreateItem. Therefore, CreateItem would create all the data except for the icon... which is pointless for this component that only requires the icon and the tooltip.
        <CreateItem
          stat={affix || ''}
          type={type}
          upgrades={createUpgrades(upgrades || [])}
          className={classes.gw2Item}
        />
      )}
    </>
  );

  return (
    <Box
      display="grid"
      sx={{ gridTemplateColumns: 'repeat(3,1fr)', margin: '-12px' }}
    >
      <Box className={classNames(classes.gridItem, classes.borderBottom)}>
        <Typography
          variant="subtitle1"
          className={classes.title}
          component="span"
          gutterBottom
        >
          {backItemAffix}
        </Typography>
        <BATItem
          id={backItemId}
          affix={backItemAffix}
          upgrades={[backItemInfusion1Id, backItemInfusion2Id]}
          type="Back Item"
        />
      </Box>

      <Box
        className={classNames(
          classes.gridItem,
          classes.borderLeft,
          classes.borderBottom,
        )}
      >
        <Typography
          variant="subtitle1"
          className={classes.title}
          component="span"
          gutterBottom
        >
          {accessory1Affix}
        </Typography>
        <BATItem
          id={accessory1Id}
          affix={accessory1Affix}
          upgrades={[accessory1InfusionId]}
          type="Accessory"
        />
      </Box>

      <Box className={classNames(classes.gridItem, classes.borderBottom)}>
        <Typography
          variant="subtitle1"
          className={classes.title}
          component="span"
          gutterBottom
        >
          {accessory2Affix}
        </Typography>

        <BATItem
          id={accessory2Id}
          affix={accessory2Affix}
          upgrades={[accessory2InfusionId]}
          type="Accessory"
        />
      </Box>

      <Box className={classes.gridItem}>
        <BATItem id={amuletId} affix={amuletAffix} type="Amulet" />
        <Typography
          variant="subtitle1"
          className={classes.title}
          component="span"
          gutterBottom
        >
          {amuletAffix}
        </Typography>
      </Box>

      <Box className={classNames(classes.gridItem, classes.borderLeft)}>
        <BATItem
          id={ring1Id}
          affix={ring1Affix}
          upgrades={[ring1Infusion1Id, ring1Infusion2Id, ring1Infusion3Id]}
          type="Ring"
        />
        <Typography
          variant="subtitle1"
          className={classes.title}
          component="span"
          gutterBottom
        >
          {ring1Affix}
        </Typography>
      </Box>

      <Box className={classes.gridItem}>
        <BATItem
          id={ring2Id}
          affix={ring2Affix}
          upgrades={[ring2Infusion1Id, ring2Infusion2Id, ring2Infusion3Id]}
          type="Ring"
        />
        <Typography
          variant="subtitle1"
          className={classes.title}
          component="span"
          gutterBottom
        >
          {ring2Affix}
        </Typography>
      </Box>
    </Box>
  );
};

export default BackAndTrinkets;
