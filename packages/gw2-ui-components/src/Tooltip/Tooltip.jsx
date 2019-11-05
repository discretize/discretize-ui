import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import EventListener, { withOptions } from 'react-event-listener';

import { withStyles } from '../helpers';
import Popper from '../Popper';
import tooltipBackground from '../assets/images/tooltip-background.png';

const styles = theme => ({
  root: {
    maxWidth: 300,
    zIndex: theme.zIndex.tooltip,
    backgroundColor: '#000',
    border: `2px solid ${theme.palette.border}`,
    boxShadow:
      '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    padding: theme.spacing.unit * 0.5,
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${tooltipBackground})`,
    ...theme.typography.tooltip,
    color: theme.palette.tooltip.primary,
    borderRadius: theme.shape.borderRadius,
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
                  {typeof render === 'function' ? render() : render}
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
