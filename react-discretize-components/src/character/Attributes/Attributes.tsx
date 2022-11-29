import { Attribute, Profession } from '@discretize/gw2-ui-new';
import firstUppercase from '../../helpers/firstUppercase';
import classes from './Attributes.module.css';

const roundOne = (num: number) => Math.round(num * 10) / 10;
const roundTwo = (num: number) => Math.round(num * 100) / 100;

const attributes: {
  name: AttributeType;
  text?: (value?: number) => string;
}[] = [
  { name: 'Power' },
  { name: 'Toughness' },
  { name: 'Vitality' },
  { name: 'Precision' },
  { name: 'Ferocity' },
  { name: 'Condition Damage' },
  { name: 'Expertise' },
  { name: 'Concentration' },
  { name: 'Agony Resistance' },
  { name: 'Armor' },
  { name: 'Health' },
  {
    name: 'Critical Chance',
    text: (value?: number) => `${roundTwo((value || 0) * 100)}%`,
  },
  {
    name: 'Critical Damage',
    text: (value?: number) => `${roundOne((value || 0) * 100)}%`,
  },
  { name: 'Healing Power' },
  {
    name: 'Condition Duration',
    text: (value?: number) => `${roundTwo((value || 0) * 100)}%`,
  },
  {
    name: 'Boon Duration',
    text: (value?: number) => `${roundTwo((value || 0) * 100)}%`,
  },
  { name: 'Magic Find', text: () => '0' },
];

type AttributeType = React.ComponentProps<typeof Attribute>['name'];

export interface AttributesProps {
  profession: React.ComponentProps<typeof Profession>['name'];
  specialization: React.ComponentProps<typeof Profession>['name'];
  data: Partial<Record<AttributeType, number>>; // TODO technically this type is Record<Omit<AttributeType, "Gold Find" | "Karma Gain" | "Magic Find" | "XP Gain">, number>
}

const Attributes = ({ profession, data }: AttributesProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.half}>
        <ul className={classes.list}>
          {attributes.slice(0, 9).map(({ name }) => (
            <li key={name} className={classes.gridItem}>
              <Attribute
                name={name}
                text={`${data[name]}`}
                className={classes.gw2Item}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.half}>
        <ul className={classes.list}>
          <li className={classes.gridItem}>
            <Profession
              name={firstUppercase(profession)}
              text="0"
              className={classes.gw2Item}
            />
          </li>
          {attributes.slice(9).map(({ name, text }) => (
            <li key={name} className={classes.gridItem}>
              <Attribute
                name={name}
                text={text ? text(data[name]) : `${data[name]}`}
                className={classes.gw2Item}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Attributes;
