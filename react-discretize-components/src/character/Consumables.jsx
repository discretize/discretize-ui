import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
import { Item, ConsumableEffect } from '@discretize/gw2-ui-new';
import NoSelection from '../NoSelection';

const useStyles = makeStyles()((theme) => ({
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
  title: {
    fontSize: '0.8125rem',
  },
  borderLeft: {
    borderLeft: '1px solid #1e2124',
  },
  gw2Item: {
    fontSize: '60px',
    lineHeight: '0 !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '45px',
    },
  },
}));

const Consumables = ({ foodData, utilityData, infusionData, foodId, utilityId, infusionId }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.gridItem}>
        {foodId || foodData ? (
          <Item data={foodData} id={foodId} className={classes.gw2Item} disableText />
        ) : (
          <NoSelection className={classes.gw2Item} />
        )}
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          <ConsumableEffect name="Nourishment" disableText /> Food
        </Typography>
      </Box>
      <Box className={classNames(classes.gridItem, classes.borderLeft)}>
        {utilityData || utilityId ? (
          <Item data={utilityData} id={utilityId} className={classes.gw2Item} disableText />
        ) : (
          <NoSelection className={classes.gw2Item} />
        )}
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          <ConsumableEffect name="Enhancement" disableText /> Utility
        </Typography>
      </Box>
      {(infusionData || infusionId) && (
        <Box className={classNames(classes.gridItem, classes.borderLeft)}>
          <Item data={infusionData} id={infusionId} className={classes.gw2Item} disableText />
          <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
            Infusion
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Consumables;
