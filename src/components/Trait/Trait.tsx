import React, { ReactElement } from 'react';

import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import TooltipContainer from '../TooltipContainer/TooltipContainer';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import AbilityDetails from '../AbilityDetails/AbilityDetails';
import SPECIALIZATIONS from '../../data/specializations';
import globalcss from '../../global.module.css';
import css from './Trait.module.css';
import capitalize from 'lodash.capitalize';
import { useTrait } from '../../gw2api/hooks';
import Error from '../Error/Error';

export interface TraitProps {
  id: number;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
  wikiLinkProps?: WikiLinkProps;
  inactive?: boolean;
}

const TRAIT_ERROR_NAMES = {
  404: 'Trait Not Found',
  500: 'Network Error',
};
const TRAIT_ERROR_MESSAGES = {
  404: (id: number) => `The requested trait with the id ${id} was not found.`,
  500: (id: number) =>
    `A Network Error occured trying to fetch the trait ${id}.`,
};

const Trait = (props: TraitProps): ReactElement => {
  const {
    id,
    disableIcon,
    disableText,
    disableLink,
    disableTooltip,
    inline,
    tooltipProps,
    wikiLinkProps,
    inactive,
  } = props;
  const trait = useTrait(id);

  if (trait.loading) {
    return <IconWithText {...props} loading />;
  }
  if (trait.error) {
    return (
      <Error
        {...props}
        code={trait.error}
        name={TRAIT_ERROR_NAMES}
        message={TRAIT_ERROR_MESSAGES}
      />
    );
  }

  const { name, icon, specialization, skills, slot } = trait.data;

  const [professionRaw] = (specialization &&
    Object.entries(SPECIALIZATIONS).find(([, specializationIds]) =>
      specializationIds.includes(specialization),
    )) || [''];
  const profession = capitalize(professionRaw);

  return (
    <Tooltip
      render={
        <>
          <TooltipContainer {...(skills && { className: css.ability })}>
            <AbilityDetails data={trait.data} />
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
