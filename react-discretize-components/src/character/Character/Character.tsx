import classNames from 'classnames';
import React, { CSSProperties, ReactNode } from 'react';
import HelperIcon from '../../helpers/HelperIcon/HelperIcon';
import OwnSwitch from '../../helpers/Switch/Switch';
import Armor, { ArmorProps } from '../Armor/Armor';
import AssumedBuffs, { AssumedBuffsProps } from '../AssumedBuffs/AssumedBuffs';
import Attributes, { AttributesProps } from '../Attributes/Attributes';
import BackAndTrinkets, {
  BackAndTrinketsProps,
} from '../BackAndTrinkets/BackAndTrinkets';
import Consumables, { ConsumablesProps } from '../Consumables/Consumables';
import Legends, { LegendsProps } from '../Legends/Legends';
import Skills, { SkillsProps } from '../Skills/Skills';
import Weapons, { WeaponsProps } from '../Weapons/Weapons';
import classes from './Character.module.css';

export interface CharacterProps {
  attributes: AttributesProps;
  assumedBuffs: AssumedBuffsProps;
  armor: ArmorProps;
  weapon: WeaponsProps;
  skills?: SkillsProps;
  legends?: LegendsProps;
  backAndTrinket: BackAndTrinketsProps;
  consumables: ConsumablesProps;
  imageElement?: JSX.Element;
  switchElement?: ({
    onChange,
    label,
  }: {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
  }) => JSX.Element;
  disableSwitch?: boolean;
}
const Character = ({
  attributes,
  assumedBuffs,
  armor,
  weapon,
  skills,
  legends,
  backAndTrinket,
  consumables,
  imageElement,
  switchElement: Switch = OwnSwitch,
  disableSwitch = false,
}: CharacterProps) => {
  const [showInfusions, setShowInfusions] = React.useState(false);

  const Section = ({
    children,
    style,
    className,
  }: {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
  }) => (
    <div className={classNames(className, classes.section)} style={style}>
      {children}
    </div>
  );
  return (
    <>
      <div className={classes.top}>
        <div>
          {!disableSwitch && (
            <Switch
              onChange={(e) => setShowInfusions(e.target.checked)}
              label="Show Infusions"
            />
          )}
        </div>

        {assumedBuffs && (
          <div className={classes.assumedBuffs}>
            <HelperIcon text="Assumed buffs for this build" />
            <AssumedBuffs {...assumedBuffs} />
          </div>
        )}
      </div>
      <div className={classes.wrapper}>
        <div className={classes.side}>
          <Section>
            <Armor {...armor} showInfusions={showInfusions} />
          </Section>

          <Section>
            <Weapons {...weapon} showInfusions={showInfusions} />
          </Section>
        </div>

        <div className={classes.middle}>
          <>{imageElement}</>

          {(skills || legends) && (
            <Section className={classes.skillsLegends}>
              {skills && <Skills {...skills} />}
              {legends && <Legends {...legends} />}
            </Section>
          )}
        </div>

        <div className={classes.side}>
          <Section>
            <Attributes {...attributes} />
          </Section>

          <Section>
            <BackAndTrinkets
              {...backAndTrinket}
              showInfusions={showInfusions}
            />
          </Section>
          <Section>
            <Consumables {...consumables} />
          </Section>
        </div>
      </div>
    </>
  );
};

export default Character;
