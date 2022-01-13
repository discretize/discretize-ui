import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Icon } from 'gw2-ui-components-bulk';
import { Skill } from 'gw2-ui-bulk';

const useStyles = makeStyles()((theme) => ({
  legends: {
    padding: theme.spacing(1),
  },
  gw2Item: {
    fontSize: '60px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '45px',
    },
    lineHeight: '1 !important',
  },
}));

const Legends = ({ legend1Id, legend2Id }) => {
  const { classes } = useStyles();
  return (
    <>
      {legend1Id && legend2Id && (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item className={classes.legends}>
            <Skill id={legend1Id} disableText className={classes.gw2item} />
          </Grid>
          <Icon name="WeaponSwap" style={{ verticalAlign: 'text-bottom' }} />
          <Grid item className={classes.legends}>
            <Skill id={legend2Id} disableText className={classes.gw2item} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Legends;
