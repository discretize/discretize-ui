import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Icon } from 'gw2-ui-new';
import Skill from '../Skill';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const iconSize = isMobile ? 'large' : 'big';

  return (
    <>
      {legend1Id && legend2Id && (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item className={classes.legends}>
            <Skill id={legend1Id} disableText size={iconSize} />
          </Grid>
          <Icon name="WeaponSwap" style={{ verticalAlign: 'text-bottom' }} />
          <Grid item className={classes.legends}>
            <Skill id={legend2Id} disableText size={iconSize} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Legends;
