import React, { Fragment, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ClassNames } from '@emotion/core';

import { useThemeUI } from '@theme-ui/core';
import withLoading from '../withLoading/index';
import DetailsHeader from '../DetailsHeader';
import DetailsText from '../DetailsText';
import { formatFlavor, apiAttributes } from '../helpers';
import Coin from '../Coin';

const ItemDetails = forwardRef(
  (
    {
      upgrade,
      upgrades,
      upgradeBonusCount,
      data: {
        icon,
        name,
        rarity,
        level,
        description,
        flags = [],
        type,
        details: {
          type: detailsType,
          min_power: minPower,
          max_power: maxPower,
          defense,
          weight_class: weightClass,
          infix_upgrade: {
            attributes,
            buff: { description: buffDescription } = {},
          } = {},
          bonuses,
        } = {},
        vendor_value: vendorValue,
      },
      // remove ignored props from withLoading
      /* eslint-disable react/prop-types */
      component: ignoredComponent,
      disableIcon: ignoredDisableIcon,
      disableText: ignoredDisableText,
      disableTooltip: ignoredDisableTooltip,
      inline: ignoredInline,
      /* eslint-enable react/prop-types */
      ...rest
    },
    ref,
  ) => {
    const {
      theme: { colors: { details: { flavor } = {} } = {} } = {},
    } = useThemeUI();

    return (
      <div {...rest} ref={ref}>
        <DetailsHeader
          icon={icon}
          iconProps={{
            ...(type &&
              detailsType && {
                name: `${type}.${detailsType}`,
              }),
            ...(upgrade && {
              sx: {
                border: 'none',
                fontSize: 1,
              },
            }),
          }}
          titleProps={{
            sx: {
              color: `rarity.${rarity.toLowerCase()}.medium`,
              ...(upgrade && {
                color: 'details.bonus',
                fontSize: 1,
                fontWeight: 'body',
                textShadow: 'none',
              }),
            },
          }}
        >
          {name}
          {upgrade && upgradeBonusCount >= 0 && bonuses && bonuses.length
            ? ` (${Math.min(upgradeBonusCount, bonuses.length)}/${
                bonuses.length
              })`
            : ''}
        </DetailsHeader>

        <div sx={{ lineHeight: 'dense' }}>
          {minPower !== undefined && maxPower !== undefined && (
            <div>
              {`Weapon Strength: `}
              <span
                sx={{ color: 'details.attribute' }}
              >{`${minPower} - ${maxPower}`}</span>
            </div>
          )}

          {defense > 0 && (
            <div>
              {`Defense: `}
              <span sx={{ color: 'details.attribute' }}>{defense}</span>
            </div>
          )}

          {attributes &&
            attributes.length > 0 &&
            attributes.map(({ attribute, modifier }) => (
              <div key={`${attribute}-${modifier}`}>
                <span
                  sx={{
                    color: upgrade ? 'details.bonus' : 'details.attribute',
                  }}
                >
                  {`+${modifier} ${apiAttributes[attribute]}`}
                </span>
              </div>
            ))}

          {(!attributes || !attributes.length) && buffDescription && (
            <div>{buffDescription}</div>
          )}

          {bonuses &&
            bonuses.length > 0 &&
            bonuses.map((bonus, index) => (
              <div
                key={bonus}
                sx={{
                  color:
                    upgradeBonusCount > index
                      ? 'details.bonus'
                      : 'details.bonusInactive',
                }}
              >
                <span>({index + 1}): </span>
                {bonus}
              </div>
            ))}
        </div>

        {upgrades && <div>{upgrades}</div>}

        {!upgrade && (
          <ClassNames>
            {({ css }) => (
              <DetailsText>
                {[
                  rarity,
                  weightClass,
                  detailsType,
                  level > 0 && `Required Level: ${level}`,
                  formatFlavor(description, {
                    flavor: css({ color: flavor }),
                  }),
                  flags.includes('Unique'),
                  flags.includes('AccountBound') && 'Account Bound',
                  flags.includes('Soulbound') && 'Soulbound',
                  vendorValue > 0 && <Coin value={vendorValue} />,
                ]
                  .filter(line => !!line)
                  .map((element, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Fragment key={index}>
                      {element}
                      <br />
                    </Fragment>
                  ))}
              </DetailsText>
            )}
          </ClassNames>
        )}
      </div>
    );
  },
);

ItemDetails.propTypes = {
  upgrade: PropTypes.bool,
  upgrades: PropTypes.node,
  upgradeBonusCount: PropTypes.number,
  data: PropTypes.object.isRequired,
};

ItemDetails.defaultProps = {
  upgrade: false,
  upgrades: null,
  upgradeBonusCount: null,
};

ItemDetails.displayName = 'ItemDetails';

export default withLoading({
  disableTooltip: true,
  iconWithTextProps: { sx: { color: 'tooltip' } },
})(ItemDetails);
