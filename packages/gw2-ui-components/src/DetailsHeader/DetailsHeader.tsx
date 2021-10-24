import React, { PropsWithChildren, ReactElement } from 'react'

import Icon, { IconProps } from '../Icon/Icon'
import DetailsHeaderTitle from '../DetailsHeaderTitle/DetailsHeaderTitle'

export interface DetailsHeaderFlagProps {
  icon: string
  value: object
}

export interface DetailsHeaderProps {
  icon: string
  iconProps: IconProps
  titleProps: object
  flags: DetailsHeaderFlagProps[]
}

const DetailsHeader = ({
  icon,
  iconProps,
  titleProps,
  flags,
  children,
}: PropsWithChildren<DetailsHeaderProps>): ReactElement => {
  return (
    <div sx={{ display: 'flex', flexDirection: 'row', mb: '3px' }}>
      {typeof icon === 'string' || iconProps?.src || iconProps?.name ? (
        <Icon
          src={icon}
          {...iconProps}
          sx={{
            fontSize: '32px',
            mr: '6px',
            border: '1px solid #cfd0d0',
            borderRadius: '0px',
            ...iconProps.sx,
          }}
        />
      ) : (
        icon
      )}

      <DetailsHeaderTitle {...titleProps}>{children}</DetailsHeaderTitle>

      {flags && (
        <div sx={{ ml: '6px' }}>
          {flags.map(({ icon: flagIcon, value }) => (
            <span key={`${flagIcon}-${value}`}>
              {value}
              {flagIcon && <Icon src={flagIcon} sx={{ ml: '2px' }} />}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default DetailsHeader
