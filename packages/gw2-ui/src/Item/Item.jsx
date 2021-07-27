import { useQuery } from '@redux-requests/react'
import { createItem } from 'gw2-ui-builder'
import { Item as ItemComponent } from 'gw2-ui-components'
import { fetchItems, FETCH_ITEMS } from 'gw2-ui-redux'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add } from 'gw2-ui-redux/src/gw2-ui-slice'
import { PageContext } from '../withPageName'

// filter the returned data for the right value.
const findRight = (object, toFind) => {
  const dataMatches = object
    ? object.filter((d) => Number(toFind) === Number(d.id))
    : undefined
  return dataMatches && dataMatches.length > 0 ? dataMatches[0] : undefined
}

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

  // get the data for the basic item (without upgrades)
  const { data: dataRaw, error, loading } = useQuery({
    type: FETCH_ITEMS,
    requestKey: page,
  })
  const data = findRight(dataRaw, id)

  // get the data for the upgrades
  const {
    data: dataUpgrades,
    error: errorUpgrades,
    loading: loadingUpgrades,
  } = useQuery({
    type: FETCH_ITEMS,
    requestKey: `${page}_${id}_upgrades`,
  })

  // format upgrades so that the underlaying Item-component understands it
  const upgrades = Array.isArray(propsUpgrades)
    ? propsUpgrades.map((upgrade) => {
        const [id1, count] = Array.isArray(upgrade) ? upgrade : [upgrade]

        return {
          id: id1,
          count,
          error: errorUpgrades,
          loading: loadingUpgrades,
          data: findRight(dataUpgrades, id1),
        }
      })
    : []

  useEffect(() => {
    // Fetch all the upgrades
    if (Array.isArray(propsUpgrades)) {
      const idArray = []
      propsUpgrades.forEach((upgrade) => {
        const [localID] = Array.isArray(upgrade) ? upgrade : [upgrade]
        idArray.push(localID)
        dispatch(
          add({ gw2type: 'item', id: localID, page: `${page}_${id}_upgrades` }),
        )
      })
      dispatch(fetchItems(idArray, `${page}_${id}_upgrades`))
    }

    // fetch the basic item
    if (!data && !loading) {
      // console.log('called ' + requestKey)
      dispatch(add({ gw2type: 'item', id: requestKey, page }))
    } else {
      return () => {}
    }

    return () => {
      // TODO cleanup
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
    <div>
      <ItemComponent
        data={mergedData}
        error={error}
        loading={loading}
        upgrades={upgrades}
        {...rest}
      />
    </div>
  )
}

export default Item
