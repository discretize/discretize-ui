import React from 'react';

import {
  fetchSpecialization,
  cancelSpecialization,
  getSpecializationData,
  getSpecializationError,
  isSpecializationFetching,
  isSpecializationFetched,
} from 'gw2-ui-redux';
import { TraitLine as TraitLineComponent } from 'gw2-ui-components';

import withRedux from '../withRedux';
import Trait from '../Trait';

const WrappedTraitLine = withRedux(
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
)(props => <TraitLineComponent {...props} traitComponent={Trait} />);

export default WrappedTraitLine;
