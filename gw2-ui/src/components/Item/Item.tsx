import { type ReactElement } from 'react';
import { useItems } from '../../gw2api/hooks';
import type GW2ApiItem from '../../gw2api/types/items/item';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import ItemInternal, { type ItemInternalProps } from './ItemInternal';

export interface ItemProps
  extends Omit<ItemInternalProps, 'dataItem' | 'dataUpgrades'> {
  id: number;
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

  if (!id) {
    return (
      <Error
        code={404}
        name="No ID provided"
        message="Missing ID prop in the item component"
      />
    );
  }

  const ids = [id];
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
    const newProps = {
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
    };
    return <IconWithText {...newProps} loading />;
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
  const itemdata = items.data[id];

  // TODO redo the typing for details: the type of the details field depends
  //      on what string is supplied via type (Gw2ApiItemType)

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
    <ItemInternal {...props} dataItem={itemdata} dataUpgrades={upgradedata} />
  );
};

export default Item;
