import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDisplayName } from 'gw2-ui-components';

export default (
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  options,
) => Component => {
  class WithRedux extends React.Component {
    componentDidMount = () => this.fetch();

    componentDidUpdate = ({ id: previousId, upgrades: previousUpgrades }) => {
      const { id, upgrades } = this.props;

      if (
        previousId !== id ||
        JSON.stringify(
          previousUpgrades && previousUpgrades.length
            ? previousUpgrades.map(({ id: upgradeId }) => upgradeId)
            : previousUpgrades,
        ) !==
          JSON.stringify(
            upgrades && upgrades.length
              ? upgrades.map(({ id: upgradeId }) => upgradeId)
              : upgrades,
          )
      ) {
        this.fetch();
      }
    };

    componentWillUnmount = () => {
      const { loading, cancel, id, upgrades } = this.props;

      if (loading && cancel && id) {
        cancel(id);
      }

      if (upgrades && upgrades.length && cancel) {
        upgrades.forEach(({ id: upgradeId, loading: upgradeLoading }) => {
          if (upgradeLoading && upgradeId) {
            cancel(upgradeId);
          }
        });
      }
    };

    fetch = () => {
      const { loading, error, fetch, data, id, upgrades } = this.props;

      if (!loading && !error && !data && fetch && id) {
        fetch(id);
      }

      if (upgrades && upgrades.length && fetch) {
        upgrades.forEach(
          ({
            id: upgradeId,
            data: upgradeData,
            error: upgradeError,
            loading: upgradeLoading,
          }) => {
            if (!upgradeLoading && !upgradeError && !upgradeData && upgradeId) {
              fetch(upgradeId);
            }
          },
        );
      }
    };

    render = () => {
      const { fetch, cancel, ...rest } = this.props;

      return <Component {...rest} />;
    };
  }

  WithRedux.propTypes = {
    id: PropTypes.number.isRequired,
    data: PropTypes.object,
    error: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      message: PropTypes.string,
    }),
    upgrades: PropTypes.array,
    loading: PropTypes.bool,
    fetch: PropTypes.func,
    cancel: PropTypes.func,
  };

  WithRedux.defaultProps = {
    data: null,
    error: null,
    upgrades: null,
    loading: null,
    fetch: null,
    cancel: null,
  };

  WithRedux.displayName = `WithRedux(${getDisplayName(Component)})`;

  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options,
  )(WithRedux);
};
