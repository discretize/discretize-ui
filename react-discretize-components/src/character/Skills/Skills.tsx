import { Skill } from '@discretize/gw2-ui-new';
import { useMediaQuery, useTheme } from '@mui/material';
import classNames from 'classnames';
import { makeStyles } from 'tss-react/mui';
import iconSizes from '../../helpers/iconSizes';
import NoSelection from '../../helpers/NoSelection';

const useStyles = makeStyles()((theme) => ({
  grid: {
    display: 'flex',
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
    fontWeight: 400,
    fontFamily: 'Muli',
    marginTop: '-10px',
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

export interface SkillsProps {
  healId?: number;
  utility1Id?: number;
  utility2Id?: number;
  utility3Id?: number;
  eliteId?: number;
  className?: string;
}

const Skills = ({
  healId,
  utility1Id,
  utility2Id,
  utility3Id,
  eliteId,
  className,
}: SkillsProps) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const iconSize = isMobile ? 'large' : 'big';

  const classNameSkill = isMobile ? classes.skillMobile : classes.skillDesktop;

  return (
    <div className={classNames(className, classes.grid)}>
      <div className={classes.gridItem}>
        {healId ? (
          <Skill id={healId} className={classNameSkill} disableText />
        ) : (
          <NoSelection size="big" />
        )}
        <span className={classes.title}>Heal</span>
      </div>

      <div className={classNames(classes.gridItem, classes.borderLeft)}>
        <div>
          {utility1Id ? (
            <Skill id={utility1Id} className={classNameSkill} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
          {utility2Id ? (
            <Skill id={utility2Id} className={classNameSkill} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
          {utility3Id ? (
            <Skill id={utility3Id} className={classNameSkill} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
        </div>
        <span className={classes.title}>Utilities</span>
      </div>

      <div className={classNames(classes.gridItem, classes.borderLeft)}>
        <div>
          {eliteId ? (
            <Skill id={eliteId} className={classNameSkill} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
        </div>
        <span className={classes.title}>Elite</span>
      </div>
    </div>
  );
};

export default Skills;
