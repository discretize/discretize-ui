/* eslint-disable react/no-this-in-sfc */

import React, { Component as ReactComponent } from 'react';

import { getDisplayName } from '.';

export default (transformProps, keys) => Component => {
  const WithAsyncProp = class extends ReactComponent {
    state = {};

    componentDidMount = async () => this.resolveProps();

    componentDidUpdate = async previousProps => {
      if (
        ((!keys || !keys.length) && previousProps !== this.props) ||
        keys.some(key => previousProps[key] !== this.props[key])
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

    render = () => <Component {...this.props} {...this.state} />;
  };

  WithAsyncProp.displayName = `WithAsyncProp(${getDisplayName(Component)})`;

  return WithAsyncProp;
};
