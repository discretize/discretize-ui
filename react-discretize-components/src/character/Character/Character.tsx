import { FormControlLabel, Switch } from '@mui/material';
import classNames from 'classnames';
import React, { CSSProperties, ReactElement, ReactNode } from 'react';
import { makeStyles } from 'tss-react/mui';
import HelperIcon from '../../helpers/HelperIcon/HelperIcon';
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

const useStyles = makeStyles()((theme) => ({
  top: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  section: {
    backgroundColor: 'rgb(38, 41, 46)',
    padding: theme.spacing(2),
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    borderRadius: 0,
    boxShadow:
      '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
  },
  assumedBuffs: { display: 'flex', alignItems: 'end' },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  side: {
    display: 'flex',
    flex: '0 0 250px',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  middle: {
    display: 'flex',
    flex: '0.7 0.2 300px',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  skillsLegends: {
    maxWidth: 390,
    [theme.breakpoints.up('md')]: {
      alignSelf: 'center',
    },
  },
}));

export interface CharacterProps {
  attributes: AttributesProps;
  assumedBuffs: AssumedBuffsProps;
  armor: ArmorProps;
  weapon: WeaponsProps;
  skills?: SkillsProps;
  legends?: LegendsProps;
  backAndTrinket: BackAndTrinketsProps;
  consumables: ConsumablesProps;
  imageElement?: ReactElement;
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
}: CharacterProps) => {
  const { classes } = useStyles();

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
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              value={showInfusions}
              onChange={(e) => setShowInfusions(e.target.checked)}
            />
          }
          label="Show Infusions"
        />

        {assumedBuffs && (
          <div className={classes.assumedBuffs}>
            <HelperIcon size="small" text="Assumed buffs for this build" />
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
          {imageElement}

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
