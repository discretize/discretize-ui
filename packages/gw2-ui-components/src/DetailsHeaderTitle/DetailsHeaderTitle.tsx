import React, { PropsWithChildren, ReactElement } from 'react'

const DetailsHeaderTitle = ({
  children,
}: PropsWithChildren<unknown>): ReactElement => {
  return (
    <div
      sx={{
        color: 'gw2.details.title',
        fontSize: '16px',
        fontFamily: 'gw2.heading',
        fontWeight: 'gw2.heading',
        flexGrow: 1,
        alignSelf: 'center',
        lineHeight: 'gw2.heading',
      }}
    >
      {children}
    </div>
  )
}

export default DetailsHeaderTitle
