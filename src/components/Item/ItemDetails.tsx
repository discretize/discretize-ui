import React, { ReactElement } from 'react';

import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
//import Coin from '../Coin/Coin'
import { apiAttributes } from '../../helpers/apiAttributes';
import DetailsFact from '../DetailsFact/DetailsFact';
import GW2ApiItem from '../../gw2api/types/items/item';

function Coin() {
  // TODO: port Coin
  return null;
}

export interface ItemDetailsProps {
  item: GW2ApiItem;
  upgrade?: boolean; // True if this is an upgrade
  upgrades?: [GW2ApiItem, number][];
  upgradeBonusCount?: number;
}

const ItemDetails = ({
  item,
  upgrade = false,
  upgrades,
  upgradeBonusCount = 1,
}: ItemDetailsProps): ReactElement => {
  const {
    icon,
    name,
    rarity,
    level,
    description,
    flags = [],
    type,
    details: {
      icon: detailsIcon,
      name: detailsName,
      type: detailsType,
      duration_ms: detailsDuration,
      description: detailsDescription,
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
  } = item;

  let count = 1;

  return (
    <div>
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
            color:
              rarity === 'Basic'
                ? '#fff'
                : `gw2.rarity.${rarity.toLowerCase()}`,
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
        {count > 1 && `${count} `}
        {name}
        {upgrade && upgradeBonusCount >= 0 && bonuses && bonuses.length
          ? ` (${Math.min(upgradeBonusCount, bonuses.length)}/${
              bonuses.length
            })`
          : ''}
      </DetailsHeader>
      <div>
        {type === 'Consumable' && <div>Double-click to consume.</div>}

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
              lines={[
                buffDescription ||
                  (!upgrade && type !== 'Consumable' && description),
              ]}
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
      {upgrades && (
        <div>
          {upgrades.map(([data, upgradeBonusCount], index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`${data.id}-${index}`}
              sx={{
                mt: '16px',
                ...(index < upgrades.length && { mb: '16px' }),
              }}
            >
              <ItemDetails
                upgrade
                item={data}
                upgradeBonusCount={upgradeBonusCount}
              />
            </div>
          ))}
        </div>
      )}
      {detailsIcon && detailsName && detailsDuration && detailsDescription && (
        <DetailsFact
          data={{
            type: 'Buff',
            icon: detailsIcon,
            duration: detailsDuration / 1000,
            description: detailsDescription,
            status: detailsName,
          }}
          sx={{ mb: '12px' }}
        />
      )}

      {type === 'Consumable' && description && (
        <DetailsText lines={[description]} />
      )}

      {!upgrade && (
        <DetailsText
          sx={{ mt: '12px' }}
          lines={[
            ...(type === 'UpgradeComponent'
              ? [description, level > 0 && `Required Level: ${level}`]
              : [
                  ...(type === 'Consumable'
                    ? [
                        type,
                        level > 0 && `Required Level: ${level}`,
                        flags.includes('AccountBound') && 'Account Bound',
                      ]
                    : [
                        type !== 'Gizmo' && rarity,
                        weightClass,
                        type !== 'Gizmo' && detailsType,
                        level > 0 && `Required Level: ${level}`,
                        ((attributes && attributes.length) ||
                          buffDescription) &&
                          description,
                        flags.includes('Unique') && 'Unique',
                        flags.includes('AccountBound') && 'Account Bound',
                        flags.includes('Soulbound') && 'Soulbound',
                      ]),
                ]),
            ...(infusionUpgradeFlags.includes('Infusion')
              ? []
              : [
                  vendorValue > 0 && !flags.includes('NoSell') && (
                    <Coin value={vendorValue} />
                  ),
                ]),
          ]}
        />
      )}
    </div>
  );
};

export default ItemDetails;
