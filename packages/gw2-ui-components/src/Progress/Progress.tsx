import React, { ReactElement } from 'react'
import { keyframes } from '@emotion/core'

const progress = keyframes({
  from: {
    backgroundPosition: '-4em 0',
  },
  to: {
    backgroundPosition: '4em 0',
  },
})

export interface ProgressProps {
  component: object
  inline: boolean
}

const Progress = ({ component, inline }: ProgressProps): ReactElement => {
  return (
    <div
      sx={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        width: '4em',
        height: '1em',
        ...(inline && { verticalAlign: 'text-top' }),
        ':before': {
          content: '""',
          width: '100%',
          height: '85%',
          backgroundColor: `rgba(0,0,0,0.2)`,
          backgroundImage:
            'linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0.2), currentColor, rgba(0,0,0,0.2), rgba(0,0,0,0))',
          backgroundRepeat: 'no-repeat',
          animation: `${progress} 1.5s infinite`,
          borderRadius: '4px',
        },
      }}
    />
  )
}

export default Progress
