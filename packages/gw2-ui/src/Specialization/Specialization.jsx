import {
  fetchSpecialization,
  cancelSpecialization,
  getSpecializationData,
  getSpecializationError,
  isSpecializationFetching,
  isSpecializationFetched,
} from 'gw2-ui-redux';
import { Specialization as SpecializationComponent } from 'gw2-ui-components';

import withRedux from '../withRedux';

const WrappedSpecialization = withRedux(
  (state, props) => ({
    data: getSpecializationData(state, props),
    error: getSpecializationError(state, props),
    fetching: isSpecializationFetching(state, props),
    fetched: isSpecializationFetched(state, props),
  }),
  {
    fetch: fetchSpecialization,
    cancel: cancelSpecialization,
  },
)(SpecializationComponent);

export default WrappedSpecialization;
