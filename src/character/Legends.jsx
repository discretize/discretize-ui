import { Grid, makeStyles } from '@material-ui/core';
import { Icon } from 'gw2-ui-components-bulk';
import { Skill } from 'gw2-ui-bulk';

const useStyles = makeStyles((theme) => ({
  legends: {
    padding: theme.spacing(1),
  },
}));

const Legends = ({ legend1Id, legend2Id }) => {
  const classes = useStyles();
  return (
    <>
      {legend1Id && legend2Id && (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item className={classes.legends}>
            <Skill id={legend1Id} disableText size="big" />
          </Grid>
          <Icon name="WeaponSwap" style={{ verticalAlign: 'text-bottom' }} />
          <Grid item className={classes.legends}>
            <Skill id={legend2Id} disableText size="big" />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Legends;
