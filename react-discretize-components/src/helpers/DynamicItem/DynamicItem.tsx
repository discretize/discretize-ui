import { CreateItem, Item } from '@discretize/gw2-ui-new';
import defaultClasses from '../../styles/defaultStyles.module.css';

type Affix = React.ComponentProps<typeof Item>['stat'];

function createUpgrades(
  array: (number | [number, number] | undefined)[],
): (number | [number, number])[] {
  return (
    array &&
    (array.filter(
      (elem: [number, number] | number | undefined) =>
        typeof elem === 'number' || Array.isArray(elem),
    ) as (number | [number, number])[])
  );
}

const DynamicItem = ({
  id,
  affix,
  upgrades,
  type,
  weight,
  rarity,
}: {
  id?: number;
  affix?: Affix;
  upgrades?: (number | undefined | [number, number])[];
  type?: string;
  weight?: React.ComponentProps<typeof CreateItem>['weight'];
  rarity?: React.ComponentProps<typeof CreateItem>['rarity'];
}) => {
  const sharedProps = {
    disableText: true,
    className: defaultClasses.gw2Item,
    upgrades: upgrades ? createUpgrades(upgrades) : [],
    stat: affix || '',
  };

  return (
    <>
      {id ? (
        <Item id={id} {...sharedProps} />
      ) : (
        <CreateItem
          type={type || ''}
          weight={weight}
          rarity={rarity}
          {...sharedProps}
        />
      )}
    </>
  );
};
export default DynamicItem;
