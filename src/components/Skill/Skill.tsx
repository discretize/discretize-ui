import clsx from 'clsx';
import capitalize from 'lodash.capitalize';
import React, { ReactElement } from 'react';
import globalcss from '../../global.module.css';
import { useSkill } from '../../gw2api/hooks';
import AbilityDetails from '../AbilityDetails/AbilityDetails';
import Error from '../Error/Error';
import IconWithText, { IconWithTextProps } from '../IconWithText/IconWithText';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';

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
        name={SKILL_ERROR_NAMES}
        message={SKILL_ERROR_MESSAGES}
      />
    );
  }

  const { name, icon, professions } = skill.data;

  let profession;
  if (professions?.length > 0) {
    profession = capitalize(professions[0]);
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
              className={clsx(
                profession && globalcss[`coloredProfession${profession}`],
                wikiLinkProps?.className,
              )}
            />
          )
        }
        className={profession && globalcss[`coloredProfession${profession}`]}
      />
    </Tooltip>
  );
};

export default Skill;
