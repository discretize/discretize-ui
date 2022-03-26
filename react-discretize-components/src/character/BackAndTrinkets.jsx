/* eslint-disable no-unused-vars */
import { Typography, Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
import { Item } from '@discretize/gw2-ui-new';

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

const BackAndTrinkets = ({
  backItemData,
  backItemId,
  backItemStatsId,
  backItemInfusion1Id,
  backItemInfusion2Id,
  backItemAffix,
  accessory1Data,
  accessory1Id,
  accessory1StatsId,
  accessory1InfusionId,
  accessory1Affix,
  accessory2Data,
  accessory2Id,
  accessory2StatsId,
  accessory2InfusionId,
  accessory2Affix,
  amuletData,
  amuletId,
  amuletStatsId,
  amuletAffix,
  ring1Data,
  ring1Id,
  ring1StatsId,
  ring1Infusion1Id,
  ring1Infusion2Id,
  ring1Infusion3Id,
  ring1Affix,
  ring2Data,
  ring2Id,
  ring2StatsId,
  ring2Infusion1Id,
  ring2Infusion2Id,
  ring2Infusion3Id,
  ring2Affix,
}) => {
  const { classes } = useStyles();

  return (
    <Box display="grid" sx={{ gridTemplateColumns: 'repeat(3,1fr)', margin: '-12px' }}>
      <Box className={classNames(classes.gridItem, classes.borderBottom)}>
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {backItemAffix}
        </Typography>
        <Item
          data={backItemData}
          id={backItemId}
          stat={backItemAffix}
          type="Back Item"
          //  statsId={backItemStatsId}
          upgrades={[backItemInfusion1Id, backItemInfusion2Id].filter((i) => i !== undefined)}
          disableText
          className={classes.gw2Item}
        />
      </Box>

      <Box className={classNames(classes.gridItem, classes.borderLeft, classes.borderBottom)}>
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {accessory1Affix}
        </Typography>
        <Item
          data={accessory1Data}
          id={accessory1Id}
          stat={accessory1Affix}
          // statsId={accessory1StatsId}
          type="Accessory"
          upgrades={[accessory1InfusionId].filter((i) => i !== undefined)}
          disableText
          className={classes.gw2Item}
        />
      </Box>

      <Box className={classNames(classes.gridItem, classes.borderBottom)}>
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {accessory2Affix}
        </Typography>
        <Item
          data={accessory2Data}
          id={accessory2Id}
          stat={accessory2Affix}
          // statsId={accessory2StatsId}
          type="Accessory"
          upgrades={[accessory2InfusionId].filter((i) => i !== undefined)}
          disableText
          className={classes.gw2Item}
        />
      </Box>

      <Box className={classes.gridItem}>
        <Item
          data={amuletData}
          id={amuletId}
          stat={amuletAffix}
          // statsId={amuletStatsId}
          type="Amulet"
          disableText
          className={classes.gw2Item}
        />
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {amuletAffix}
        </Typography>
      </Box>

      <Box className={classNames(classes.gridItem, classes.borderLeft)}>
        <Item
          data={ring1Data}
          id={ring1Id}
          stat={ring1Affix}
          // statsId={ring1StatsId}
          upgrades={[ring1Infusion1Id, ring1Infusion2Id, ring1Infusion3Id].filter(
            (i) => i !== undefined,
          )}
          type="Ring"
          disableText
          className={classes.gw2Item}
        />
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {ring1Affix}
        </Typography>
      </Box>

      <Box className={classes.gridItem}>
        <Item
          data={ring2Data}
          id={ring2Id}
          stat={ring2Affix}
          // statsId={ring2StatsId}
          upgrades={[ring2Infusion1Id, ring2Infusion2Id, ring2Infusion3Id].filter(
            (i) => i !== undefined,
          )}
          type="Ring"
          disableText
          className={classes.gw2Item}
        />
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          {ring2Affix}
        </Typography>
      </Box>
    </Box>
  );
};

export default BackAndTrinkets;
