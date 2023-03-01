import clsx from 'clsx';
import { CSSProperties, ReactElement } from 'react';
import { createItem } from '../../builder';
import { ItemStatName } from '../../builder/itemStatNames';
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

export type ItemUpgrades = (number | [number, number])[]; // ItemId, or [ItemId, amount] for runes
export interface ItemInternalProps {
  dataItem: GW2ApiItem;
  dataUpgrades?: [GW2ApiItem, number][];
  text?: string | ((text: string) => string);
  count?: number;
  stat?: ItemStatName; // Allow explicitly forcing a certain stat on an item. Many items allow multiple stats and dont provide a "default" one
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
  wikiLinkProps?: WikiLinkProps;
  upgrades?: ItemUpgrades;
  style?: CSSProperties;
  className?: string;
}

const ItemInternal = (props: ItemInternalProps): ReactElement => {
  const {
    dataItem: itemdata,
    dataUpgrades: upgradedata = [],
    text: textProps,
    count = 1,
    stat: statRaw,
    disableIcon,
    disableText,
    disableLink,
    disableTooltip,
    inline,
    tooltipProps,
    wikiLinkProps,
    style,
    className,
  } = props;
  const stat = statRaw ? capitalize(statRaw) : undefined;

  const { name, icon, rarity } = itemdata;
  // evaluate text prop. if its a function, execute it
  const text = typeof textProps === 'function' ? textProps(name) : textProps;

  // if there is a stat explicitly requested in the props, we need to augment the existing itemdata to include that stat
  let stattedItemData = itemdata;
  if (
    stat &&
    (itemdata.type === 'Armor' ||
      itemdata.type === 'Weapon' ||
      itemdata.type === 'Trinket' ||
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
      console.error(`Error while loading item with id ${itemdata.id}!\n ${e}`);
      return (
        <Error
          name="Invalid Item"
          message={`An error occured ${itemdata.id}: ${e}`}
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

export default ItemInternal;
