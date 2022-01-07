import { Grid, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
import { ConsumableEffect } from 'gw2-ui-components-bulk';
import { Item } from 'gw2-ui-bulk';

const useStyles = makeStyles()((theme) => ({
  grid: {
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
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
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={4} className={classes.gridItem}>
        <Item data={foodData} id={foodId} className={classes.gw2Item} disableText />
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          <ConsumableEffect name="Nourishment" disableText /> Food
        </Typography>
      </Grid>
      <Grid item xs={4} className={classNames(classes.gridItem, classes.borderLeft)}>
        <Item data={utilityData} id={utilityId} className={classes.gw2Item} disableText />
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          <ConsumableEffect name="Enhancement" disableText /> Utility
        </Typography>
      </Grid>
      {(infusionData || infusionId) && (
        <Grid item xs={4} className={classNames(classes.gridItem, classes.borderLeft)}>
          <Item data={infusionData} id={infusionId} className={classes.gw2Item} disableText />
          <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
            Infusion
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Consumables;
