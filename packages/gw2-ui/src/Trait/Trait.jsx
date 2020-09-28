import { abortRequests } from '@redux-requests/core';
import { Query } from '@redux-requests/react';
import { Trait as TraitComponent } from 'gw2-ui-components';
import { fetchTrait, FETCH_TRAIT } from 'gw2-ui-redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Trait = ({ id, ...rest }) => {
  const requestKey = `${id}`;

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchTrait(requestKey));

      return () => {
        dispatch(
          abortRequests([
            FETCH_TRAIT,
            { requestType: FETCH_TRAIT, requestKey },
          ]),
        );
      };
    },
    [dispatch, requestKey],
  );

  return (
    <Query
      type={FETCH_TRAIT}
      requestKey={requestKey}
      loadingComponent={TraitComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={TraitComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <TraitComponent data={data} error={error} loading={loading} {...rest} />
      )}
    </Query>
  );
};

export default Trait;
