import { abortRequests } from '@redux-requests/core';
import { Query } from '@redux-requests/react';
import { TraitLine as TraitLineComponent } from 'gw2-ui-components';
import { fetchSpecialization, FETCH_SPECIALIZATION } from 'gw2-ui-redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Trait from '../Trait';

const TraitLine = ({ id, ...rest }) => {
  const requestKey = `${id}`;

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchSpecialization(id));

      return () => {
        dispatch(
          abortRequests([
            FETCH_SPECIALIZATION,
            { requestType: FETCH_SPECIALIZATION, requestKey },
          ]),
        );
      };
    },
    [requestKey],
  );

  return (
    <Query
      type={FETCH_SPECIALIZATION}
      requestKey={requestKey}
      loadingComponent={TraitLineComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={TraitLineComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <TraitLineComponent
          data={data}
          error={error}
          loading={loading}
          traitComponent={Trait}
          {...rest}
        />
      )}
    </Query>
  );
};

export default TraitLine;
