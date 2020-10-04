import React, { Fragment, forwardRef } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import { apiAttributes, formatDuration } from '../helpers'

const DetailsFact = forwardRef(({ data, ...rest }, ref) => {
  const { type, icon, prefix } = data

  let key
  let value
  let count

  switch (type) {
    case 'AttributeAdjust': {
      const { text, value: factValue, target } = data

      const attribute = !text && target && apiAttributes[target]
      key = attribute ? `${attribute} Increase` : text
      value = `${!text || text.endsWith('Increase') ? '+' : ''}${Number(
        factValue,
      ).toLocaleString()}`

      break
    }
    case 'Buff': {
      const { duration, status, description, apply_count: applyCount } = data

      if (duration) {
        key = (
          <>
            {status}
            <span sx={{ ml: '2px' }}>{`(${formatDuration(duration)})`}</span>
          </>
        )
      } else {
        key = status
      }
      value = description
      count = applyCount

      break
    }
    case 'BuffConversion': {
      const { source, target, percent } = data

      key = `Gain ${apiAttributes[target]} Based on a Percentage of ${apiAttributes[source]}`
      value = `${percent}%`

      break
    }
    case 'ComboField': {
      const { text, field_type: fieldType } = data

      key = text
      value = fieldType

      break
    }
    case 'ComboFinisher': {
      const { text, percent, finisher_type: finisherType } = data

      key = text
      value = `${finisherType}${
        percent !== undefined && percent !== 0 && percent !== 100
          ? ` (${percent}% Chance)`
          : ''
      }`

      break
    }
    case 'Damage': {
      const { text, hit_count: hitCount, dmg_multiplier: dmgMultiplier } = data

      if (hitCount > 1) {
        key = (
          <>
            {text}
            <span sx={{ ml: '2px' }}>{`(${hitCount}x)`}</span>
          </>
        )
      } else {
        key = text
      }
      value = Math.round(1047.5 * 1000 * (dmgMultiplier / 2597)) // Greatsword weapon strength

      break
    }
    case 'Distance': {
      const { text, distance } = data

      key = text
      value = distance

      break
    }
    case 'Duration': {
      const { text, duration } = data

      key = text
      value = duration

      break
    }
    case 'Heal': {
      const { text, hit_count: hitCount } = data

      key = text
      value = `${hitCount}x`

      break
    }
    case 'HealingAdjust': {
      const { text, hit_count: hitCount } = data

      key = text
      value = `${hitCount}x`

      break
    }
    case 'NoData': {
      const { text } = data

      value = text

      break
    }
    case 'Number': {
      const { text, value: factValue } = data

      key = text
      value = factValue

      break
    }
    case 'Percent': {
      const { text, percent } = data

      key = text
      value = `${percent}%`

      break
    }
    case 'PrefixedBuff': {
      const {
        text,
        duration,
        status,
        description,
        apply_count: applyCount,
      } = data

      if (duration) {
        key = (
          <>
            {status}
            <span sx={{ ml: '2px' }}>{`(${duration}s)`}</span>
          </>
        )
      } else {
        key = text
      }
      value = description
      count = applyCount

      break
    }
    case 'Radius': {
      const { text, distance } = data

      key = text
      value = distance

      break
    }
    case 'Range': {
      const { text, value: factValue } = data

      key = text
      value = Number(factValue).toLocaleString()

      break
    }
    case 'Recharge': {
      const { text, value: factValue } = data

      key = text
      value = factValue

      break
    }
    case 'StunBreak': {
      value = 'Breaks Stun'
      break
    }
    case 'Time': {
      const { text, duration } = data

      key = text
      value = `${duration} second${duration > 1 ? 's' : ''}`

      break
    }
    case 'Unblockable': {
      const { text } = data

      value = text

      break
    }
    default: {
      // eslint-disable-next-line no-console
      console.warn('Unknown fact type', data)

      const { text, value: factValue } = data

      if (value === true) {
        value = text
      } else {
        key = text
        value = factValue
      }

      break
    }
  }

  if (!key && !value) {
    return null
  }

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
      {...rest}
      ref={ref}
    >
      <div sx={{ display: 'flex', flexDirection: 'row', fontSize: '30px' }}>
        {prefix?.icon && (
          <Icon src={prefix.icon} applyCount={prefix.apply_count} />
        )}
        {icon && <Icon src={icon} applyCount={count} />}
      </div>

      <div sx={{ ml: '4px', color: 'gw2.details.muted' }}>
        {key}
        {key ? ': ' : ''}
        {value}
      </div>
    </div>
  )
})

DetailsFact.propTypes = {
  data: PropTypes.object.isRequired,
}

DetailsFact.displayName = 'DetailsFact'

export default DetailsFact
