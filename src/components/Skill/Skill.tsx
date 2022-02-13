import React, { ReactElement } from 'react';

import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import { useSkill } from '../../gw2api/hooks';

export interface SkillProps {
  id: number;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
  wikiLinkProps?: WikiLinkProps;
}

export interface SkillDataProps {
  name: string;
  icon: string;
  professions: string[];
}

const Skill = ({
  id,
  disableIcon,
  disableText,
  disableLink,
  disableTooltip,
  inline,
  tooltipProps,
  wikiLinkProps,
}: SkillProps): ReactElement => {
  const data = useSkill(id);

  const { name, icon, professions } = data;

  const profession = professions?.length && professions[0].toLowerCase();
  //TODO add error handling
  return (
    <Tooltip
      content={
        /* <AbilityDetails data={data} type="skills" /> */
        <>{JSON.stringify(data)}</>
      }
      disabled={disableTooltip}
      {...tooltipProps}
    >
      <IconWithText
        loading={data === 'LOADING'}
        icon={icon}
        text={
          disableLink ? (
            name
          ) : (
            <WikiLink
              to={name}
              {...wikiLinkProps}
              sx={{
                // TODO remove theme-ui from here. Unsure how to proceed.
                color: 'inherit',
                '&:hover': {
                  color: `var(--gw2-color-${profession}-dark)`,
                },
                ...wikiLinkProps?.sx,
              }}
            />
          )
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{ zoom: 5 }}
        style={{ color: `var(--gw2-color-${profession}-main)` }}
      />
    </Tooltip>
  );
};

export default Skill;
