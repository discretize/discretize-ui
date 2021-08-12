import { createItem } from 'gw2-ui-builder-bulk'
import { Item as ItemComponent } from 'gw2-ui-components-bulk'
import { fetchItem } from 'gw2-ui-redux-bulk'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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

  const data = useSelector((state) => {
    return state.gw2UiStore.ids.items.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const error = useSelector((state) => {
    return state.gw2UiStore.errors.items.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const loading = !data && !error

  const upgrades = Array.isArray(propsUpgrades)
    ? propsUpgrades.map((upgrade) => {
        const [id1, count] = Array.isArray(upgrade) ? upgrade : [upgrade]
        return {
          id: id1,
          count,
          error,
          loading,
          data: useSelector((state) => {
            return state.gw2UiStore.ids.items.find(
              (item) => Number(item.id) === Number(id1),
            )
          }),
        }
      })
    : []

  useEffect(() => {
    if (data) {
      return () => {}
    }

    // Fetch all the upgrades
    if (Array.isArray(propsUpgrades)) {
      propsUpgrades.forEach((upgrade) => {
        const [localID] = Array.isArray(upgrade) ? upgrade : [upgrade]
        fetchItem(localID, dispatch)
      })
    }

    // fetch the basic item
    if (!data) {
      fetchItem(id, dispatch)
    }

    return () => {}
  }, [dispatch, propsUpgrades])

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
