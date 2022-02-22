import clsx from 'clsx';
import { capitalize } from '../../helpers/capitalize';
import { ReactElement } from 'react';
import { GW2ApiFactBuff } from '../../gw2api/types/common/fact';
import { GW2ApiInfixUpgradeAttribute } from '../../gw2api/types/items/details/common/infixUpgrade';
import GW2ApiItem from '../../gw2api/types/items/item';
import { apiAttributes } from '../../helpers/apiAttributes';
import Coin from '../Coin/Coin';
import DetailsFact from '../DetailsFact/DetailsFact';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';
import itemcss from './Item.module.css';
import css from './ItemDetails.module.css';

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
        attributes = undefined,
        buff: { description: buffDescription = undefined } = {},
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
          ...(upgrade
            ? {
                className: css.detailsHeaderIcon,
              }
            : {}),
        }}
        titleClassName={clsx(
          itemcss[`colorRarity${capitalize(rarity)}`],
          upgrade && css.detailsHeaderTitleUpgrade,
        )}
        {...(upgrade
          ? {
              className: css.mb1,
            }
          : {
              ...((!attributes && buffDescription) ||
              (attributes && infusionUpgradeFlags.includes('Infusion'))
                ? {
                    className: css.mb16,
                  }
                : {}),
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
              className={css.attributeColor}
            >{`${minPower} - ${maxPower}`}</span>
          </div>
        )}

        {defense && defense > 0 && (
          <div>
            {`Defense: `}
            <span className={css.attributeColor}>{defense}</span>
          </div>
        )}

        {attributes &&
          attributes.length > 0 &&
          (attributes as GW2ApiInfixUpgradeAttribute[]).map(
            ({ attribute, modifier }) => (
              <div key={`${attribute}-${modifier}`}>
                <span
                  className={
                    upgrade || infusionUpgradeFlags.includes('Infusion')
                      ? css.bonusColor
                      : css.attributeColor
                  }
                >
                  {`+${modifier} ${apiAttributes[attribute]}`}
                </span>
              </div>
            ),
          )}

        {(!attributes || !attributes.length) &&
          (buffDescription || (!upgrade && description)) && (
            <DetailsText
              lines={[
                buffDescription ||
                  (!upgrade && type !== 'Consumable' && description),
              ]}
              className={
                type === 'UpgradeComponent' ? css.bonusColor : undefined
              }
            />
          )}

        {/* Rune effects */}
        {bonuses &&
          bonuses.length > 0 &&
          bonuses.map((bonus, index) => (
            <div
              key={`bonus${index}`}
              className={
                upgradeBonusCount > index
                  ? css.bonusColor
                  : css.bonusInactiveColor
              }
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
              className={clsx(
                css.mt16,
                index < upgrades.length ? css.mb16 : undefined,
              )}
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
          facts={[
            {
              type: 'Buff',
              icon: detailsIcon,
              duration: detailsDuration / 1000,
              description: detailsDescription,
              status: detailsName,
            } as GW2ApiFactBuff,
          ]}
          className={css.mb12}
        />
      )}

      {type === 'Consumable' && description && (
        <DetailsText lines={[description]} />
      )}

      {!upgrade && (
        <DetailsText
          className={css.mt12}
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
