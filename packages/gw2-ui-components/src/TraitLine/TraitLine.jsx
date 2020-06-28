import React, { forwardRef, Fragment } from 'react';
import PropTypes from 'prop-types';

import withLoading from '../withLoading/index';
import Tooltip from '../Tooltip';
import TraitLineConnector, { Paths } from '../TraitLineConnector';

const ROOT_HEIGHT = 135;

const HEXAGON_WIDTH = 95;

const HEXAGON_HEIGHT = 110;

const TRAITS_MARGIN_LEFT = 168;

const HEXAGON_POINTS = [
  [
    TRAITS_MARGIN_LEFT - HEXAGON_WIDTH * 0.5,
    (ROOT_HEIGHT - HEXAGON_HEIGHT) * 0.5,
  ],
  [
    TRAITS_MARGIN_LEFT,
    (ROOT_HEIGHT - HEXAGON_HEIGHT) * 0.5 + HEXAGON_HEIGHT * 0.25,
  ],
  [
    TRAITS_MARGIN_LEFT,
    (ROOT_HEIGHT - HEXAGON_HEIGHT) * 0.5 + HEXAGON_HEIGHT * 0.75,
  ],
  [
    TRAITS_MARGIN_LEFT - HEXAGON_WIDTH * 0.5,
    ROOT_HEIGHT - (ROOT_HEIGHT - HEXAGON_HEIGHT) * 0.5,
  ],
  [
    TRAITS_MARGIN_LEFT - HEXAGON_WIDTH,
    (ROOT_HEIGHT - HEXAGON_HEIGHT) * 0.5 + HEXAGON_HEIGHT * 0.75,
  ],
  [
    TRAITS_MARGIN_LEFT - HEXAGON_WIDTH,
    (ROOT_HEIGHT - HEXAGON_HEIGHT) * 0.5 + HEXAGON_HEIGHT * 0.25,
  ],
];

const INVERSE_HEXAGON_CLIP_PATH = `polygon(${[
  [0, 0],
  [0, '100%'],
  [HEXAGON_POINTS[4][0], '100%'],
  HEXAGON_POINTS[5],
  ...HEXAGON_POINTS,
  [0, '100%'],
  ['100%', '100%'],
  ['100%', 0],
]
  .map(
    ([x, y]) =>
      `${typeof x === 'number' && x !== 0 ? `${x}px` : x} ${
        typeof y === 'number' && x !== 0 ? `${y}px` : y
      }`,
  )
  .join(', ')})`;

