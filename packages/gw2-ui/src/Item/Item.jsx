import { abortRequests, getQuery } from '@redux-requests/core';
import { Query } from '@redux-requests/react';
import { createItem } from 'gw2-ui-builder';
import { Item as ItemComponent } from 'gw2-ui-components';
import { fetchItem, FETCH_ITEM } from 'gw2-ui-redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const getUpgradesSelector = upgrades => state =>
  Array.isArray(upgrades)
    ? upgrades.map(upgrade => {
        const [id, count] = Array.isArray(upgrade) ? upgrade : [upgrade];
        return {
          id,
          count,
          ...getQuery(state, {
            type: FETCH_ITEM,
            requestKey: id,
          }),
        };
      })
    : [];

const ReduxItem = ({ id, upgrades: propsUpgrades, ...rest }) => {
  const requestKey = `${id}`;

  const dispatch = useDispatch();

  const upgrades = useSelector(getUpgradesSelector(propsUpgrades));

  useEffect(
    () => {
      dispatch(fetchItem(id));

      if (upgrades) {
        upgrades.forEach(({ id: upgradeId }) => {
          dispatch(fetchItem(upgradeId));
        });
      }

      return () => {
        dispatch(
          abortRequests([FETCH_ITEM, { requestType: FETCH_ITEM, requestKey }]),
        );

        if (upgrades) {
          upgrades.forEach(({ id: upgradeId }) => {
            dispatch(
              abortRequests([
                FETCH_ITEM,
                { requestType: FETCH_ITEM, requestKey: `${upgradeId}` },
              ]),
            );
          });
        }
      };
    },
    [id, propsUpgrades],
  );

  return (
    <Query
      type={FETCH_ITEM}
      requestKey={requestKey}
      loadingComponent={ItemComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={ItemComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <ItemComponent
          data={data}
          error={error}
          loading={loading}
          upgrades={upgrades}
          {...rest}
        />
      )}
    </Query>
  );
};

const Item = ({ id, type, stat, weight, ...rest }) => {
  if (id) {
    return <ReduxItem id={id} {...rest} />;
  }

  try {
    // TODO add upgrades
    return (
      <ItemComponent {...rest} data={createItem({ type, stat, weight })} />
    );
  } catch (error) {
    return <ItemComponent {...rest} error={error} />;
  }
};

export default Item;
