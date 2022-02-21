import React, { MouseEventHandler, ReactElement } from 'react';

import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import TooltipContainer from '../TooltipContainer/TooltipContainer';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink, { WikiLinkProps } from '../WikiLink/WikiLink';
import AbilityDetails from '../AbilityDetails/AbilityDetails';
import SPECIALIZATIONS from '../../data/specializations';
import professioncss from '../Profession/professions.module.css';
import css from './Trait.module.css';
import { capitalize } from '../../helpers/capitalize';
import { useTrait } from '../../gw2api/hooks';
import Error from '../Error/Error';
import clsx from 'clsx';
import { CSSProperties } from 'react';

export interface TraitProps {
  id: number;
  text?: string;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
  wikiLinkProps?: WikiLinkProps;
  inactive?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
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
    text,
    disableIcon,
    disableText,
    disableLink,
    disableTooltip,
    inline,
    tooltipProps,
    wikiLinkProps,
    inactive,
    style,
    className,
    onClick,
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
            text || name
          ) : (
            <WikiLink
              to={name}
              text={text}
              {...wikiLinkProps}
              className={
                profession && professioncss[`coloredProfession${profession}`]
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
        style={style}
        className={clsx(
          className,
          profession && professioncss[`coloredProfession${profession}`],
        )}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default Trait;
