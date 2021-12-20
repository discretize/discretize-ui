import { Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import classNames from 'classnames';
import NoSelection from '../NoSelection';
import Skill from '../Skill';

const useStyles = makeStyles((theme) => ({
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
  utilities: {},
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
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const iconSize = isMobile ? 'large' : 'big';

  return (
    <Grid container className={classes.grid}>
      <Grid item className={classes.gridItem}>
        <div className={classes.utilities}>
          {healId ? (
            <Skill data={healData} id={healId} size={iconSize} disableText />
          ) : (
            <NoSelection size="big" />
          )}
        </div>
        <Typography variant="subtitle1" className={classes.title} component="span" gutterBottom>
          Heal
        </Typography>
      </Grid>

      <Grid item className={classNames(classes.gridItem, classes.borderLeft)}>
        <div className={classes.utilities}>
          {utility1Id ? (
            <Skill data={utility1Data} id={utility1Id} size={iconSize} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
          {utility2Id ? (
            <Skill data={utility2Data} id={utility2Id} size={iconSize} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
          {utility3Id ? (
            <Skill data={utility3Data} id={utility3Id} size={iconSize} disableText />
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
            <Skill data={eliteData} id={eliteId} size={iconSize} disableText />
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
