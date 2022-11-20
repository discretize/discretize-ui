import { ReactElement } from 'react';
import { useSkill } from '../../gw2api/hooks';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import SkillInternal, { SkillInternalProps } from './SkillInternal';

export interface SkillProps extends Omit<SkillInternalProps, 'data'> {
  id: number;
}

const SKILL_ERROR_NAMES = {
  404: 'Skill Not Found',
  500: 'Network Error',
};
const SKILL_ERROR_MESSAGES = {
  404: (id: number) => `The requested skill with the id ${id} was not found.`,
  500: (id: number) =>
    `A Network Error occured trying to fetch the skill ${id}.`,
};

const Skill = (props: SkillProps): ReactElement => {
  const skill = useSkill(props.id);

  if (skill.loading) {
    return <IconWithText {...props} loading />;
  }

  if (skill.error) {
    return (
      <Error
        {...props}
        code={skill.error}
        name={SKILL_ERROR_NAMES}
        message={SKILL_ERROR_MESSAGES}
      />
    );
  }

  return <SkillInternal {...props} data={skill.data} />;
};

export default Skill;
