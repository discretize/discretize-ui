import clsx from 'clsx';
import { CSSProperties, ReactElement } from 'react';
import { createItem } from '../../builder';
import { ItemStatName } from '../../builder/itemStatNames';
import { useItems } from '../../gw2api/hooks';
import GW2ApiItemDetails from '../../gw2api/types/items/details/details';
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
    stat,
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
    ((itemdata.details?.type && //TODO is there a better way of doing that? [ listOfTypes ].includes(itemdata.details.type) was not recognized by TS
      (itemdata.details.type === 'Ring' ||
        itemdata.details.type === 'Accessory' ||
        itemdata.details.type === 'Amulet' ||
        itemdata.details.type === 'HeavyArmor' ||
        itemdata.details.type === 'MediumArmor' ||
        itemdata.details.type === 'LightArmor' ||
        itemdata.details.type === 'Axe' ||
        itemdata.details.type === 'Dagger' ||
        itemdata.details.type === 'Mace' ||
        itemdata.details.type === 'Pistol' ||
        itemdata.details.type === 'Scepter' ||
        itemdata.details.type === 'Sword' ||
        itemdata.details.type === 'Focus' ||
        itemdata.details.type === 'Shield' ||
        itemdata.details.type === 'Torch' ||
        itemdata.details.type === 'Warhorn' ||
        itemdata.details.type === 'Greatsword' ||
        itemdata.details.type === 'Hammer' ||
        itemdata.details.type === 'LongBow' ||
        itemdata.details.type === 'Rifle' ||
        itemdata.details.type === 'ShortBow' ||
        itemdata.details.type === 'Staff' ||
        itemdata.details.type === 'Harpoon' ||
        itemdata.details.type === 'Speargun' ||
        itemdata.details.type === 'Trident')) ||
      itemdata.type === 'Back')
  ) {
    const createdData = createItem({
      type:
        itemdata.type === 'Back'
          ? 'Back Item'
          : itemdata.details?.type?.replace(/([A-Z])/g, ' $1').trim() || '',
      stat,
      weight: itemdata.details?.weight_class,
    });

    const details = {
      ...itemdata.details,
      infix_upgrade: createdData.details.infix_upgrade,
    } as GW2ApiItemDetails;

    stattedItemData = {
      ...itemdata,
      details,
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
