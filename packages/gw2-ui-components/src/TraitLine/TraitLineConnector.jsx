import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import ResizeObserver from 'react-resize-observer';

import { withStyles } from '../helpers';
import specializationLine from '../assets/images/specialization-line.png';

const ANIMATION_ID = `gw2-specialization-line-${Math.round(
  Math.random() * 1e5,
)}`;

const styles = {
  root: {
    position: 'relative',
  },
  line: {
    position: 'absolute',
    height: 8,
    backgroundImage: `url(${specializationLine})`,
    backgroundRepeat: 'repeat-x',
    animation: `${ANIMATION_ID} 30s linear infinite`,
  },
  [`@keyframes ${ANIMATION_ID}`]: {
    from: {
      backgroundPositionX: 0,
    },
    to: {
      backgroundPositionX: -300,
    },
  },
};

export const Paths = {
  UP: 'up',
  MID: 'mid',
  DOWN: 'down',
};

class SpecializationLine extends Component {
  container = {
    height: 0,
    width: 0,
  };

  state = {
    top: 0,
    left: 0,
    length: 0,
    angle: 0,
  };

  handleResize = ({ height, width }) => {
    const { height: previousHeight, width: previousWidth } = this.container;

    if (previousHeight !== height || previousWidth !== width) {
      this.container = { height, width };
      this.update();
    }
  };

  update = () => {
    const { height, width } = this.container;
    const { start, end } = this.props;

    let startY;
    switch (start) {
      case Paths.UP:
        startY = 20;
        break;
      case Paths.MID:
        startY = height * 0.5;

        if (end === Paths.UP) {
          startY -= 4;
        } else if (end === Paths.DOWN) {
          startY += 4;
        }

        break;
      case Paths.DOWN:
        startY = height - 20;
        break;
      default:
        break;
    }

    let endY;
    switch (end) {
      case Paths.UP:
        endY = 20;
        break;
      case Paths.MID:
        endY = height * 0.5;

        if (start === 'up') {
          endY -= 4;
        } else if (start === 'down') {
          endY += 4;
        }

        break;
      case Paths.DOWN:
        endY = height - 20;
        break;
      default:
        break;
    }

    const length = Math.sqrt(width ** 2 + (endY - startY) ** 2);

    const centerX = width / 2 - length / 2;
    const centerY = (startY + endY) / 2 - 8 / 2;

    const angle = Math.atan2(startY - endY, -width) * (180 / Math.PI);

    const {
      left: previousCenterX,
      top: previousCenterY,
      length: previousLength,
      angle: previousAngle,
    } = this.state;

    if (
      previousCenterX !== centerX ||
      previousCenterY !== centerY ||
      previousLength !== length ||
      previousAngle !== angle
    ) {
      this.setState({
        left: centerX,
        top: centerY,
        length,
        angle,
      });
    }
  };

  render = () => {
    const { classes, className, disabled } = this.props;
    const { top, left, length, angle } = this.state;

    return (
      <div className={classNames(className, classes.root)}>
        {!disabled && (
          <Fragment>
            <ResizeObserver onResize={this.handleResize} />

            <div
              className={classes.line}
              style={{
                left,
                top,
                width: length,
                transform: `rotate(${angle}deg)`,
              }}
            />
          </Fragment>
        )}
      </div>
    );
  };
}

SpecializationLine.defaultProps = {
  start: Paths.MID,
  end: Paths.MID,
  disabled: false,
};

export default withStyles(styles)(SpecializationLine);
