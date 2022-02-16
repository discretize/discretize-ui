import clsx from 'clsx';
import {
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import GW2ApiSpecialization from '../../gw2api/types/specialization/specialization';
import Icon from '../Icon/Icon';
import Tooltip from '../Tooltip/Tooltip';
import TraitComponent from '../Trait/Trait';
import TraitLineConnector, {
  Paths,
  TraitLineConnectorProps,
} from '../TraitLineConnector/TraitLineConnector';
import css from './TraitLine.module.css';

// eslint-disable-next-line react/prop-types
const renderTraitLineConnector = ({
  className,
  props,
}: {
  className?: string;
  props?: TraitLineConnectorProps;
}) => <TraitLineConnector className={clsx(className, css.connector)} />;

export interface TraitLineProps {
  id?: number;
  defaultSelected?: number[];
  selected?: number[];
  selectable?: boolean;
  resettable?: boolean;
  onReset?: (v: { tier: number; id: number; index: number }) => void;
  onSelect?: (v: { tier: number; id: number; index: number }) => void;
  data: GW2ApiSpecialization;
}

const TraitLine = ({
  id,
  defaultSelected = [],
  selected: propsSelected,
  selectable,
  resettable,
  onReset,
  onSelect,
  data,
}: TraitLineProps): ReactElement => {
  const {
    name,
    major_traits: majorTraits,
    minor_traits: minorTraits,
    background,
  } = data;

  const [uncontrolledSelected, setUncontrolledSelected] =
    useState(defaultSelected);

  useEffect(() => {
    setUncontrolledSelected(defaultSelected);
  }, [...defaultSelected]);

  const controlled = typeof onSelect === 'function';
  let selected: number[];

  if (controlled) {
    selected = propsSelected;
  } else if (selectable) {
    selected = uncontrolledSelected;
  } else {
    selected = defaultSelected || propsSelected;
  }
  console.log(`onSelect: ${onSelect}`);
  console.log(`typeof onSelect: ${typeof onSelect}`);
  console.log(`Controlled: ${controlled}`);
  console.log(`Selected: ${selected}`);

  const renderMinorTrait = useCallback(
    ({ id: minorTraitId }) => (
      <TraitComponent
        key={minorTraitId}
        id={minorTraitId}
        disableText
        inline={false}
        className={css.minorTrait}
      />
    ),
    [TraitComponent],
  );

  const renderMajorTrait = useCallback(
    ({
      tier,
      id: majorTraitId,
      selected: isSelected,
      index: majorTraitIndex,
    }) => (
      <TraitComponent
        key={majorTraitId}
        id={majorTraitId}
        disableText
        inline={false}
        inactive={!isSelected}
        className={clsx(
          css.majorTrait,
          !isSelected && (controlled || selectable) && css.majorTraitAdditional,
        )}
        {...{
          ...(!isSelected &&
            (controlled || selectable) && {
              onClick: (event) => {
                event.preventDefault();

                if (controlled) {
                  onSelect({
                    tier,
                    id: majorTraitId,
                    index: majorTraitIndex,
                  });
                } else {
                  // find selected major trait from same tier to replace
                  const selectedIndexToReplace = selected.findIndex(
                    (selectedMajorTraitId) =>
                      majorTraits
                        .slice(tier * 3, tier * 3 + 3)
                        .includes(selectedMajorTraitId),
                  );

                  if (selectedIndexToReplace !== -1) {
                    setUncontrolledSelected(
                      selected.map((value, index) =>
                        index === selectedIndexToReplace ? majorTraitId : value,
                      ),
                    );
                  } else {
                    // find selected major trait from one tier below
                    const selectedIndexBelowToAppend =
                      tier > 0 &&
                      selected.findIndex((selectedMajorTraitId) =>
                        majorTraits
                          .slice((tier - 1) * 3, (tier - 1) * 3 + 3)
                          .includes(selectedMajorTraitId),
                      );

                    if (selectedIndexBelowToAppend !== -1) {
                      const newSelected = [...selected];
                      newSelected.splice(
                        selectedIndexBelowToAppend + 1,
                        0,
                        majorTraitId,
                      );
                      setUncontrolledSelected(newSelected);
                    } else {
                      // find selected major trait from one tier above
                      const selectedIndexAboveToPrepend =
                        tier < 2 &&
                        selected.findIndex((selectedMajorTraitId) =>
                          majorTraits
                            .slice((tier + 1) * 3, (tier + 1) * 3 + 3)
                            .includes(selectedMajorTraitId),
                        );

                      if (selectedIndexAboveToPrepend !== -1) {
                        const newSelected = [...selected];
                        newSelected.splice(
                          selectedIndexBelowToAppend,
                          0,
                          majorTraitId,
                        );
                        setUncontrolledSelected(newSelected);
                      } else {
                        // well, just append it
                        setUncontrolledSelected([...selected, majorTraitId]);
                      }
                    }
                  }
                }
              },
            }),
        }}
      />
    ),
    [controlled, selectable, ...selected],
  );

  return (
    <div
      className={css.root}
      style={{ backgroundImage: `url('${background})` }}
    >
      <div className={css.wrapper}>
        <div className={css.wrapperTooltip}>
          <Tooltip content={name}>
            <span className={css.innerTooltip} />
          </Tooltip>
        </div>

        <div className={css.majorTraitsWrapper}>
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
              );
              const path = Object.values(Paths)[selectedMajorTraitIndex];

              return (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={tier}>
                  {tier === 0 &&
                    renderTraitLineConnector({
                      className: css.traitlineConnectorExtra,
                    })}

                  {renderMinorTrait({ id: minorTraits[tier], tier })}

                  {renderTraitLineConnector(
                    path !== undefined
                      ? { props: { end: path } }
                      : { props: { disabled: true } },
                  )}

                  <div className={css.majorTraitsChunk}>
                    {majorTraitsChunk.map((majorTraitId, majorTraitIndex) => {
                      return renderMajorTrait({
                        tier,
                        id: majorTraitId,
                        selected: majorTraitIndex === selectedMajorTraitIndex,
                        index: majorTraitIndex,
                      });
                    })}
                  </div>

                  {tier !== 2 &&
                    renderTraitLineConnector(
                      path !== undefined
                        ? { props: { start: path } }
                        : { props: { disabled: true } },
                    )}
                </Fragment>
              );
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
              <div className={css.resetWrapper}>
                <Icon
                  inactive
                  className={css.resetIcon}
                  iconViaClassname
                  onClick={(event) => {
                    event.preventDefault();

                    if (!controlled) {
                      setUncontrolledSelected(defaultSelected);
                    }

                    if (typeof onReset === 'function') {
                      onReset();
                    }
                  }}
                />
              </div>
            </Tooltip>
          ))}
    </div>
  );
};
export default TraitLine;

/* TODO migrate for loading
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
})(TraitLine);
*/
