import clsx from 'clsx';
import { CSSProperties, ReactElement } from 'react';
import { createItem } from '../../builder';
import { ItemStatName } from '../../builder/itemStatNames';
import { useItems } from '../../gw2api/hooks';
import GW2ApiBackItemDetails from '../../gw2api/types/items/details/backItem';
import GW2ApiArmorDetails from '../../gw2api/types/items/details/armor';
import GW2ApiWeaponDetails from '../../gw2api/types/items/details/weapon';
import GW2ApiItem from '../../gw2api/types/items/item';
import { capitalize } from '../../helpers/capitalize';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import css from './Item.module.css';
import ItemDetails from './ItemDetails';

export interface ItemProps {
  id: number;
  text?: string;
  count?: number;
  stat?: ItemStatName; // Allow explicitlly forcing a certain stat on an item. Many items allow multiple stats and dont provide a "default" one
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
  wikiLinkProps?: WikiLinkProps;
  upgrades?: (number | [number, number])[]; // ItemId, or [ItemId, amount] for runes
  style?: CSSProperties;
  className?: string;
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
    id,
    text,
    count = 1,
    stat: statRaw,
    disableIcon,
    disableText,
    disableLink,
    disableTooltip,
    inline,
    tooltipProps,
    wikiLinkProps,
    upgrades,
    style,
    className,
  } = props;
  const stat = statRaw ? capitalize(statRaw) : undefined;

  if (!id) {
    return (
      <Error
        code={404}
        name="No ID provided"
        message="Missing ID prop in the item component"
      />
    );
  }

  let ids = [id];
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

  let itemdata = items.data[id];
  const { name, icon, rarity } = itemdata;
  // TODO redo the typing for details: the type of the details field depends
  //      on what string is supplied via type (Gw2ApiItemType)

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

  // if there is a stat explicitly requested in the props, we need to augment the existing itemdata to include that stat
  let stattedItemData = itemdata;
  if (
    stat &&
    (itemdata.type === 'Armor' ||
      itemdata.type === 'Weapon' ||
      itemdata.type === 'Back')
  ) {
    // adjust the time due to api inconsistencies: Short Bow <==> Longbow
    let type = itemdata.type === 'Back' ? 'Back Item' : itemdata.details.type;
    if (type === 'LongBow') type = 'Longbow';
    else if (type === 'ShortBow') type = 'Short Bow';

    let createdData;
    try {
      createdData = createItem({
        type,
        stat,
        weight:
          itemdata.type === 'Armor' ? itemdata.details.weight_class : undefined,
      });
    } catch (e) {
      console.error(`Error while loading item with id ${id}!\n ${e}`);
      return (
        <Error
          name="Invalid Item"
          message={`An error occured ${id}: ${e}`}
          code={404}
        />
      );
    }

    const details:
      | GW2ApiArmorDetails
      | GW2ApiWeaponDetails
      | GW2ApiBackItemDetails = {
      ...itemdata.details,
      infix_upgrade: createdData.details.infix_upgrade,
    };

    stattedItemData = {
      ...itemdata,
      // TypeScript does not understand that this must be of the matching type
      details: details as any,
    };
  }

  return (
    <Tooltip
      content={<ItemDetails item={stattedItemData} upgrades={upgradedata} />}
      disabled={disableTooltip}
      {...tooltipProps}
      containerProps={{
        ...tooltipProps?.containerProps,
        className: clsx(css.container, tooltipProps?.containerProps?.className),
      }}
    >
      <IconWithText
        icon={icon}
        text={
          <>
            {count > 1 && `${count} `}
            {disableLink ? (
              text || name
            ) : (
              <WikiLink
                to={name}
                text={text}
                {...wikiLinkProps}
                className={clsx(
                  wikiLinkProps?.className,
                  css[`colorRarity${capitalize(rarity)}`],
                )}
              />
            )}
          </>
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{
          applyCount: count,
          applyCountProps: {
            className: css.iconApplyCount,
          },
        }}
        style={style}
        className={clsx(className, css[`colorRarity${capitalize(rarity)}`])}
      />
    </Tooltip>
  );
};

export default Item;
