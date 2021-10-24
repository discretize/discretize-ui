import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import withLoading from '../withLoading/index'
import DetailsHeader from '../DetailsHeader/DetailsHeader'
import DetailsText from '../DetailsText/DetailsText'
import { apiAttributes, populateMissingItemAPI } from '../helpers'
import Coin from '../Coin/Coin'
import DetailsFact from '../DetailsFact/DetailsFact'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItem } from 'gw2-ui-redux-bulk'
import axios from 'axios'

const ItemDetails = forwardRef(
  (
    {
      count,
      upgrade,
      upgrades: propsUpgrades,
      upgradeBonusCount,
      data: suppliedData,
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
  ) => {
    const [state, setState] = React.useState({ data: suppliedData })
    const dispatch = useDispatch()

    // if there are less than 6 attributes supplied via data props, the data is considered incomplete and will be refetched from the api
    const shouldFetch = suppliedData && Object.keys(suppliedData).length <= 7

    const { CancelToken } = axios
    const source = CancelToken.source()

    const upgrades = useSelector((state) => {
      const localUpgrades = Array.isArray(propsUpgrades)
        ? propsUpgrades.map((upgrade) => {
            const [localId, count] = Array.isArray(upgrade)
              ? upgrade
              : [upgrade]
            const upgradeData = state.gw2UiStore.ids.items.find(
              (item) => Number(item.id) === Number(localId),
            )
            const upgradeError = state.gw2UiStore.errors.skills.find(
              (item) => Number(item.id) === Number(localId),
            )
            return {
              id: localId,
              count,
              error: upgradeError,
              loading: !upgradeData && !upgradeError,
              data: upgradeData,
            }
          })
        : []
      return localUpgrades
    })

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
    } = state.data

    React.useEffect(() => {
      if (shouldFetch) {
        // only show native language for chinese people
        const userLang = navigator.language || navigator.userLanguage
        const language = userLang.includes('zh') ? 'zh' : 'en'

        axios
          .get(
            `https://api.guildwars2.com/v2/items?ids=${state.data.id}&lang=${language}`,
            {
              cancelToken: source.token,
            },
          )
          .catch(() => {})
          .then((res) => {
            if (res && res.data && res.data.length === 1) {
              const [apiData] = res.data
              const populatedData = populateMissingItemAPI(apiData)
              setState({
                data: {
                  ...state.data,
                  ...populatedData,
                  details: { ...state.data.details, ...populatedData.details },
                },
              })
            }
          })
      }

      // Fetch all the upgrades
      if (Array.isArray(propsUpgrades)) {
        propsUpgrades.forEach((upgrade) => {
          if (upgrade.data) return
          const [localID] = Array.isArray(upgrade) ? upgrade : [upgrade]
          fetchItem(localID, dispatch)
        })
      }

      if (shouldFetch) {
        return () => {
          source.cancel(
            `Operation cancelled for fetching item with id ${state.data.id}`,
          )
        }
      }
    }, [])

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
                  (attributes &&
                    infusionUpgradeFlags.includes('Infusion'))) && {
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
            {upgrades
              .filter((up) => up.data)
              .map(
                (
                  {
                    id: upgradeId,
                    data: upgradeData,
                    loading: upgradeLoading,
                    error: upgradeError,
                    count: upgradeBonusCount,
                  },
                  index,
                ) => (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${upgradeId}-${index}`}
                    sx={{
                      mt: '16px',
                      ...(index < upgrades.length && { mb: '16px' }),
                    }}
                  >
                    <ItemDetails
                      upgrade
                      id={upgradeId}
                      // No idea why this throws an error...  loading={upgradeLoading}
                      error={upgradeError}
                      data={upgradeData}
                      upgradeBonusCount={upgradeBonusCount}
                    />
                  </div>
                ),
              )}
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
    )
  },
)

ItemDetails.propTypes = {
  count: PropTypes.number,
  upgrade: PropTypes.bool,
  upgrades: PropTypes.node,
  upgradeBonusCount: PropTypes.number,
  data: PropTypes.object.isRequired,
}

ItemDetails.defaultProps = {
  count: null,
  upgrade: false,
  upgrades: null,
  upgradeBonusCount: null,
}

ItemDetails.displayName = 'ItemDetails'

export default withLoading({
  disableTooltip: true,
  iconWithTextProps: { sx: { color: '#fff' } },
})(ItemDetails)
