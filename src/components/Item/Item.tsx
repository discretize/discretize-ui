import clsx from 'clsx';
import capitalize from 'lodash.capitalize';
import React, { ReactElement } from 'react';
import { useItems } from '../../gw2api/hooks';
import GW2ApiItem from '../../gw2api/types/items/item';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import ItemDetails from './ItemDetails';
import css from './Item.module.css';

export interface ItemProps {
  id: number;
  count?: number;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
  wikiLinkProps?: WikiLinkProps;
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
    id,
    count = 1,
    disableIcon,
    disableText,
    disableLink,
    disableTooltip,
    inline,
    tooltipProps,
    wikiLinkProps,
    upgrades,
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
  const {
    name,
    icon,
    rarity,
    type,
    details: { type: detailsType } = {},
  } = itemdata;
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

  return (
    <Tooltip
      content={<ItemDetails item={itemdata} upgrades={upgradedata} />}
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
              name
            ) : (
              <WikiLink
                to={name}
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
          ...(type &&
            detailsType && {
              name: `${type}.${detailsType}`,
            }),
          applyCount: count,
          applyCountProps: {
            className: css.iconApplyCount,
          },
        }}
        className={css[`colorRarity${capitalize(rarity)}`]}
      />
    </Tooltip>
  );
};

export default Item;
