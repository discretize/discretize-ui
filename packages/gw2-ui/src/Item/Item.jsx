import { createItem } from 'gw2-ui-builder-bulk'
import { Item as ItemComponent } from 'gw2-ui-components-bulk'
import { fetchItem } from 'gw2-ui-redux-bulk'
import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'

const Item = ({
  id,
  data: apiData,
  upgrades: propsUpgrades,
  type,
  stat,
  weight,
  createItemParams,
  ...rest
}) => {
  const dispatch = useDispatch()

  const data = useSelector((state) => {
    if (apiData) return apiData
    // only query api if there is no apiData provided via props
    return state.gw2UiStore.ids.items.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const error = useSelector((state) => {
    if (apiData) return null
    return state.gw2UiStore.errors.items.find(
      (item) => Number(item.id) === Number(id),
    )
  })
  const loading = !data && !error

  useEffect(() => {
    // fetch the basic item
    if (id && !data) {
      fetchItem(id, dispatch)
    }

    return () => {}
  }, [dispatch, id])

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
        name: data.name,
        rarity: data.rarity,
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
      loading={Boolean(loading)}
      upgrades={propsUpgrades}
      {...rest}
    />
  )
}

export default Item
