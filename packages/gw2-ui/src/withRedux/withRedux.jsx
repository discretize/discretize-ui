import React from 'react';
import { connect } from 'react-redux';

import { getDisplayName } from 'gw2-ui-components';

export default (
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  options,
) => Component => {
  const WithRedux = class extends React.Component {
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
  };

  WithRedux.displayName = `WithRedux(${getDisplayName(Component)})`;

  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options,
  )(WithRedux);
};
