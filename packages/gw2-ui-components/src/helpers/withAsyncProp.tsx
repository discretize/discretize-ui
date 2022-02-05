/* eslint-disable react/no-this-in-sfc */

import React, { Component as ReactComponent, forwardRef } from 'react';

import { getDisplayName } from '.';

export default (transformProps, keys) => (Component) => {
  class WithAsyncProp extends ReactComponent {
    state = {};

    componentDidMount = async () => this.resolveProps();

    componentDidUpdate = async (previousProps) => {
      if (
        ((!keys || !keys.length) && previousProps !== this.props) ||
        keys.some((key) => previousProps[key] !== this.props[key])
      ) {
        await this.resolveProps();
      }
    };

    shouldComponentUpdate = (nextProps, nextState) => {
      if (nextState !== this.state) {
        return true;
      }

      const { [keys]: transformed, ...rest } = this.props;
      const { [keys]: nextTransformed, ...nextRest } = nextProps;

      return { ...rest } !== { ...nextRest };
    };

    resolveProps = async () =>
      Promise.all(
        Object.entries(transformProps(this.props) || {})
          .filter(([, transform]) => !!transform)
          .map(async ([key, transform]) => {
            try {
              const value = await transform;
              this.setState({ [key]: value });
            } catch (error) {
              this.setState({ [key]: null });
            }
          }),
      );

    render = () => {
      const { forwardedRef, ...rest } = this.props;
      return <div ref={forwardedRef} {...rest} {...this.state} />;
    };
  }

  const forwardRefFn = (props, ref) => (
    <WithAsyncProp {...props} forwardedRef={ref} />
  );

  forwardRefFn.displayName = `WithAsyncProp(${getDisplayName(Component)})`;

  return forwardRef(forwardRefFn);
};
