import { abortRequests } from '@redux-requests/core';
import { Query } from '@redux-requests/react';
import { Skill as SkillComponent } from 'gw2-ui-components';
import { fetchSkill, FETCH_SKILL } from 'gw2-ui-redux';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Skill = ({ id, ...rest }) => {
  const requestKey = `${id}`;

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchSkill(requestKey));

      return () => {
        dispatch(
          abortRequests([
            FETCH_SKILL,
            { requestType: FETCH_SKILL, requestKey },
          ]),
        );
      };
    },
    [dispatch, requestKey],
  );

  return (
    <Query
      type={FETCH_SKILL}
      requestKey={requestKey}
      loadingComponent={SkillComponent}
      loadingComponentProps={{ id, ...rest, loading: true }}
      errorComponent={SkillComponent}
      errorComponentProps={{ id, ...rest }}
    >
      {({ data, error, loading }) => (
        <SkillComponent data={data} error={error} loading={loading} {...rest} />
      )}
    </Query>
  );
};

export default Skill;
