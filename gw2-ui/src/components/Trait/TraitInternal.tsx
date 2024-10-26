import { type MouseEventHandler, type ReactElement } from 'react';

import clsx from 'clsx';
import { type CSSProperties } from 'react';
import SPECIALIZATIONS from '../../data/specializations';
import type GW2ApiTrait from '../../gw2api/types/traits/trait';
import AbilityDetails from '../AbilityDetails/AbilityDetails';
import IconWithText from '../IconWithText/IconWithText';
import professioncss from '../Profession/professions.module.css';
import Tooltip, { type TooltipProps } from '../Tooltip/Tooltip';
import TooltipContainer from '../TooltipContainer/TooltipContainer';
import WikiLink, { type WikiLinkProps } from '../WikiLink/WikiLink';
import css from './Trait.module.css';

export interface TraitInternalProps {
  data: GW2ApiTrait;
  text?: string;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: Partial<TooltipProps>;
  wikiLinkProps?: Partial<WikiLinkProps>;
  inactive?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

const TraitInternal = (props: TraitInternalProps): ReactElement => {
  const {
    data,
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

  const { name, icon, specialization, skills, slot } = data;

  const [profession] = (specialization &&
    Object.entries(SPECIALIZATIONS).find(([, specializationIds]) =>
      specializationIds.includes(specialization),
    )) || [''];

  return (
    <Tooltip
      render={
        <>
          <TooltipContainer {...(skills && { className: css.ability })}>
            <AbilityDetails data={data} />
          </TooltipContainer>

          {skills &&
            skills.map((skill, index) => (
              <TooltipContainer
                key={`${skill.id}-${index}`}
                className={css.traitSkill}
              >
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

export default TraitInternal;
