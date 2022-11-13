import { Skill } from '@discretize/gw2-ui-new';
import classNames from 'classnames';
import NoSelection from '../../helpers/NoSelection/NoSelection';
import useMediaQuery from '../../helpers/useMediaQuery';
import defaultClasses from '../../styles/defaultStyles.module.css';
import classes from './Skills.module.css';
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
  const { gw2Item, title } = defaultClasses;

  // 600px = sm
  const isMobile = useMediaQuery('(max-width: 600px)');

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
