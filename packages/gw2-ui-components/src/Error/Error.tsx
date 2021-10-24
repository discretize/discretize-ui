import React, { ReactElement } from 'react'

import Tooltip from '../Tooltip/Tooltip'
import DetailsHeader from '../DetailsHeader/DetailsHeader'
import DetailsText from '../DetailsText/DetailsText'
import IconWithText from '../IconWithText/IconWithText'

export interface ErrorProps {
  code: string
  name: string
  message: string
  disableIcon: string
  disableText: boolean
  disableTooltip: boolean
  inline: boolean
  tooltipProps: object
}

const Error = ({
  code,
  name,
  message,
  disableIcon,
  disableText,
  disableTooltip,
  inline,
  tooltipProps,
}: ErrorProps): ReactElement => {
  return (
    <Tooltip
      content={
        <>
          <DetailsHeader
            iconProps={{ name: code }}
            titleProps={{ sx: { color: 'error' } }}
          >
            {name}
          </DetailsHeader>
          <DetailsText
            lines={[
              <>
                {message}
                {code && ` (code ${code})`}
              </>,
            ]}
          />
        </>
      }
      disabled={disableTooltip}
      {...tooltipProps}
    >
      <IconWithText
        text={name}
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{ name: code }}
        sx={{ color: 'error' }}
      />
    </Tooltip>
  )
}

export default Error