const TraitLine = forwardRef(
  (
    {
      id,
      traitComponent: TraitComponent,
      selected: propsSelected,
      onSelect,
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
    const renderMinorTrait = ({ id: minorTraitId }) => (
      <TraitComponent
        {...{
          key: minorTraitId,
          id: minorTraitId,
          iconProps: {
            hexagon: true,
            sx: { fontSize: '39px' },
          },
          iconWithTextProps: {
            sx: {
              fontSize: '32px',
              color: 'tooltip',
            },
          },
          disableText: true,
        }}
      />
    );

    const renderMajorTrait = ({ tier, id: majorTraitId, selected }) => (
      <TraitComponent
        {...{
          key: majorTraitId,
          id: majorTraitId,
          iconProps: {
            sx: { fontSize: '39px' },
          },
          iconWithTextProps: {
            sx: {
              fontSize: '32px',
              color: 'tooltip',
            },
          },
          disableText: true,
          inactive: !selected,
          ...(typeof onSelect === 'function' && {
            onClick: event => {
              event.preventDefault();
              onSelect({ tier, id: majorTraitId });
            },
          }),
        }}
      />
    );

    const selected = propsSelected && propsSelected.map(value => Number(value));

    return (
      <div
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 650,
          height: ROOT_HEIGHT,
          border: '1px solid rgb(9, 10, 14)',
          backgroundColor: 'rgb(0,0,0)',
          display: 'flex',
          boxSizing: 'border-box',
          '&:hover > span:first-of-type:after': {
            opacity: 0,
          },
        }}
        {...rest}
        ref={ref}
      >
        <span
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundPosition: 'left bottom',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url('${background}')`,
            right: 0,
            bottom: 0,
            '&:after': {
              content: "''",
              position: 'absolute',
              width: '100%',
              height: '100%',
              right: 0,
              bottom: 0,
              backgroundColor: 'black',
              opacity: 0.5,
              transition: 'opacity 200ms',
              willChange: 'opacity',
              clipPath: INVERSE_HEXAGON_CLIP_PATH,
            },
          }}
        />

        <div
          sx={{
            width: TRAITS_MARGIN_LEFT,
            filter: 'drop-shadow(2px 2px 5px black)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Tooltip content={name}>
            <span
              sx={{
                position: 'absolute',
                marginLeft: TRAITS_MARGIN_LEFT - HEXAGON_WIDTH,
                height: HEXAGON_HEIGHT * 0.5,
                width: HEXAGON_WIDTH,
                boxSizing: 'border-box',
                '&, &:before, &:after': {
                  borderWidth: 0,
                  borderStyle: 'solid',
                  borderColor: 'rgba(255,255,255,0.5)',
                },
                '&': {
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                },
                '&:before, &:after': {
                  content: "''",
                  position: 'absolute',
                  width: 64,
                  height: 64,
                  transform: 'scaleY(0.5774) rotate(-45deg)',
                  left: 12,
                },
                '&:before': {
                  top: -33.5,
                  borderTopWidth: 3,
                  borderRightWidth: 3,
                },
                '&:after': {
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
            display: 'flex',
            maxWidth: 468,
            padding: '4px 0',
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
                majorTraitId => selected.includes(majorTraitId),
              );
              const path = Object.values(Paths)[selectedMajorTraitIndex];

              return (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={tier}>
                  {tier === 0 && (
                    <TraitLineConnector
                      sx={{
                        height: '100%',
                        '&:not(:first-of-type)': {
                          flexGrow: 1,
                        },
                        '&:first-of-type': {
                          width: 34,
                        },
                      }}
                    />
                  )}

                  {renderMinorTrait({ id: minorTraits[tier] })}

                  <TraitLineConnector
                    sx={{
                      height: '100%',
                      '&:not(:first-of-type)': {
                        flexGrow: 1,
                      },
                      '&:first-of-type': {
                        width: 34,
                      },
                    }}
                    {...(path !== undefined
                      ? { end: path }
                      : { disabled: true })}
                  />

                  <div
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {majorTraitsChunk.map((majorTraitId, order) =>
                      renderMajorTrait({
                        tier,
                        id: majorTraitId,
                        selected: order === selectedMajorTraitIndex,
                      }),
                    )}
                  </div>

                  {tier !== 2 && (
                    <TraitLineConnector
                      sx={{
                        height: '100%',
                        '&:not(:first-of-type)': {
                          flexGrow: 1,
                        },
                        '&:first-of-type': {
                          width: 34,
                        },
                      }}
                      {...(path !== undefined
                        ? { start: path }
                        : { disabled: true })}
                    />
                  )}
                </Fragment>
              );
            })}
        </div>
      </div>
    );
  },
);

TraitLine.propTypes = {
  id: PropTypes.number,
  traitComponent: PropTypes.elementType.isRequired,
  selected: PropTypes.arrayOf(PropTypes.number),
  onSelect: PropTypes.func,
  data: PropTypes.object.isRequired,
};

TraitLine.defaultProps = {
  id: null,
  selected: new Array(3),
  onSelect: null,
};

TraitLine.displayName = 'TraitLine';

export default withLoading({
  iconWithTextProps: {
    sx: {
      width: '100%',
      maxWidth: 650,
      height: ROOT_HEIGHT,
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
      maxWidth: 650,
      height: ROOT_HEIGHT,
      backgroundColor: 'rgba(0,0,0,0.2)',
      border: '1px solid rgb(9, 10, 14)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '34px',
    },
  },
})(TraitLine);
