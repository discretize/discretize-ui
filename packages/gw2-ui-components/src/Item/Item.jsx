import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import withLoading from '../withLoading/index';
import Tooltip from '../Tooltip';
import IconWithText from '../IconWithText';
import WikiLink from '../WikiLink';
import ItemDetails from '../ItemDetails';

const Item = forwardRef(
  (
    {
      id,
      data,
      component,
      upgrades,
      disableIcon,
      disableText,
      disableLink,
      disableTooltip,
      inline,
      tooltipProps,
      wikiLinkProps,
      ...rest
    },
    ref,
  ) => {
    const { name, icon, rarity, details: { type } = {} } = data;

    return (
      <Tooltip
        content={
          <ItemDetails
            data={data}
            upgrades={
              upgrades &&
              upgrades.map(
                (
                  {
                    id: upgradeId,
                    data: upgradeData,
                    loading: upgradeLoading,
                    error: upgradeError,
                    count,
                  },
                  index,
                ) => (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${upgradeId}-${index}`}
                    sx={{
                      marginTop: 4,
                      ...(index < upgrades.length && { marginBottom: 4 }),
                    }}
                  >
                    <ItemDetails
                      upgrade
                      id={upgradeId}
                      loading={upgradeLoading}
                      error={upgradeError}
                      data={upgradeData}
                      upgradeBonusCount={count}
                    />
                  </div>
                ),
              )
            }
          />
        }
        disabled={disableTooltip}
        {...tooltipProps}
      >
        <IconWithText
          component={component}
          icon={icon}
          text={
            disableLink ? (
              name
            ) : (
              <WikiLink
                to={name}
                {...wikiLinkProps}
                sx={{
                  color: 'inherit',
                  '&:hover': { color: `rarity.${rarity.toLowerCase()}.dark` },
                  ...wikiLinkProps?.sx,
                }}
              />
            )
          }
          disableIcon={disableIcon}
          disableText={disableText}
          inline={inline}
          {...rest}
          iconProps={{ placeholder: type, ...rest.iconProps }}
          sx={{
            color: `rarity.${rarity.toLowerCase()}.medium`,
            ...rest.sx,
          }}
          ref={ref}
        />
      </Tooltip>
    );
  },
);

Item.propTypes = {
  id: PropTypes.number,
  component: PropTypes.elementType,
  data: PropTypes.object.isRequired,
  disableIcon: PropTypes.bool,
  disableText: PropTypes.bool,
  disableLink: PropTypes.bool,
  disableTooltip: PropTypes.bool,
  inline: PropTypes.bool,
  tooltipProps: PropTypes.object,
  wikiLinkProps: PropTypes.object,
  upgrades: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
      error: PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
        message: PropTypes.string,
      }),
      count: PropTypes.number,
    }),
  ),
};

Item.defaultProps = {
  id: null,
  component: undefined,
  disableIcon: false,
  disableText: false,
  disableLink: false,
  disableTooltip: false,
  inline: true,
  tooltipProps: {},
  wikiLinkProps: {},
  upgrades: null,
};

Item.displayName = 'Item';

export default withLoading()(Item);
