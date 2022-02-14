import React, { ReactElement } from 'react';

import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import TooltipContainer from '../TooltipContainer/TooltipContainer';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import AbilityDetails from '../AbilityDetails/AbilityDetails';
import specializations from '../../helpers/specializations';
import GW2ApiTrait from '../../gw2api/types/traits/trait';
import globalcss from '../../global.module.css';
import css from './Trait.module.css';

export interface TraitProps {
  data: GW2ApiTrait;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
  wikiLinkProps?: WikiLinkProps;
  inactive?: boolean;
}

const Trait = ({
  data,
  disableIcon,
  disableText,
  disableLink,
  disableTooltip,
  inline,
  tooltipProps,
  wikiLinkProps,
  inactive,
}: TraitProps): ReactElement => {
  const { name, icon, specialization, skills, slot } = data;

  const [professionRaw] =
    (specialization &&
      Object.entries(specializations).find(([, specializationIds]) =>
        specializationIds.includes(specialization),
      )) ||
    [];
  const profession = professionRaw
    ? professionRaw?.charAt(0).toUpperCase() + professionRaw?.slice(1)
    : undefined;

  return (
    <Tooltip
      render={
        <>
          <TooltipContainer {...(skills && { className: css.ability })}>
            <AbilityDetails data={data} />
          </TooltipContainer>

          {skills &&
            skills.map((skill) => (
              <TooltipContainer key={`${skill.id}`} className={css.traitSkill}>
                <AbilityDetails data={skill} />
              </TooltipContainer>
            ))}
        </>
      }
      disabled={disableTooltip}
      {...tooltipProps}
    >
      <IconWithText
        icon={icon}
        text={
          disableLink ? (
            name
          ) : (
            <WikiLink
              to={name}
              {...wikiLinkProps}
              className={
                profession && globalcss[`coloredProfession${profession}`]
              }
            />
          )
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{
          zoom: 13,
          inactive,
          hexagon: slot === 'Minor',
        }}
        className={profession && globalcss[`coloredProfession${profession}`]}
      />
    </Tooltip>
  );
};

export default Trait;
