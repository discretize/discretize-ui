import React, {
  forwardRef,
  Fragment,
  useState,
  useCallback,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'

import withLoading from '../withLoading'
import Tooltip from '../Tooltip'
import Icon from '../Icon'
import TraitLineConnector, { Paths } from '../TraitLineConnector'

// eslint-disable-next-line react/prop-types
const renderTraitLineConnector = ({ css, ...rest } = {}) => (
  <TraitLineConnector
    {...rest}
    css={{
      alignSelf: 'stretch',
      flexGrow: 1,
      minWidth: 13,
      maxWidth: 36,
      ...css,
    }}
  />
)

const TraitLine = forwardRef(
  (
    {
      id,
      traitComponent: TraitComponent,
      defaultSelected,
      selected: propsSelected,
      onSelect,
      selectable,
      resettable,
      onReset,
      data: {
        background,
        name,
        minor_traits: minorTraits,
        major_traits: majorTraits,
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
    const [uncontrolledSelected, setUncontrolledSelected] = useState(
      defaultSelected,
    )

    useEffect(() => {
      setUncontrolledSelected(defaultSelected)
    }, [...defaultSelected])

    const controlled = typeof onSelect === 'function'
    let selected

    if (controlled) {
      selected = propsSelected
    } else if (selectable) {
      selected = uncontrolledSelected
    } else {
      selected = defaultSelected || propsSelected
    }

    const renderMinorTrait = useCallback(
      ({ id: minorTraitId }) => (
        <TraitComponent
          {...{
            key: minorTraitId,
            id: minorTraitId,
            sx: {
              fontSize: '40px',
              display: 'inline-flex',
              color: 'rgba(255,255,255,0.5)',
            },
            iconProps: {
              hexagon: true,
            },
            disableText: true,
            inline: false,
          }}
        />
      ),
      [TraitComponent],
    )

    const renderMajorTrait = useCallback(
      ({
        tier,
        id: majorTraitId,
        selected: isSelected,
        index: majorTraitIndex,
      }) => (
        <TraitComponent
          {...{
            key: majorTraitId,
            id: majorTraitId,
            sx: {
              fontSize: '37px',
              display: 'inline-flex',
              color: 'rgba(255,255,255,0.5)',
              ...(!isSelected &&
                (controlled || selectable) && {
                  cursor: 'pointer',
                }),
            },
            disableText: true,
            inline: false,
            inactive: !isSelected,
            ...(!isSelected &&
              (controlled || selectable) && {
                onClick: (event) => {
                  event.preventDefault()

                  if (controlled) {
                    onSelect({
                      tier,
                      id: majorTraitId,
                      index: majorTraitIndex,
                    })
                  } else {
                    // find selected major trait from same tier to replace
                    const selectedIndexToReplace = selected.findIndex(
                      (selectedMajorTraitId) =>
                        majorTraits
                          .slice(tier * 3, tier * 3 + 3)
                          .includes(selectedMajorTraitId),
                    )

                    if (selectedIndexToReplace !== -1) {
                      setUncontrolledSelected(
                        selected.map((value, index) =>
                          index === selectedIndexToReplace
                            ? majorTraitId
                            : value,
                        ),
                      )
                    } else {
                      // find selected major trait from one tier below
                      const selectedIndexBelowToAppend =
                        tier > 0 &&
                        selected.findIndex((selectedMajorTraitId) =>
                          majorTraits
                            .slice((tier - 1) * 3, (tier - 1) * 3 + 3)
                            .includes(selectedMajorTraitId),
                        )

                      if (selectedIndexBelowToAppend !== -1) {
                        const newSelected = [...selected]
                        newSelected.splice(
                          selectedIndexBelowToAppend + 1,
                          0,
                          majorTraitId,
                        )
                        setUncontrolledSelected(newSelected)
                      } else {
                        // find selected major trait from one tier above
                        const selectedIndexAboveToPrepend =
                          tier < 2 &&
                          selected.findIndex((selectedMajorTraitId) =>
                            majorTraits
                              .slice((tier + 1) * 3, (tier + 1) * 3 + 3)
                              .includes(selectedMajorTraitId),
                          )

                        if (selectedIndexAboveToPrepend !== -1) {
                          const newSelected = [...selected]
                          newSelected.splice(
                            selectedIndexBelowToAppend,
                            0,
                            majorTraitId,
                          )
                          setUncontrolledSelected(newSelected)
                        } else {
                          // well, just append it
                          setUncontrolledSelected([...selected, majorTraitId])
                        }
                      }
                    }
                  }
                },
              }),
          }}
        />
      ),
      [TraitComponent, controlled, selectable, ...selected],
    )

    return (
      <div
        css={{
          position: 'relative',
          width: '100%',
          maxWidth: 650,
          height: 135,
          border: '1px solid #0b0e14',
          backgroundColor: 'rgb(0,0,0)',
          display: 'flex',
          boxSizing: 'border-box',
          overflow: 'hidden',
          '::before': {
            content: '""',
            position: 'absolute',
            minWidth: '100%',
            width: 460,
            height: '100%',
            backgroundPosition: 'left bottom',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url('${background}')`,
            right: 0,
          },
        }}
        {...rest}
        ref={ref}
      >
        <div
          css={{
            position: 'absolute',
            minWidth: '100%',
            height: '100%',
            right: 0,
            display: 'flex',
          }}
        >
          <div
            css={{
              width: 168,
              filter: 'drop-shadow(2px 2px 5px black)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Tooltip content={name}>
              <span
                css={{
                  position: 'absolute',
                  marginLeft: 73,
                  height: 55,
                  width: 95,
                  boxSizing: 'border-box',
                  '&, ::before, ::after': {
                    borderWidth: 0,
                    borderStyle: 'solid',
                    borderColor: 'rgba(255,255,255,0.5)',
                  },
                  '&': {
                    borderLeftWidth: 2,
                    borderRightWidth: 2,
                  },
                  '::before, ::after': {
                    content: "''",
                    position: 'absolute',
                    width: 64,
                    height: 64,
                    transform: 'scaleY(0.5774) rotate(-45deg)',
                    left: 12,
                  },
                  '::before': {
                    top: -33.5,
                    borderTopWidth: 3,
                    borderRightWidth: 3,
                  },
                  '::after': {
                    bottom: -33.5,
                    borderBottomWidth: 3,
                    borderLeftWidth: 3,
                  },
                }}
              />
            </Tooltip>
          </div>

          <div
            sx={{
              py: '6px',
            }}
            css={{
              display: 'flex',
              maxWidth: 430,
              paddingRight: '6px',
              flexGrow: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {majorTraits
              .reduce(
                (array, item, index) =>
                  index % 3 === 0
                    ? [...array, [item]]
                    : [...array.slice(0, -1), [...array.slice(-1)[0], item]],
                [],
              )
              .map((majorTraitsChunk, tier) => {
                const selectedMajorTraitIndex = majorTraitsChunk.findIndex(
                  (majorTraitId) => selected.includes(majorTraitId),
                )
                const path = Object.values(Paths)[selectedMajorTraitIndex]

                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={tier}>
                    {tier === 0 &&
                      renderTraitLineConnector({ css: { maxWidth: 33 } })}

                    {renderMinorTrait({ id: minorTraits[tier], tier })}

                    {renderTraitLineConnector(
                      path !== undefined ? { end: path } : { disabled: true },
                    )}

                    <div
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      {majorTraitsChunk.map((majorTraitId, majorTraitIndex) =>
                        renderMajorTrait({
                          tier,
                          id: majorTraitId,
                          selected: majorTraitIndex === selectedMajorTraitIndex,
                          index: majorTraitIndex,
                        }),
                      )}
                    </div>

                    {tier !== 2 &&
                      renderTraitLineConnector(
                        path !== undefined
                          ? { start: path }
                          : { disabled: true },
                      )}
                  </Fragment>
                )
              })}
          </div>
        </div>

        {onReset ||
          (!controlled &&
            selectable &&
            resettable &&
            JSON.stringify(uncontrolledSelected) !==
              JSON.stringify(defaultSelected) && (
              <Tooltip content="Reset">
                <div
                  sx={{
                    position: 'absolute',
                    boxSizing: 'border-box',
                    top: 2,
                    left: 2,
                    cursor: 'pointer',
                  }}
                >
                  <Icon
                    name="Reset"
                    inactive
                    sx={{
                      fontSize: '32px',
                      border: '1px solid rgba(255,255,255,0.5)',
                    }}
                    onClick={(event) => {
                      event.preventDefault()

                      if (!controlled) {
                        setUncontrolledSelected(defaultSelected)
                      }

                      if (typeof onReset === 'function') {
                        onReset()
                      }
                    }}
                  />
                </div>
              </Tooltip>
            ))}
      </div>
    )
  },
)

TraitLine.propTypes = {
  id: PropTypes.number,
  traitComponent: PropTypes.elementType.isRequired,
  defaultSelected: PropTypes.arrayOf(PropTypes.number),
  selected: PropTypes.arrayOf(PropTypes.number),
  selectable: PropTypes.bool,
  resettable: PropTypes.bool,
  onReset: PropTypes.func,
  onSelect: PropTypes.func,
  data: PropTypes.object.isRequired,
}

TraitLine.defaultProps = {
  id: null,
  defaultSelected: [],
  selected: [],
  selectable: true,
  resettable: true,
  onReset: null,
  onSelect: null,
}

TraitLine.displayName = 'TraitLine'

export default withLoading({
  iconWithTextProps: {
    sx: {
      width: '100%',
      maxWidth: '650px',
      height: '135px',
      backgroundColor: 'rgba(0,0,0,0.2)',
      border: '1px solid rgb(9, 10, 14)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '34px',
    },
  },
  errorProps: {
    sx: {
      width: '100%',
      maxWidth: '650px',
      height: '135px',
      backgroundColor: 'rgba(0,0,0,0.2)',
      border: '1px solid rgb(9, 10, 14)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '34px',
    },
  },
})(TraitLine)
