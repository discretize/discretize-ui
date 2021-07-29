import { useQuery } from '@redux-requests/react'
import { createItem } from 'gw2-ui-builder'
import { Item as ItemComponent } from 'gw2-ui-components'
import { addItem, FETCH_ITEMS } from 'gw2-ui-redux'
import { getItemsFromStore } from 'gw2-ui-redux/src/gw2-ui-slice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageContext } from '../withGW2UI'

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

  const requestKey = id && `${id}`

  // context for the current opened page
  const page = React.useContext(PageContext)

  let data = null
  let error
  let loading
  let dataRaw = useSelector(
    getItemsFromStore([
      Number(id),
      ...(propsUpgrades
        ? propsUpgrades.map((upgrade) =>
            Array.isArray(upgrade) ? upgrade[0] : upgrade,
          )
        : []),
    ]),
  )

  // search the dataStore if the data is already available.
  data = dataRaw.find((d) => Number(d.id) === Number(id))

  // this query is only being used, in case the data was not found in the store ( data is undefined).
  const { data: dataQ, error: errorQ, loading: loadingQ } = useQuery({
    type: FETCH_ITEMS,
    requestKey: page,
  })
  // assign the found properties, so that our items starts to load
  if (!data) {
    dataRaw = dataQ
    error = errorQ
    loading = loadingQ
  }

  // format upgrades so that the underlaying Item-component understands it
  const upgrades = Array.isArray(propsUpgrades)
    ? propsUpgrades.map((upgrade) => {
        const [id1, count] = Array.isArray(upgrade) ? upgrade : [upgrade]
        return {
          id: id1,
          count,
          error,
          loading,
          data: Array.isArray(dataRaw)
            ? dataRaw.find((d) => Number(d.id) === Number(id1))
            : [],
        }
      })
    : []

  useEffect(() => {
    // Fetch all the upgrades
    if (Array.isArray(propsUpgrades)) {
      propsUpgrades.forEach((upgrade) => {
        const [localID] = Array.isArray(upgrade) ? upgrade : [upgrade]
        dispatch(addItem({ id: localID, page }))
      })
    }

    // fetch the basic item
    if (!data && !loading) {
      // console.log('called ' + requestKey)
      dispatch(addItem({ id, page }))
    } else {
      return () => {}
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
