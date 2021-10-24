import React, { forwardRef, ReactElement } from 'react'
import PropTypes from 'prop-types'

const REGEX = new RegExp('<c=@([^>]+?>[^<>]+?)(?:</c>|$)', 'g')

const renderFlavor = (text) => {
  const parts = text.replace(/<br\s*?\/?\s*?>/g, '\n').split(REGEX)

  for (let i = 1; i < parts.length; i += 2) {
    const [type, textPart] = parts[i].split('>')

    if (type) {
      let color
      switch (type) {
        case 'ability':
          color = null
          break
        case 'abilitytype':
          color = 'abilityType'
          break
        case 'reminder':
          color = 'muted'
          break
        default:
          color = type
          break
      }

      parts[i] = [textPart, color]
    } else {
      parts[i] = textPart
    }
  }

  return (
    <>
      {parts
        .filter((part) => !!part)
        .map((part, index) => {
          if (Array.isArray(part)) {
            const [textPart, color] = part

            if (color) {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <span key={index} sx={{ color: `gw2.details.${color}` }}>
                  {textPart}
                </span>
              )
            }
            return textPart
          }

          return part
        })}
    </>
  )
}

export interface DetailsProps {
  component: object
  lines: object
  lineComponent: object
  lineProps: object
}

const DetailsText = ({
  component,
  lines,
  lineComponent,
  lineProps,
}: DetailsProps): ReactElement => {
  return (
    <Component>
      {lines
        .filter((line) => !!line)
        .map((line, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <LineComponent key={index} {...lineProps}>
            {React.isValidElement(line) ? line : renderFlavor(line)}
          </LineComponent>
        ))}
    </Component>
  )
}

export default DetailsText
