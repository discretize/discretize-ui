import {
  fetchSpecialization,
  cancelSpecialization,
  getSpecializationData,
  getSpecializationError,
  isSpecializationLoading,
} from 'gw2-ui-redux';
import { Specialization as SpecializationComponent } from 'gw2-ui-components';

import withRedux from '../withRedux';

const WrappedSpecialization = withRedux(
  (state, props) =>
    props.id && {
      data: getSpecializationData(state, props),
      error: getSpecializationError(state, props),
      loading: isSpecializationLoading(state, props),
    },
  {
    fetch: fetchSpecialization,
    cancel: cancelSpecialization,
  },
)(SpecializationComponent);

export default WrappedSpecialization;
