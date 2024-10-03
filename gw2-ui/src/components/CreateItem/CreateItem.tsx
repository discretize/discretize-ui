import clsx from 'clsx';
import { capitalize } from '../../helpers/capitalize';
import { type CSSProperties, type ReactElement } from 'react';
import createItem, { type CreateItemProps } from '../../builder/createItem';
import { useItems } from '../../gw2api/hooks';
import type GW2ApiItem from '../../gw2api/types/items/item';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import Tooltip from '../Tooltip/Tooltip';
import WikiLink from '../WikiLink/WikiLink';
import ItemDetails from './../Item/ItemDetails';
import css from '../Item/Item.module.css';
import { ICONS } from '../../data/defaultIcons';

export interface ItemProps extends CreateItemProps {
  count?: number;
  text?: string;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
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
    count = 1,
    text,
    disableIcon,
    disableText,
    disableLink,
    disableTooltip,
    inline,
    upgrades,
    type: typeProps,
    stat: statRaw,
    weight: weightProps,
    rarity: rarityProps,
    level: levelProps,
    style,
    className,
  } = props;
  const statProps = capitalize(statRaw);

  const ids = [];
  if (upgrades) {
    for (const u of upgrades) {
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
    const first_error_id = Number(Object.keys(items.errors)[0]);
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
    if (!createdData) throw 'Unspecified error';
  } catch (e) {
    return (
      <Error
        name="Invalid Item"
        message={`An error occured: ${e}`}
        code={404}
      />
    );
  }

  const { name, rarity } = createdData;
  const iconHash = ICONS.find((defaultIcon) => {
    if ('weight' in defaultIcon) {
      if (defaultIcon.weight !== weightProps) return false;
    }
    return defaultIcon.type === typeProps;
  });
  const icon =
    iconHash && `https://render.guildwars2.com/file/${iconHash.icon}.png`;

  const upgradedata: [GW2ApiItem, number][] = [];
  if (upgrades) {
    for (const u of upgrades) {
      let id: number;
      let count: number = 1;
      if (Array.isArray(u)) {
        [id, count] = u;
      } else {
        id = u;
      }
      upgradedata.push([items.data[id], count]);
    }
  }

  return (
    <Tooltip
      content={
        <ItemDetails
          item={{ icon, ...createdData } as GW2ApiItem}
          upgrades={upgradedata}
        />
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
              text || name
            ) : (
              <WikiLink
                to={name}
                text={text}
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
        style={style}
        iconProps={{
          applyCount: count,
          applyCountProps: {
            className: css.iconApplyCount,
          },
        }}
        className={clsx(
          rarity && css[`colorRarity${capitalize(rarity)}`],
          className,
        )}
      />
    </Tooltip>
  );
};

export default Item;
