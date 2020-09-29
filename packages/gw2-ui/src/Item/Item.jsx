import { abortRequests, getQuery } from '@redux-requests/core';
import { useQuery } from '@redux-requests/react';
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

const Item = ({
  id,
  upgrades: propsUpgrades,
  type,
  stat,
  weight,
  createItemParams,
  ...rest
}) => {
  const requestKey = id && `${id}`;
  const upgrades = useSelector(getUpgradesSelector(propsUpgrades));

  const dispatch = useDispatch();

  useEffect(
    () => {
      if (requestKey) {
        dispatch(fetchItem(requestKey));
      }

      if (upgrades) {
        upgrades.forEach(({ id: upgradeId }) => {
          dispatch(fetchItem(`${upgradeId}`));
        });
      }

      return () => {
        if (requestKey) {
          dispatch(
            abortRequests([
              FETCH_ITEM,
              { requestType: FETCH_ITEM, requestKey },
            ]),
          );
        }

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
    [dispatch, requestKey, propsUpgrades],
  );

  const { data, error, loading } = useQuery({ type: FETCH_ITEM, requestKey });

  let mergedData;
  try {
    const createdData =
      (type || stat || weight || createItemParams) &&
      createItem({
        ...(data?.name && { nameSuffix: data?.name }),
        type: type || data?.details?.type,
        stat,
        // eslint-disable-next-line camelcase
        weight: weight || data?.details?.weight_class,
        ...createItemParams,
      });

    mergedData =
      data || createdData
        ? {
            ...data,
            ...createdData,
            details: {
              ...data?.details,
              ...createdData?.details,
              infix_upgrade: {
                /* eslint-disable camelcase */
                ...data?.details?.infix_upgrade,
                ...createdData?.details?.infix_upgrade,
                attributes:
                  createdData?.details?.infix_upgrade?.attributes ||
                  data?.details?.infix_upgrade?.attributes,
                /* eslint-enable camelcase */
              },
            },
          }
        : null;
  } catch (e) {
    return <ItemComponent {...rest} error={e} />;
  }

  return (
    <ItemComponent
      data={mergedData}
      error={error}
      loading={loading}
      upgrades={upgrades}
      {...rest}
    />
  );
};

export default Item;
