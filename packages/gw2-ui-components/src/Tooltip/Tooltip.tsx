import React, { ReactElement, useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import { followCursor } from 'tippy.js/headless'

import TooltipContainer from '../TooltipContainer/TooltipContainer'

export interface TooltipProps {
  content: object
  render: object
  containerProps: object
  wrapperProps: object
}

const Tooltip = ({
  content,
  render,
  containerProps,
  wrapperProps,
}: TooltipProps): ReactElement => {
  const [mounted, setMounted] = useState(false)
  const [appendTo, setAppendTo] = useState(undefined)

  const lazyPlugin = {
    fn: () => ({
      onShow: () => setMounted(true),
      onHidden: () => setMounted(false),
    }),
  }

  // append to netlify-cms
  useEffect(() => {
    if (typeof document !== `undefined`) {
      const appendTo =
        document?.querySelector('#nc-root iframe')?.contentDocument.body
      setAppendTo(appendTo)
    }
  }, [])

  return (
    <Tippy
      // visible
      ignoreAttributes
      {...(appendTo && { appendTo })}
      followCursor
      plugins={[lazyPlugin, followCursor]}
      render={(attrs) => {
        if (!mounted) {
          return null
        }

        let content = null

        if (propsContent) {
          content = (
            <TooltipContainer {...containerProps}>
              {propsContent}
            </TooltipContainer>
          )
        } else if (typeof render === 'function') {
          content = render()
        } else if (render != null) {
          content = render
        }

        return (
          <div
            sx={{
              maxHeight: 'calc(100vh - 20px)',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              zIndex: 'tooltip',
            }}
            tabIndex="-1"
            {...wrapperProps}
            {...attrs}
          >
            {content}
          </div>
        )
      }}
    />
  )
}

export default Tooltip
