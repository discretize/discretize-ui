import React from 'react';

import {
  fetchItem,
  cancelItem,
  getItemData,
  getItemError,
  isItemFetching,
  isItemFetched,
} from 'gw2-ui-redux';
import { Item as ItemComponent } from 'gw2-ui-components';
import { createItem } from 'gw2-ui-builder';

import withRedux from '../withRedux';

const ReduxItem = withRedux(
  (state, props) => ({
    data: getItemData(state, props),
    error: getItemError(state, props),
    fetching: isItemFetching(state, props),
    fetched: isItemFetched(state, props),
    ...(props.upgrades &&
      props.upgrades.length && {
        upgrades: props.upgrades.map(upgrade => {
          const [id, count] = Array.isArray(upgrade) ? upgrade : [upgrade];

          return {
            id,
            count,
            data: getItemData(state, { id }),
            error: getItemError(state, { id }),
            fetching: isItemFetching(state, { id }),
            fetched: isItemFetched(state, { id }),
          };
        }),
      }),
  }),
  {
    fetch: fetchItem,
    cancel: cancelItem,
  },
)(ItemComponent);

const Item = ({ id, type, stat, weight, ...rest }) => {
  if (id) {
    return <ReduxItem id={id} {...rest} />;
  }

  try {
    return (
      <ItemComponent {...rest} data={createItem({ type, stat, weight })} />
    );
  } catch (error) {
    return <ItemComponent {...rest} error={{ message: error.message }} />;
  }
};

export default Item;
