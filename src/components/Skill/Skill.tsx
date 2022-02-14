import React, { ReactElement } from 'react';

import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import IconWithText, { IconWithTextProps } from '../IconWithText/IconWithText';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import { useSkill } from '../../gw2api/hooks';
import AbilityDetails from '../AbilityDetails/AbilityDetails';
import Error from '../Error/Error';
import css from '../../global.module.css';

export interface SkillProps
  extends Omit<IconWithTextProps, 'icon' | 'text' | 'loading' | 'style'> {
  id: number;
  disableLink?: boolean;
  disableTooltip?: boolean;
  tooltipProps?: TooltipProps;
  wikiLinkProps?: WikiLinkProps;
}

export interface SkillDataProps {
  name: string;
  icon: string;
  professions: string[];
}

const SKILL_ERROR_NAMES: React.ComponentProps<typeof Error>['names'] = {
  404: 'Skill Not Found',
  500: 'Network Error',
};
const SKILL_ERROR_MESSAGES: React.ComponentProps<typeof Error>['messages'] = {
  404: (id) => `The requested skill with the id ${id} was not found.`,
  500: (id) => `A Network Error occured trying to fetch the skill ${id}.`,
};

const Skill = (props: SkillProps): ReactElement => {
  const { id, disableLink, disableTooltip, tooltipProps, wikiLinkProps } =
    props;
  const skill = useSkill(id);

  if (skill.loading) {
    return <IconWithText {...props} loading />;
  }
  if (skill.error) {
    return (
      <Error
        {...props}
        code={skill.error}
        names={SKILL_ERROR_NAMES}
        messages={SKILL_ERROR_MESSAGES}
      />
    );
  }

  const { name, icon, professions } = skill.data;

  let profession;
  if (professions?.length > 0) {
    profession =
      professions[0].charAt(0).toUpperCase() + professions[0].slice(1);
  }

  return (
    <Tooltip
      content={<AbilityDetails data={skill.data} />}
      disabled={disableTooltip}
      {...tooltipProps}
    >
      <IconWithText
        {...props}
        icon={icon}
        text={
          disableLink ? (
            name
          ) : (
            <WikiLink
              to={name}
              {...wikiLinkProps}
              className={profession && css[`coloredProfession${profession}`]}
            />
          )
        }
        className={profession && css[`coloredProfession${profession}`]}
      />
    </Tooltip>
  );
};

export default Skill;
