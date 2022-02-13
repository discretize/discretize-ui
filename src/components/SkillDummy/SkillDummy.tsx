import React, { ReactElement } from 'react';
import { Icon, Spinner } from '..';
import { useSkill } from '../../gw2api/hooks';

export interface SkillDummyProps {
  id: number;
}

const SkillDummy = ({ id }: SkillDummyProps): ReactElement => {
  let skill = useSkill(id);

  if (skill === 'LOADING') {
    return <Spinner />;
  } else if (skill === 'ERROR') {
    return <div>Error loading the Skill</div>;
  }
  return (
    <span>
      <Icon src={skill.icon} /> {skill.name}
    </span>
  );
};

export default SkillDummy;
