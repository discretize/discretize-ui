import React, { ReactElement } from 'react';

import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
import IconWithText from '../IconWithText/IconWithText';
import css from './Error.module.css';
import iconcss from '../Icon/Icon.module.css';

export interface ErrorProps {
  code: number;
  name: string;
  message: string;
  disableIcon?: boolean;
  disableText?: boolean;
  disableTooltip?: boolean;
  inline?: boolean;
  tooltipProps?: TooltipProps;
}

const Error = ({
  code,
  name,
  message,
  disableIcon,
  disableText,
  disableTooltip,
  inline,
  tooltipProps,
}: ErrorProps): ReactElement => {
  const errorIconClass =
    code === 404 ? iconcss.imageError404 : iconcss.imageError500;
  return (
    <Tooltip
      content={
        <>
          <DetailsHeader
            iconProps={{ className: errorIconClass, iconViaClassname: true }}
            titleClassName={css.errorColor}
          >
            {name}
          </DetailsHeader>
          <DetailsText
            lines={[
              <>
                {message}
                {code && ` (code ${code})`}
              </>,
            ]}
          />
        </>
      }
      disabled={disableTooltip}
      {...tooltipProps}
    >
      <IconWithText
        text={name}
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={{ className: errorIconClass, iconViaClassname: true }}
        className={css.errorColor}
      />
    </Tooltip>
  );
};

export default Error;
