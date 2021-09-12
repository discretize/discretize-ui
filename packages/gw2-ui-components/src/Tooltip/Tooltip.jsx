import React, { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless'
import { followCursor } from 'tippy.js/headless'

import TooltipContainer from '../TooltipContainer'

const Tooltip = forwardRef(
  (
    { content: propsContent, render, containerProps, wrapperProps, ...rest },
    ref,
  ) => {
    const [mounted, setMounted] = useState(false)

    const lazyPlugin = {
      fn: () => ({
        onShow: () => setMounted(true),
        onHidden: () => setMounted(false),
      }),
    }

    // append to netlify-cms
    const appendTo =
      document?.querySelector('#nc-root iframe')?.contentDocument.body

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
        {...rest}
        ref={ref}
      />
    )
  },
)

Tooltip.propTypes = {
  content: PropTypes.node,
  render: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  containerProps: PropTypes.object,
  wrapperProps: PropTypes.object,
}

Tooltip.defaultProps = {
  content: null,
  render: null,
  containerProps: {},
  wrapperProps: {},
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
