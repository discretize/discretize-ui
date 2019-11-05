import {
  fetchTrait,
  cancelTrait,
  getTraitData,
  getTraitError,
  isTraitFetching,
  isTraitFetched,
} from 'gw2-ui-redux';
import { Trait as TraitComponent } from 'gw2-ui-components';

import withRedux from '../withRedux';

const WrappedTrait = withRedux(
  (state, props) => ({
    data: getTraitData(state, props),
    error: getTraitError(state, props),
    fetching: isTraitFetching(state, props),
    fetched: isTraitFetched(state, props),
  }),
  {
    fetch: fetchTrait,
    cancel: cancelTrait,
  },
)(TraitComponent);

export default WrappedTrait;
