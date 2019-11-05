import {
  fetchSkill,
  cancelSkill,
  getSkillData,
  getSkillError,
  isSkillFetching,
  isSkillFetched,
} from 'gw2-ui-redux';
import { Skill as SkillComponent } from 'gw2-ui-components';

import withRedux from '../withRedux';

const WrappedSkill = withRedux(
  (state, props) => ({
    data: getSkillData(state, props),
    error: getSkillError(state, props),
    fetching: isSkillFetching(state, props),
    fetched: isSkillFetched(state, props),
  }),
  {
    fetch: fetchSkill,
    cancel: cancelSkill,
  },
)(SkillComponent);

export default WrappedSkill;
