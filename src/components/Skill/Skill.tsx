import React, { ReactElement } from 'react';

import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import IconWithText, { IconWithTextProps } from '../IconWithText/IconWithText';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import { useSkill } from '../../gw2api/hooks';
import AbilityDetails from '../AbilityDetails/AbilityDetails';
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

const Skill = (props: SkillProps): ReactElement => {
  const { id, disableLink, disableTooltip, tooltipProps, wikiLinkProps } =
    props;
  const skill = useSkill(id);

  if (skill.loading) {
    return <IconWithText {...props} loading />;
  }
  if (skill.error) {
    // TODO: port and use <Error />
    return (
      <IconWithText
        {...props}
        text="Unknown Skill"
        // TODO: decide on a good error icon
        icon="https://render.guildwars2.com/file/A5DE06130C0D1E2C9A9780EAD037E61462B1E825/102597.png"
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
