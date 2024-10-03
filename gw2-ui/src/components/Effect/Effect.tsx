import clsx from 'clsx';
import { capitalize } from '../../helpers/capitalize';
import React, { type CSSProperties, type ReactElement } from 'react';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
import Error, { type ErrorProps } from '../Error/Error';
import { type IconProps } from '../Icon/Icon';
import IconWithText from '../IconWithText/IconWithText';
import Tooltip, { type TooltipProps } from '../Tooltip/Tooltip';
import WikiLink, { type WikiLinkProps } from '../WikiLink/WikiLink';
import css from './Effect.module.css';

export interface EffectProps {
  type:
    | 'Augmentation'
    | 'Aura'
    | 'Boon'
    | 'Condition'
    | 'Control'
    | 'Consumable'
    | 'Common'
    | 'MistlockInstability';
  name: string;
  displayName?: string;
  description?: string;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
  wikiLinkProps?: WikiLinkProps;
  errorProps?: ErrorProps;
  iconProps?: IconProps;
  className?: string;
  style?: CSSProperties;
}

const Effect = ({
  type,
  name,
  displayName,
  description,
  disableTooltip = false,
  disableText = false,
  disableLink = false,
  disableIcon = false,
  inline,
  tooltipProps,
  wikiLinkProps,
  errorProps,
  iconProps,
  className,
  style,
}: EffectProps): ReactElement => {
  if (!type || !name || typeof description === 'undefined') {
    return (
      <Error
        code={404}
        name={`Invalid ${type || 'Effect'}${name ? ` ${name}` : ''}`}
        message={`Error: No data for ${type || 'Effect'}${
          name ? ` ${name}` : ''
        }`}
        disableTooltip={disableTooltip}
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        {...errorProps}
        className={clsx(className, errorProps?.className)}
        style={{
          ...style,
          ...errorProps?.style,
        }}
      />
    );
  }

  return (
    <Tooltip
      content={
        <>
          <DetailsHeader>{displayName || name}</DetailsHeader>

          {description && <DetailsText lines={[description]} />}
        </>
      }
      disabled={disableTooltip}
      {...tooltipProps}
    >
      <IconWithText
        text={
          disableLink ? (
            displayName || name
          ) : (
            <WikiLink
              to={name}
              text={displayName}
              {...wikiLinkProps}
              className={clsx(
                wikiLinkProps?.className,
                css[`color${capitalize(type)}Main`],
              )}
            />
          )
        }
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{
          ...iconProps,
          className:
            css[`image${type}${name.replaceAll(' ', '').replaceAll(',', '')}`],
          iconViaClassname: true,
        }}
        style={style}
        className={clsx(className, css[`color${capitalize(type)}Main`])}
      />
    </Tooltip>
  );
};

export default Effect;
