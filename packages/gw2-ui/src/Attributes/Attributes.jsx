import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBaseAttributes } from 'gw2-ui-components';
import {
  fetchItem as fetchItemAction,
  cancelItem as cancelItemAction,
  getItemData,
  getItemError,
  isItemLoading,
} from 'gw2-ui-redux';

class Attributes extends Component {
  componentDidMount = () => this.fetch();

  componentDidUpdate = ({ items: previousItems }) => {
    const { items } = this.props;

    if (JSON.stringify(previousItems) !== JSON.stringify(items)) {
      this.fetch();
    }
  };

  componentWillUnmount = () => {
    const { items, cancelItem } = this.props;

    if (items) {
      items.forEach(({ id, loading }) => {
        if (loading && id) {
          cancelItem(id);
        }
      });
    }
  };

  fetch = () => {
    const { items, fetchItem } = this.props;

    if (items) {
      items.forEach(({ id, data, error, loading }) => {
        if (!loading && !error && !data && id) {
          fetchItem(id);
        }
      });
    }
  };

  render = () => {
    const { level, children, items } = this.props;

    if (typeof children !== 'function') {
      return null;
    }

    const base = getBaseAttributes(level);

    /* eslint-disable no-param-reassign */
    const {
      attributes: itemAttributes,
      errors: itemErrors,
      item: itemLoading,
    } = (items || []).reduce(
      (result, { data, loading: singleItemLoading, error: itemError }) => {
        if (itemError) {
          if (!result.errors) {
            result.errors = [];
          }

          result.errors.push(itemError);

          return result;
        }
        if (singleItemLoading || !data) {
          if (!result.loading) {
            result.loading = singleItemLoading;
          }

          return result;
        }

        if (data) {
          const {
            details: {
              infix_upgrade: { attributes: singleItemAttributes } = {},
            } = {},
          } = data;

          if (singleItemAttributes) {
            singleItemAttributes.forEach(({ attribute, modifier }) => {
              result.attributes[attribute] =
                (result.attributes[attribute] || 0) + modifier;
            });
          }
        }

        return result;
      },
      { attributes: {}, errors: null, loading: false },
    );
    /* eslint-enable no-param-reassign */

    const props = {
      base,
      items: {
        attributes: itemAttributes,
        errors: itemErrors,
        loading: itemLoading,
      },
    };

    return children(props);
  };
}

Attributes.propTypes = {
  level: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      data: PropTypes.object,
      error: PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
        message: PropTypes.string,
      }),
      loading: PropTypes.bool,
    }),
  ),
  fetchItem: PropTypes.func.isRequired,
  cancelItem: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

Attributes.defaultProps = {
  level: null,
  items: [],
};

Attributes.displayName = 'Attributes';

export default connect(
  (state, props) =>
    props.items && {
      items: props.items.map(id => ({
        id,
        data: getItemData(state, { id }),
        error: getItemError(state, { id }),
        loading: isItemLoading(state, { id }),
      })),
    },
  {
    fetchItem: fetchItemAction,
    cancelItem: cancelItemAction,
  },
)(Attributes);
