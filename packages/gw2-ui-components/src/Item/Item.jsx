import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '../helpers';
import Tooltip, { TooltipContent } from '../Tooltip';
import Error from '../Error';
import IconWithText from '../IconWithText';
import WikiLink from '../WikiLink';
import ItemTooltipContent from './ItemTooltipContent';
import Loader from '../Loader';

const styles = theme => ({
  root: {},
  icon: {},
  text: {},
  link: {},
  tooltip: {},
  ...Object.assign(
    ...Object.entries(theme.colors.rarity).map(
      ([rarity, { medium: color, [theme.palette.link.type]: hoverColor }]) => ({
        [rarity]: {
          color,
          '& $link': {
            '&:hover': {
              color: hoverColor,
            },
          },
        },
      }),
    ),
  ),
});

const Item = ({
  data,
  error,
  classes,
  className,
  component,
  upgrades,
  disableIcon,
  disableText,
  disableLink,
  disableTooltip,
  inline,
  iconProps,
  tooltipProps,
  errorProps,
  ...rest
}) => {
  if (error || !data) {
    const { code = 500, name, message = !data ? 'No data' : 'Unknown error' } =
      error || {};
    const {
      code: ignoredCode,
      name: ignoredName,
      message: ignoredMessage,
      ...errorRest
    } = {
      ...rest,
    };

    return (
      <Error
        code={code}
        name={name ? `Item ${name}` : 'Invalid item'}
        message={message}
        component={component}
        disableTooltip={disableTooltip}
        disableIcon={disableIcon}
        disableText={disableText}
        inline={inline}
        iconProps={iconProps}
        tooltipProps={tooltipProps}
        {...errorProps}
        {...errorRest}
      />
    );
  }

  const { name, icon, rarity, details: { type } = {} } = data;
  const rarityClass = rarity && classes[rarity.toLowerCase()];
  const { icon: ignoredIcon, text: ignoredText, ...iconWithTextRest } = {
    ...rest,
  };

  const iconWithText = (
    <IconWithText
      className={classNames(classes.root, className)}
      classes={{
        icon: classes.icon,
        text: classNames(classes.text, rarityClass),
      }}
      component={component}
      icon={icon}
      text={
        disableLink ? (
          name
        ) : (
          <WikiLink
            className={classes.link}
            to={name}
            {...rarityClass && { color: 'inherit' }}
          />
        )
      }
      disableIcon={disableIcon}
      disableText={disableText}
      inline={inline}
      iconProps={{ placeholder: type, ...iconProps }}
      {...iconWithTextRest}
    />
  );

  return disableTooltip ? (
    iconWithText
  ) : (
    <Tooltip
      className={classes.tooltip}
      render={
        <TooltipContent>
          <ItemTooltipContent
            data={data}
            nestedContent={upgrades.map(
              (
                {
                  id,
                  data: upgradeData,
                  fetching: upgradeFetching,
                  error: upgradeError,
                  fetched: upgradeFetched,
                  count,
                },
                index,
              ) => {
                let content;

                if (upgradeFetching) {
                  content = <Loader />;
                }

                if (content === undefined && upgradeError) {
                  const { message } = upgradeError;

                  content = (
                    <Error
                      name={`Invalid upgrade ${id} (${message})`}
                      disableTooltip
                    />
                  );
                }

                if (content === undefined && !upgradeFetched) {
                  content = null;
                }

                if (content === undefined) {
                  content = (
                    <ItemTooltipContent
                      data={upgradeData}
                      bonusCount={count}
                      nested
                    />
                  );
                }

                // eslint-disable-next-line react/no-array-index-key
                return <Fragment key={`${id}-${index}`}>{content}</Fragment>;
              },
            )}
            {...tooltipProps}
            classes={{
              ...(rarityClass && { title: rarityClass }),
              ...tooltipProps.classes,
            }}
          />
        </TooltipContent>
      }
    >
      {iconWithText}
    </Tooltip>
  );
};

Item.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  data: PropTypes.object,
  error: PropTypes.object,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  disableLink: PropTypes.bool,
  disableTooltip: PropTypes.bool,
  inline: PropTypes.bool,
  iconProps: PropTypes.object,
  tooltipProps: PropTypes.object,
  errorProps: PropTypes.object,
  upgrades: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.object,
      fetched: PropTypes.bool,
      fetching: PropTypes.bool,
      error: PropTypes.object,
      count: PropTypes.number,
    }),
  ),
};

Item.defaultProps = {
  component: undefined,
  data: null,
  error: null,
  disableIcon: false,
  disableText: false,
  disableLink: false,
  disableTooltip: false,
  inline: true,
  iconProps: {},
  tooltipProps: {},
  errorProps: {},
  upgrades: [],
};

export default withStyles(styles)(Item);
