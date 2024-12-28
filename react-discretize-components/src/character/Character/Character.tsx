import classNames from 'classnames';
import React, { type CSSProperties, type JSX, type ReactNode } from 'react';
import HelperIcon from '../../helpers/HelperIcon/HelperIcon';
import OwnSwitch from '../../helpers/Switch/Switch';
import Armor, { type ArmorProps } from '../Armor/Armor';
import AssumedBuffs, {
  type AssumedBuffsProps,
} from '../AssumedBuffs/AssumedBuffs';
import Attributes, { type AttributesProps } from '../Attributes/Attributes';
import BackAndTrinkets, {
  type BackAndTrinketsProps,
} from '../BackAndTrinkets/BackAndTrinkets';
import Consumables, { type ConsumablesProps } from '../Consumables/Consumables';
import Legends, { type LegendsProps } from '../Legends/Legends';
import Skills, { type SkillsProps } from '../Skills/Skills';
import Weapons, { type WeaponsProps } from '../Weapons/Weapons';
import classes from './Character.module.css';

export interface CharacterProps {
  attributes: AttributesProps;
  unbuffedAttributes?: AttributesProps & { info?: string };
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
  unbuffedAttributes,
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
  const [showUnbuffed, setShowUnbuffed] = React.useState(false);

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
        <div className={classes.switches}>
          {!disableSwitch && (
            <Switch
              onChange={(e) => setShowInfusions(e.target.checked)}
              label="Show Infusions"
            />
          )}
          {unbuffedAttributes && (
            <Switch
              onChange={(e) => setShowUnbuffed(e.target.checked)}
              label="Simulate Unbuffed"
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
            <Attributes
              {...((showUnbuffed && unbuffedAttributes) || attributes)}
            />
            {showUnbuffed && unbuffedAttributes && unbuffedAttributes.info && (
              <div className={classes.unbuffedInfo}>
                <HelperIcon text={unbuffedAttributes.info} />
              </div>
            )}
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
