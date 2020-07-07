import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import withLoading from '../withLoading/index';
import DetailsHeader from '../DetailsHeader';
import DetailsText from '../DetailsText';
import { apiAttributes } from '../helpers';
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
          infusion_upgrade_flags: infusionUpgradeFlags = [],
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
      id: ignoredId,
      component: ignoredComponent,
      disableIcon: ignoredDisableIcon,
      disableText: ignoredDisableText,
      disableTooltip: ignoredDisableTooltip,
      inline: ignoredInline,
      /* eslint-enable react/prop-types */
      ...rest
    },
    ref,
  ) => (
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
              fontSize: '16px',
            },
          }),
        }}
        titleProps={{
          sx: {
            color: `gw2.rarity.${rarity.toLowerCase()}`,
            ...(upgrade && {
              color: 'gw2.details.bonus',
              fontSize: '14px',
              fontWeight: 'gw2.body',
            }),
          },
        }}
        {...(upgrade
          ? {
              sx: {
                mb: '1px',
              },
            }
          : {
              ...(((!attributes && buffDescription) ||
                (attributes && infusionUpgradeFlags.includes('Infusion'))) && {
                sx: { mb: '16px' },
              }),
            })}
      >
        {name}
        {upgrade && upgradeBonusCount >= 0 && bonuses && bonuses.length
          ? ` (${Math.min(upgradeBonusCount, bonuses.length)}/${
              bonuses.length
            })`
          : ''}
      </DetailsHeader>

      <div>
        {minPower !== undefined && maxPower !== undefined && (
          <div>
            {`Weapon Strength: `}
            <span
              sx={{ color: 'gw2.details.attribute' }}
            >{`${minPower} - ${maxPower}`}</span>
          </div>
        )}

        {defense > 0 && (
          <div>
            {`Defense: `}
            <span sx={{ color: 'gw2.details.attribute' }}>{defense}</span>
          </div>
        )}

        {attributes &&
          attributes.length > 0 &&
          attributes.map(({ attribute, modifier }) => (
            <div key={`${attribute}-${modifier}`}>
              <span
                sx={{
                  color:
                    upgrade || infusionUpgradeFlags.includes('Infusion')
                      ? 'gw2.details.bonus'
                      : 'gw2.details.attribute',
                }}
              >
                {`+${modifier} ${apiAttributes[attribute]}`}
              </span>
            </div>
          ))}

        {(!attributes || !attributes.length) &&
          (buffDescription || (!upgrade && description)) && (
            <DetailsText
              lines={[buffDescription || (!upgrade && description)]}
              sx={{
                ...(type === 'UpgradeComponent' && {
                  color: 'gw2.details.bonus',
                }),
              }}
            />
          )}

        {bonuses &&
          bonuses.length > 0 &&
          bonuses.map((bonus, index) => (
            <div
              key={bonus}
              sx={{
                color:
                  upgradeBonusCount > index
                    ? 'gw2.details.bonus'
                    : 'gw2.details.bonusInactive',
              }}
            >
              <span>({index + 1}): </span>
              {bonus}
            </div>
          ))}
      </div>

      {upgrades && <div>{upgrades}</div>}

      {!upgrade && (
        <DetailsText
          lines={[
            ...(type === 'UpgradeComponent'
              ? [description, level > 0 && `Required Level: ${level}`]
              : [
                  rarity,
                  weightClass,
                  detailsType,
                  level > 0 && `Required Level: ${level}`,
                  ((attributes && attributes.length) || buffDescription) &&
                    description,
                  flags.includes('Unique') && 'Unique',
                  flags.includes('AccountBound') && 'Account Bound',
                  flags.includes('Soulbound') && 'Soulbound',
                ]),
            ...(infusionUpgradeFlags.includes('Infusion')
              ? []
              : [vendorValue > 0 && <Coin value={vendorValue} />]),
          ]}
        />
      )}
    </div>
  ),
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
  iconWithTextProps: { sx: { color: '#fff' } },
})(ItemDetails);
