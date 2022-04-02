import { Skill } from '@discretize/gw2-ui-new';
import { useMediaQuery, useTheme } from '@mui/material';
import classNames from 'classnames';
import { makeStyles } from 'tss-react/mui';
import NoSelection from '../../helpers/NoSelection';
import { useDefaultStyles } from '../../styles/defaultStyles';

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
  borderLeft: {
    borderLeft: `1px solid ${theme.palette.divider}`,
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
  const defaultStyles = useDefaultStyles();

  const { gw2Item, title } = defaultStyles.classes;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const iconSize = isMobile ? 'large' : 'big';

  return (
    <div className={classNames(className, classes.grid)}>
      <div className={classes.gridItem}>
        {healId ? (
          <Skill id={healId} className={gw2Item} disableText />
        ) : (
          <NoSelection size="big" />
        )}
        <span className={title}>Heal</span>
      </div>

      <div className={classNames(classes.gridItem, classes.borderLeft)}>
        <div>
          {utility1Id ? (
            <Skill id={utility1Id} className={gw2Item} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
          {utility2Id ? (
            <Skill id={utility2Id} className={gw2Item} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
          {utility3Id ? (
            <Skill id={utility3Id} className={gw2Item} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
        </div>
        <span className={title}>Utilities</span>
      </div>

      <div className={classNames(classes.gridItem, classes.borderLeft)}>
        <div>
          {eliteId ? (
            <Skill id={eliteId} className={gw2Item} disableText />
          ) : (
            <NoSelection size={iconSize} />
          )}
        </div>
        <span className={title}>Elite</span>
      </div>
    </div>
  );
};

export default Skills;
