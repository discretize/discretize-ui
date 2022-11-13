import { Icon, Skill } from '@discretize/gw2-ui-new';
import useMediaQuery from '../../helpers/useMediaQuery';
import classNames from 'classnames';
import classes from './Legends.module.css';

export interface LegendsProps {
  legend1Id: number;
  legend2Id: number;
  className?: string;
}

const Legends = ({ legend1Id, legend2Id, className }: LegendsProps) => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const classNameSkill = isMobile ? classes.skillMobile : classes.skillDesktop;

  return (
    <>
      {legend1Id && legend2Id && (
        <div className={classNames(className, classes.grid)}>
          <div className={classes.gridItem}>
            <Skill id={legend1Id} disableText className={classNameSkill} />
          </div>
          <Icon name="WeaponSwap" />
          <div className={classes.gridItem}>
            <Skill id={legend2Id} disableText className={classNameSkill} />
          </div>
        </div>
      )}
    </>
  );
};

export default Legends;
