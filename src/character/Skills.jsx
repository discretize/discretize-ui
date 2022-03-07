import { Skill } from '@discretize/gw2-ui-new';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import classNames from 'classnames';
import { makeStyles } from 'tss-react/mui';
import iconSizes from '../helpers/iconSizes';
import NoSelection from '../NoSelection';

const useStyles = makeStyles()((theme) => ({
  grid: {
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    '&:not(:last-child)': {
      paddingRight: theme.spacing(0.5),
    },
    '&:not(:first-child)': {
      paddingLeft: theme.spacing(0.5),
    },
  },
  title: {
    fontSize: '0.8125rem',
  },
  borderLeft: {
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
  skillDesktop: {
    fontSize: iconSizes.big,
  },
  skillMobile: {
    fontSize: iconSizes.large,
  },
}));

const Skills = ({
  healData,
  utility1Data,
  utility2Data,
  utility3Data,
  eliteData,
  healId,
  utility1Id,
  utility2Id,
  utility3Id,
  eliteId,
  className,
}) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const iconSize = isMobile ? 'large' : 'big';

  const classNameSkill = isMobile ? classes.skillMobile : classes.skillDesktop;

  return (
    <Grid container className={classNames(className, classes.grid)}>
      <Grid item className={classes.gridItem}>
        <div className={classes.utilities}>
          {healId ? (
            <Skill data={healData} id={healId} className={classNameSkill} disableText />
          ) : (
            <NoSelection size="big" />
          )}
        </div>
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          Heal
        </Typography>
      </Grid>

      <Grid item className={classNames(classes.gridItem, classes.borderLeft)}>
        <div>
          {utility1Id ? (
            <Skill data={utility1Data} id={utility1Id} className={classNameSkill} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
          {utility2Id ? (
            <Skill data={utility2Data} id={utility2Id} className={classNameSkill} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
          {utility3Id ? (
            <Skill data={utility3Data} id={utility3Id} className={classNameSkill} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
        </div>
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          Utilities
        </Typography>
      </Grid>

      <Grid item className={classNames(classes.gridItem, classes.borderLeft)}>
        <div className={classes.utilities}>
          {eliteId ? (
            <Skill data={eliteData} id={eliteId} className={classNameSkill} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
        </div>
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          Elite
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Skills;
