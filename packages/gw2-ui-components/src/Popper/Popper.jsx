import React, { Component, Fragment } from 'react';
import PopperJS from 'popper.js';
import EventListener, { withOptions } from 'react-event-listener';

class Popper extends Component {
  popper = null;

  position = {
    x: 0,
    y: 0,
  };

  componentWillUnmount = () => {
    if (this.popper) {
      this.popper.destroy();
      this.popper = null;
    }
  };

  getBoundingClientRect = () => {
    const { x, y } = this.position;

    return {
      left: x,
      right: x,
      top: y,
      bottom: y,
      width: 0,
      height: 0,
    };
  };

  createPopper = node => {
    if (node && !this.popper) {
      this.popper = new PopperJS(
        {
          getBoundingClientRect: this.getBoundingClientRect,
          clientWidth: 0,
          clientHeight: 0,
        },
        node,
        {
          placement: 'top-start',
          modifiers: {
            offset: {
              offset: '0, 20px',
            },
            preventOverflow: {
              boundariesElement: 'window',
            },
          },
          positionFixed: true,
        },
      );
    }
  };

  handleMove = ({ clientX: x, clientY: y }) => {
    this.position = { x, y };
    this.popper.scheduleUpdate();
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Fragment>
        <EventListener
          target="window"
          onMouseMove={withOptions(this.handleMove, {
            passive: true,
            capture: false,
          })}
        />

        <div ref={this.createPopper} role="tooltip" {...rest}>
          {children}
        </div>
      </Fragment>
    );
  }
}

export default Popper;
