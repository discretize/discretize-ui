import React from 'react';
import { connect } from 'react-redux';

import { Loader, getDisplayName } from 'gw2-ui-components';

export default (
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  options,
) => Component => {
  const WithRedux = class extends React.Component {
    componentDidMount = () => this.fetch();

    componentDidUpdate = ({ id: previousId }) => {
      const { id } = this.props;

      if (previousId !== id) {
        this.fetch();
      }
    };

    componentWillUnmount = () => {
      const { fetching, cancel, id } = this.props;

      if (fetching && cancel && id) {
        cancel(id);
      }
    };

    fetch = () => {
      const { fetching, error, fetched, fetch, id } = this.props;

      if (!fetching && !error && !fetched && fetch && id) {
        fetch(id);
      }
    };

    render = () => {
      const {
        fetching,
        error,
        fetched,
        fetch,
        cancel,
        id,
        data,
        ...rest
      } = this.props;

      if (fetching) {
        return <Loader />;
      }

      if (error) {
        const { message, status } = error;

        return (
          <Component
            error={{
              code: status,
              name: id,
              message,
            }}
            {...rest}
          />
        );
      }

      if (!fetched) {
        return null;
      }

      return <Component data={data} {...rest} />;
    };
  };

  WithRedux.displayName = `WithRedux(${getDisplayName(Component)})`;

  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options,
  )(WithRedux);
};
