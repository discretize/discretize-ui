import {
  fetchTrait,
  cancelTrait,
  getTraitData,
  getTraitError,
  isTraitLoading,
} from 'gw2-ui-redux';
import { Trait as TraitComponent } from 'gw2-ui-components';

import withRedux from '../withRedux';

const WrappedTrait = withRedux(
  (state, props) => ({
    data: getTraitData(state, props),
    error: getTraitError(state, props),
    loading: isTraitLoading(state, props),
  }),
  {
    fetch: fetchTrait,
    cancel: cancelTrait,
  },
)(TraitComponent);

export default WrappedTrait;
