import clsx from 'clsx';
import React, { CSSProperties, ReactElement } from 'react';
import professioncss from '../Profession/professions.module.css';
import { useSkill } from '../../gw2api/hooks';
import AbilityDetails from '../AbilityDetails/AbilityDetails';
import Error from '../Error/Error';
import IconWithText, { IconWithTextProps } from '../IconWithText/IconWithText';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import { ProfessionTypes } from '../../data/professions';

export interface SkillProps
  extends Omit<IconWithTextProps, 'icon' | 'text' | 'loading' | 'style'> {
  id: number;
  text?: string;
  disableLink?: boolean;
  disableTooltip?: boolean;
  tooltipProps?: TooltipProps;
  wikiLinkProps?: WikiLinkProps;
  style?: CSSProperties;
  className?: string;
}

export interface SkillDataProps {
  name: string;
  icon: string;
  professions: string[];
}

const SKILL_ERROR_NAMES = {
  400: 'Bad Request',
  404: 'Skill Not Found',
  500: 'Network Error',
};
const SKILL_ERROR_MESSAGES = {
  400: () => `The id needs to be of type 'number'`,
  404: (id: number) => `The requested skill with the id ${id} was not found.`,
  500: (id: number) =>
    `A Network Error occured trying to fetch the skill ${id}.`,
};

const Skill = (props: SkillProps): ReactElement => {
  const { id, text, disableLink, disableTooltip, tooltipProps, wikiLinkProps } =
    props;

  if (typeof id !== 'number') {
    return (
      <Error
        {...props}
        code={400}
        name={SKILL_ERROR_NAMES}
        message={SKILL_ERROR_MESSAGES}
      />
    );
  }

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

  const profession: ProfessionTypes | undefined = professions?.[0];

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
            text || name
          ) : (
            <WikiLink
              to={name}
              text={text}
              {...wikiLinkProps}
              className={clsx(
                profession && professioncss[`coloredProfession${profession}`],
                wikiLinkProps?.className,
              )}
            />
          )
        }
        className={clsx(
          props.className,
          profession && professioncss[`coloredProfession${profession}`],
        )}
      />
    </Tooltip>
  );
};

export default Skill;
