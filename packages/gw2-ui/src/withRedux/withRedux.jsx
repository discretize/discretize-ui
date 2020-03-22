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
      const { fetching, cancel, id, upgrades } = this.props;

      if (fetching && cancel && id) {
        cancel(id);
      }

      if (upgrades && upgrades.length && cancel) {
        upgrades.forEach(({ id: upgradeId, fetching: upgradeFetching }) => {
          if (upgradeFetching && upgradeId) {
            cancel(upgradeId);
          }
        });
      }
    };

    fetch = () => {
      const { fetching, error, fetched, fetch, id, upgrades } = this.props;

      if (!fetching && !error && !fetched && fetch && id) {
        fetch(id);
      }

      if (upgrades && upgrades.length && fetch) {
        upgrades.forEach(
          ({
            id: upgradeId,
            error: upgradeError,
            fetching: upgradeFetching,
            fetched: upgradeFetched,
          }) => {
            if (
              !upgradeFetching &&
              !upgradeError &&
              !upgradeFetched &&
              upgradeId
            ) {
              fetch(upgradeId);
            }
          },
        );
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
