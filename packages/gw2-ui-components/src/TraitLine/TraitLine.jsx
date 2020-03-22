import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../helpers';
import Tooltip, { TooltipContent } from '../Tooltip';
import TraitLineConnector, { Paths } from './TraitLineConnector';

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

const styles = {
  root: {
    position: 'relative',
    width: '100%',
    maxWidth: 650,
    height: ROOT_HEIGHT,
    border: '1px solid rgb(9, 10, 14)',
    backgroundColor: 'rgb(0,0,0)',
    display: 'flex',
    boxSizing: 'border-box',
    '&:hover $background:after': {
      opacity: 0,
    },
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundPosition: 'left bottom',
    backgroundRepeat: 'no-repeat',
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
  },
  hexagonWrapper: {
    width: TRAITS_MARGIN_LEFT,
    filter: 'drop-shadow(2px 2px 5px black)',
    display: 'flex',
    alignItems: 'center',
  },
  hexagon: {
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
  },
  traits: {
    display: 'flex',
    maxWidth: 468,
    padding: '4px 0',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  traitIcon: {
    fontSize: 39,
  },
  majorTraits: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  specializationLine: {
    height: '100%',
    '&:not(:first-child)': {
      flexGrow: 1,
    },
    '&:first-child': {
      width: 34,
    },
  },
};

class Specialization extends Component {
  renderMinorTrait = id => {
    const { classes, traitComponent: TraitComponent } = this.props;

    return (
      <TraitComponent
        {...{
          key: id,
          id,
          classes: {
            icon: classes.traitIcon,
          },
          iconProps: {
            hexagon: true,
          },
          disableText: true,
        }}
      />
    );
  };

  renderMajorTrait = (id, selected) => {
    const { classes, traitComponent: TraitComponent } = this.props;

    return (
      <TraitComponent
        {...{
          key: id,
          id,
          classes: {
            icon: classes.traitIcon,
          },
          disableText: true,
          inactive: !selected,
        }}
      />
    );
  };

  render = () => {
    const {
      classes,
      selected: propsSelected,
      data: {
        background,
        name,
        minor_traits: minorTraits,
        major_traits: majorTraits,
      },
      ...rest
    } = this.props;

    const selected = propsSelected && propsSelected.map(value => Number(value));

    return (
      <div className={classes.root} {...rest}>
        <span
          className={classes.background}
          style={{ backgroundImage: `url("${background}")` }}
        />

        <div className={classes.hexagonWrapper}>
          <Tooltip render={<TooltipContent>{name}</TooltipContent>}>
            <span className={classes.hexagon} />
          </Tooltip>
        </div>

        <div className={classes.traits}>
          {majorTraits
            .reduce(
              (array, item, index) =>
                index % 3 === 0
                  ? [...array, [item]]
                  : [...array.slice(0, -1), [...array.slice(-1)[0], item]],
              [],
            )
            .map((majorTraitsChunk, tier) => {
              const selectedMajorTraitIndex = majorTraitsChunk.findIndex(id =>
                selected.includes(id),
              );
              const path = Object.values(Paths)[selectedMajorTraitIndex];

              return (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={tier}>
                  {tier === 0 && (
                    <TraitLineConnector
                      className={classes.specializationLine}
                    />
                  )}

                  {this.renderMinorTrait(minorTraits[tier])}

                  <TraitLineConnector
                    className={classes.specializationLine}
                    {...(path !== undefined
                      ? { end: path }
                      : { disabled: true })}
                  />

                  <div className={classes.majorTraits}>
                    {majorTraitsChunk.map((id, order) =>
                      this.renderMajorTrait(
                        id,
                        order === selectedMajorTraitIndex,
                      ),
                    )}
                  </div>

                  {tier !== 2 && (
                    <TraitLineConnector
                      className={classes.specializationLine}
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
  };
}

Specialization.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.number),
};

Specialization.defaultProps = {
  selected: new Array(3),
};

export default withStyles(styles)(Specialization);
