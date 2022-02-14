import React, { ReactElement } from 'react';

import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import IconWithText, { IconWithTextProps } from '../IconWithText/IconWithText';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import { useSkill } from '../../gw2api/hooks';
import AbilityDetails from '../AbilityDetails/AbilityDetails';
import css from '../../global.module.css';
import Error from '../Error/Error';

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

const Skill = (props: SkillProps): ReactElement => {
  const { id, disableLink, disableTooltip, tooltipProps, wikiLinkProps } =
    props;
  const skill = useSkill(id);

  if (skill.loading) {
    return <IconWithText {...props} loading />;
  }
  if (skill.error) {
    // TODO differentiate between 404 and 5xx errors
    return (
      <Error
        {...props}
        code={404}
        name="Not Found"
        message={`The requested item with the id ${id} was not found`}
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
