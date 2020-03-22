import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import EventListener, { withOptions } from 'react-event-listener';

import { withStyles } from '../helpers';
import Popper from '../Popper';
import { TooltipContent } from '.';

const styles = theme => ({
  root: {
    maxWidth: 300,
    zIndex: theme.zIndex.tooltip,
    '& > div:not(:last-child)': {
      marginBottom: '0.35em',
    },
  },
});

class Tooltip extends Component {
  id = `gw2-tooltip-${Math.round(Math.random() * 1e5)}`;

  state = {
    open: false,
  };

  handleOpen = () => {
    const { open } = this.state;

    if (!open) {
      this.setState({ open: true });
    }
  };

  handleClose = () => {
    const { open } = this.state;

    if (open) {
      this.setState({ open: false });
    }
  };

  render = () => {
    const { classes, className, render, children } = this.props;
    const { open } = this.state;

    if (!render) {
      return children;
    }

    const childrenProps = {
      onMouseMove: this.handleOpen,
      onMouseLeave: this.handleClose,
      ...(open
        ? {
            'aria-describedby': this.id,
          }
        : {}),
    };

    return (
      <Fragment>
        {React.cloneElement(children, childrenProps)}

        {open && (
          <Fragment>
            {ReactDOM.createPortal(
              <Popper id={this.id}>
                <div className={classNames(className, classes.root)}>
                  {// eslint-disable-next-line no-nested-ternary
                  typeof render === 'function' ? (
                    render()
                  ) : typeof render === 'object' ? (
                    render
                  ) : (
                    <TooltipContent>{render}</TooltipContent>
                  )}
                </div>
              </Popper>,
              document.body,
            )}

            <EventListener
              target="window"
              onScroll={withOptions(this.handleClose, {
                passive: true,
                capture: false,
              })}
            />
          </Fragment>
        )}
      </Fragment>
    );
  };
}

export default withStyles(styles)(Tooltip);
