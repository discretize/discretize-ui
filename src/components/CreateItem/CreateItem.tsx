import clsx from 'clsx';
import capitalize from 'lodash.capitalize';
import { ReactElement } from 'react';
import createItem, { CreateItemProps } from '../../builder/createItem';
import { useItems } from '../../gw2api/hooks';
import GW2ApiItem from '../../gw2api/types/items/item';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import Tooltip from '../Tooltip/Tooltip';
import WikiLink from '../WikiLink/WikiLink';
import ItemDetails from './../Item/ItemDetails';
import css from '../Item/CreateItem.module.css';

export interface ItemProps extends CreateItemProps {
  count?: number;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  upgrades?: (number | [number, number])[]; // ItemId, or [ItemId, amount] for runes
}

const SKILL_ERROR_NAMES = {
  404: 'Item Not Found',
  500: 'Network Error',
};
const SKILL_ERROR_MESSAGES = {
  404: (id: number) => `The requested item with the id ${id} was not found.`,
  500: (id: number) =>
    `A Network Error occured trying to fetch the item ${id}.`,
};

const Item = (props: ItemProps): ReactElement => {
  const {
    count = 1,
    disableIcon,
    disableText,
    disableLink,
    disableTooltip,
    inline,
    upgrades,
    type: typeProps,
    stat: statProps,
    weight: weightProps,
    rarity: rarityProps,
    level: levelProps,
  } = props;

  let ids = [];
  if (upgrades) {
    for (let u of upgrades) {
      if (Array.isArray(u)) {
        ids.push(u[0]);
      } else {
        ids.push(u);
      }
    }
  }
  const items = useItems(ids);

  if (items.loading) {
    return <IconWithText {...props} loading />;
  }
  if (items.errors) {
    let first_error_id = Number(Object.keys(items.errors)[0]);
    return (
      <Error
        {...props}
        id={first_error_id}
        code={items.errors[first_error_id]} // TODO: this may not be the one that errored?
        name={SKILL_ERROR_NAMES}
        message={SKILL_ERROR_MESSAGES}
      />
    );
  }

  let createdData;
  try {
    createdData =
      typeProps || statProps || weightProps
        ? createItem({
            type: typeProps,
            stat: statProps,
            weight: weightProps,
            rarity: rarityProps,
            level: levelProps,
          })
        : undefined;
    if (!createdData) throw 'unspecified error';
  } catch (e) {
    return (
      <Error
        name="Invalid Item"
        message={`An error occured: ${e}`}
        code={404}
      />
    );
  }

  console.log(createdData);

  const {
    name,
    rarity,
    type,
    details: { type: detailsType },
  } = createdData;
  const icon = ''; //TODO add default icons

  let upgradedata: [GW2ApiItem, number][] = [];
  if (upgrades) {
    for (let u of upgrades) {
      let id: number;
      let count: number = 1;
      if (Array.isArray(u)) {
        id = u[0];
        count = u[1];
      } else {
        id = u;
      }
      upgradedata.push([items.data[id], count]);
    }
  }

  return (
    <Tooltip
      content={
        <ItemDetails item={createdData as GW2ApiItem} upgrades={upgradedata} />
      }
      disabled={disableTooltip}
      containerProps={{
        className: clsx(css.container),
      }}
    >
      <IconWithText
        icon={icon}
        text={
          <>
            {count > 1 && `${count} `}
            {disableLink ? (
              name
            ) : (
              <WikiLink
                to={name}
                className={clsx(
                  rarity && css[`colorRarity${capitalize(rarity)}`],
                )}
              />
            )}
          </>
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{
          ...(type &&
            detailsType && {
              name: `${type}.${detailsType}`,
            }),
          applyCount: count,
          applyCountProps: {
            className: css.iconApplyCount,
          },
        }}
        className={rarity && css[`colorRarity${capitalize(rarity)}`]}
      />
    </Tooltip>
  );
};

export default Item;
