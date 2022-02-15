import clsx from 'clsx';
import capitalize from 'lodash.capitalize';
import React, { ReactElement } from 'react';
import GW2ApiItem from '../../gw2api/types/items/item';
import IconWithText from '../IconWithText/IconWithText';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import css from './Item.module.css';

export interface ItemProps {
  id: number;
  count?: number;
  data: GW2ApiItem;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
  wikiLinkProps?: WikiLinkProps;
  upgrades?: string[];
}

const Item = ({
  id,
  count = 1,
  data,
  disableIcon,
  disableText,
  disableLink,
  disableTooltip,
  inline,
  tooltipProps,
  wikiLinkProps,
  upgrades,
}: ItemProps): ReactElement => {
  const {
    name,
    icon,
    rarity,
    type,
    details: { type: detailsType } = {},
  } = data;
  // TODO redo the typing for details: the type of the details field depends
  //      on what string is supplied via type (Gw2ApiItemType)

  return (
    <Tooltip
      content={
        <>{JSON.stringify(data)}</>
        /*
        <ItemDetails
          data={populateMissingItemAPI(data)}
          count={count}
          upgrades={upgrades}
        />
        */
      }
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
