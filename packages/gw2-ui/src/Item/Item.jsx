import { useQuery } from '@redux-requests/react'
import { createItem } from 'gw2-ui-builder'
import { Item as ItemComponent, useThemeUI } from 'gw2-ui-components'
import { addItem, fetchItem, FETCH_ITEMS, FETCH_ITEM } from 'gw2-ui-redux'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { abortRequests, getQuery } from '@redux-requests/core'
import { PageContext } from '../withGW2UI'

const getUpgradesSelector = (upgrades) => (state) =>
  Array.isArray(upgrades)
    ? upgrades.map((upgrade) => {
        const [id, count] = Array.isArray(upgrade) ? upgrade : [upgrade]
        return {
          id,
          count,
          ...getQuery(state, {
            type: FETCH_ITEM,
            requestKey: id,
          }),
        }
      })
    : []

const Item = ({
  id,
  upgrades: propsUpgrades,
  type,
  stat,
  weight,
  createItemParams,
  ...rest
}) => {
  const dispatch = useDispatch()
  const context = useThemeUI()
  const { theme } = context

  const useBulk = theme.useBulkRequests
  let data
  let requestKey
  let upgrades
  if (useBulk) {
    requestKey = `${React.useContext(PageContext)}`
  } else {
    requestKey = `${id}`
  }

  const { data: dataRaw, error, loading } = useQuery({
    type: useBulk ? FETCH_ITEMS : FETCH_ITEM,
    requestKey,
  })
  if (dataRaw) {
    if (useBulk) {
      data = dataRaw.find((d) => Number(d.id) === Number(id))
    } else {
      data = dataRaw
    }
  }

  if (useBulk) {
    // format upgrades so that the underlaying Item-component understands it
    upgrades = Array.isArray(propsUpgrades)
      ? propsUpgrades.map((upgrade) => {
          const [id1, count] = Array.isArray(upgrade) ? upgrade : [upgrade]
          return {
            id: id1,
            count,
            error,
            loading,
            data: dataRaw && dataRaw.find((d) => Number(d.id) === Number(id1)),
          }
        })
      : []
  } else {
    upgrades = useSelector(getUpgradesSelector(propsUpgrades))
  }

  useEffect(() => {
    if (data || loading) {
      return () => {}
    }

    if (useBulk) {
      // Fetch all the upgrades
      if (Array.isArray(propsUpgrades)) {
        propsUpgrades.forEach((upgrade) => {
          const [localID] = Array.isArray(upgrade) ? upgrade : [upgrade]
          dispatch(addItem({ id: localID, page: requestKey }))
        })
      }

      // fetch the basic item
      if (!data && !loading) {
        // console.log('called ' + requestKey)
        dispatch(addItem({ id, page: requestKey }))
      }
    } else {
      if (requestKey) {
        dispatch(fetchItem(requestKey))
      }

      if (upgrades) {
        upgrades.forEach(({ id: upgradeId }) => {
          dispatch(fetchItem(`${upgradeId}`))
        })
      }
    }

    return () => {
      if (!useBulk) {
        if (requestKey) {
          dispatch(
            abortRequests([
              FETCH_ITEM,
              { requestType: FETCH_ITEM, requestKey },
            ]),
          )
        }

        if (upgrades) {
          upgrades.forEach(({ id: upgradeId }) => {
            dispatch(
              abortRequests([
                FETCH_ITEM,
                { requestType: FETCH_ITEM, requestKey: `${upgradeId}` },
              ]),
            )
          })
        }
      }
    }
  }, [dispatch, requestKey, propsUpgrades])

  let mergedData
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
      })

    if (!data && !createdData) {
      mergedData = null
    } else if (!data) {
      mergedData = createdData
    } else if (!createdData) {
      mergedData = data
    } else {
      mergedData = {
        ...data,
        ...createdData,
        details: {
          ...data.details,
          ...createdData.details,
          infix_upgrade: {
            /* eslint-disable camelcase */
            ...data.details?.infix_upgrade,
            ...createdData.details?.infix_upgrade,
            attributes:
              createdData.details?.infix_upgrade?.attributes ||
              data.details?.infix_upgrade?.attributes,
            /* eslint-enable camelcase */
          },
        },
      }
    }
  } catch (e) {
    return <ItemComponent {...rest} error={e} />
  }

  return (
    <ItemComponent
      data={mergedData}
      error={error}
      loading={loading}
      upgrades={upgrades}
      {...rest}
    />
  )
}

export default Item
