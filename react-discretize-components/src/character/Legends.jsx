import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Icon, Skill } from '@discretize/gw2-ui-new';
import iconSizes from '../helpers/iconSizes';

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
  skillDesktop: {
    fontSize: iconSizes.big,
  },
  skillMobile: {
    fontSize: iconSizes.large,
  },
}));

const Legends = ({ legend1Id, legend2Id, className }) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const classNameSkill = isMobile ? classes.skillMobile : classes.skillDesktop;

  return (
    <>
      {legend1Id && legend2Id && (
        <Grid container justifyContent="center" alignItems="center" className={className}>
          <Grid item className={classes.legends}>
            <Skill id={legend1Id} disableText className={classNameSkill} />
          </Grid>
          <Icon name="WeaponSwap" style={{ verticalAlign: 'text-bottom' }} />
          <Grid item className={classes.legends}>
            <Skill id={legend2Id} disableText className={classNameSkill} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Legends;
