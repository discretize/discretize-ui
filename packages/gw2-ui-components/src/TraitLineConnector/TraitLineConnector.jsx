import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useResizeAware from 'react-resize-aware';
import { keyframes } from '@emotion/core';

import traitLineConnectorImage from '../assets/images/trait-line-connector.png';

const move = keyframes({
  from: {
    backgroundPositionX: 0,
  },
  to: {
    backgroundPositionX: -300,
  },
});

export const Paths = {
  UP: 'up',
  MID: 'mid',
  DOWN: 'down',
};

const TraitLineConnector = forwardRef(
  ({ start, end, disabled, ...rest }, ref) => {
    const [resizeListener, { width, height }] = useResizeAware();
    const [dimensions, setDimensions] = useState({});

    useEffect(
      () => {
        let startY;
        switch (start) {
          case Paths.UP:
            startY = height - 20;
            break;
          case Paths.MID:
            startY = height * 0.5;

            if (end === Paths.UP) {
              startY += 4;
            } else if (end === Paths.DOWN) {
              startY -= 4;
            }

            break;
          case Paths.DOWN:
            startY = 20;
            break;
          default:
            break;
        }

        let endY;
        switch (end) {
          case Paths.UP:
            endY = height - 20;
            break;
          case Paths.MID:
            endY = height * 0.5;

            if (start === Paths.UP) {
              endY += 4;
            } else if (start === Paths.DOWN) {
              endY -= 4;
            }

            break;
          case Paths.DOWN:
            endY = 20;
            break;
          default:
            break;
        }

        const length = Math.sqrt(width ** 2 + (startY - endY) ** 2);

        setDimensions({
          bottom: (startY + endY) / 2 - 8 / 2,
          left: width / 2 - length / 2,
          length,
          angle: Math.atan2(endY - startY, -width) * (180 / Math.PI),
        });
      },
      [start, end, width, height],
    );

    if (!dimensions) {
      return null;
    }

    const { bottom, left, length, angle } = dimensions;

    return (
      <div sx={{ position: 'relative' }} {...rest} ref={ref}>
        {resizeListener}

        <div
          sx={{
            position: 'absolute',
            ...(!disabled && {
              backgroundImage: `url(${traitLineConnectorImage})`,
              backgroundRepeat: 'repeat-x',
              animation: `${move.toString()} 30s linear infinite`,
            }),
          }}
          css={{
            height: 8,
            bottom,
            left,
            width: length,
            transform: `rotate(${angle}deg)`,
          }}
        />
      </div>
    );
  },
);

TraitLineConnector.propTypes = {
  start: PropTypes.oneOf(Object.values(Paths)),
  end: PropTypes.oneOf(Object.values(Paths)),
  disabled: PropTypes.bool,
};

TraitLineConnector.defaultProps = {
  start: Paths.MID,
  end: Paths.MID,
  disabled: false,
};

TraitLineConnector.displayName = 'TraitLineConnector';

export default TraitLineConnector;
