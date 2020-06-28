import {
  fetchSkill,
  cancelSkill,
  getSkillData,
  getSkillError,
  isSkillLoading,
} from 'gw2-ui-redux';
import { Skill as SkillComponent } from 'gw2-ui-components';

import withRedux from '../withRedux';

const WrappedSkill = withRedux(
  (state, props) => ({
    data: getSkillData(state, props),
    error: getSkillError(state, props),
    loading: isSkillLoading(state, props),
  }),
  {
    fetch: fetchSkill,
    cancel: cancelSkill,
  },
)(SkillComponent);

export default WrappedSkill;
