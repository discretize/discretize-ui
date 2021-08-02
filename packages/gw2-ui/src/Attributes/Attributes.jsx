import { abortRequests, getQuery } from '@redux-requests/core'
import { getBaseAttributes } from 'gw2-ui-components-bulk'
import { fetchItem, FETCH_ITEM } from 'gw2-ui-redux-bulk'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Attributes = ({ level, children, items }) => {
  if (typeof children !== 'function') {
    return null
  }

  const base = getBaseAttributes(level)

  /* eslint-disable no-param-reassign */
  const {
    attributes: itemAttributes,
    errors: itemErrors,
    item: itemLoading,
  } = (items || []).reduce(
    (result, { data, loading: singleItemLoading, error: itemError }) => {
      if (itemError) {
        if (!result.errors) {
          result.errors = []
        }

        result.errors.push(itemError)

        return result
      }
      if (singleItemLoading || !data) {
        if (!result.loading) {
          result.loading = singleItemLoading
        }

        return result
      }

      if (data) {
        const {
          details: {
            infix_upgrade: { attributes: singleItemAttributes } = {},
          } = {},
        } = data

        if (singleItemAttributes) {
          singleItemAttributes.forEach(({ attribute, modifier }) => {
            result.attributes[attribute] =
              (result.attributes[attribute] || 0) + modifier
          })
        }
      }

      return result
    },
    { attributes: {}, errors: null, loading: false },
  )
  /* eslint-enable no-param-reassign */

  const props = {
    base,
    items: {
      attributes: itemAttributes,
      errors: itemErrors,
      loading: itemLoading,
    },
  }

  return children(props)
}

Attributes.propTypes = {
  level: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      data: PropTypes.object,
      error: PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
        message: PropTypes.string,
      }),
      loading: PropTypes.bool,
    }),
  ),
  fetchItem: PropTypes.func.isRequired,
  cancelItem: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
}

Attributes.defaultProps = {
  level: null,
  items: [],
}

Attributes.displayName = 'Attributes'

const getItemsSelector = (items) => (state) =>
  Array.isArray(items)
    ? items.map((id) => ({
        id,
        ...getQuery(state, {
          type: FETCH_ITEM,
          requestKey: id,
        }),
      }))
    : []

export default ({ items: propsItems, ...rest }) => {
  const items = useSelector(getItemsSelector(propsItems))

  const dispatch = useDispatch()

  useEffect(() => {
    if (items) {
      items.forEach(({ id }) => {
        dispatch(fetchItem(`${id}`))
      })
    }

    return () => {
      if (items) {
        items.forEach(({ id }) => {
          dispatch(
            abortRequests([
              FETCH_ITEM,
              { requestType: FETCH_ITEM, requestKey: `${id}` },
            ]),
          )
        })
      }
    }
  }, [dispatch, propsItems])

  return <Attributes items={items} {...rest} />
}
