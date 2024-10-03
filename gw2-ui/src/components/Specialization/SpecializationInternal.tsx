import clsx from 'clsx';
import { type CSSProperties, type ReactElement } from 'react';
import type GW2ApiSpecialization from '../../gw2api/types/specialization/specialization';
import IconWithText from '../IconWithText/IconWithText';
import professioncss from '../Profession/professions.module.css';
import Tooltip from '../Tooltip/Tooltip';
import WikiLink from '../WikiLink/WikiLink';
import SpecializationTooltip from './SpecializationTooltip';

export interface SpecializationInternalProps {
  data: GW2ApiSpecialization;
  text?: string;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  inline?: boolean;
  style?: CSSProperties;
  className?: string;
}

const SpecializationInternal = (
  props: SpecializationInternalProps,
): ReactElement => {
  const {
    data,
    text,
    disableIcon,
    disableText,
    disableLink,
    inline,
    style,
    className,
  } = props;
  const { name, icon, profession } = data;

  return (
    <Tooltip content={<SpecializationTooltip data={data} />}>
      <IconWithText
        icon={icon}
        text={
          disableLink ? (
            text || name
          ) : (
            <WikiLink
              to={name}
              text={text}
              className={clsx(
                profession && professioncss[`coloredProfession${profession}`],
              )}
            />
          )
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{ hexagon: true }}
        style={style}
        className={clsx(
          className,
          profession && professioncss[`coloredProfession${profession}`],
        )}
      />
    </Tooltip>
  );
};

export default SpecializationInternal;
