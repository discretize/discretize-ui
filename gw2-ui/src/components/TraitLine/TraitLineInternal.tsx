import clsx from 'clsx';
import {
  CSSProperties,
  Fragment,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import GW2ApiSpecialization from '../../gw2api/types/specialization/specialization';
import GW2ApiTrait from '../../gw2api/types/traits/trait';
import Icon from '../Icon/Icon';
import SpecializationTooltip from '../Specialization/SpecializationTooltip';
import Tooltip from '../Tooltip/Tooltip';
import Trait from '../Trait/Trait';
import TraitComponent from '../Trait/TraitInternal';

import css from './TraitLine.module.css';
import TraitLineConnector, {
  Paths,
  TraitLineConnectorProps,
} from './TraitLineConnector';

// eslint-disable-next-line react/prop-types
const renderTraitLineConnector = ({
  className,
  props,
}: {
  className?: string;
  props?: TraitLineConnectorProps;
}) => (
  <TraitLineConnector className={clsx(className, css.connector)} {...props} />
);

/**
 * 2 modes to use:
 * - Supply only dataSpecialization and no dataTraits (then you also need to supply a TraitElement)
 * - Supply only dataSpecialization and dataTraits
 */
export interface TraitLineProps {
  dataSpecialization: GW2ApiSpecialization;
  dataTraits?: Record<number, GW2ApiTrait>;
  defaultSelected?: number[];
  selected?: number[];
  selectable?: boolean;
  resettable?: boolean;
  onReset?: () => void;
  onSelect?: (v: { tier: number; id: number; index: number }) => void;
  style?: CSSProperties;
  className?: string;
}

const TraitLineInternal = (props: TraitLineProps): ReactElement => {
  const {
    defaultSelected = [],
    selected: propsSelected = [],
    selectable,
    resettable,
    onReset,
    onSelect,
    style,
    className,
    dataSpecialization,
    dataTraits,
  } = props;

  const [uncontrolledSelected, setUncontrolledSelected] =
    useState(defaultSelected);

  useEffect(() => {
    setUncontrolledSelected(defaultSelected);
  }, [...defaultSelected]);

  const {
    major_traits: majorTraits,
    minor_traits: minorTraits,
    background,
  } = dataSpecialization;

  const controlled = typeof onSelect === 'function';
  let selected: number[];

  if (controlled) {
    selected = propsSelected;
  } else if (selectable) {
    selected = uncontrolledSelected;
  } else {
    selected = defaultSelected || propsSelected;
  }

  const renderMinorTrait = ({ id: minorTraitId }: { id: number }) => {
    const sharedProps = {
      inline: false,
      disableText: true,
      className: css.minorTrait,
    };
    if (!dataTraits) {
      return <Trait {...sharedProps} id={minorTraitId} key={minorTraitId} />;
    }

    return (
      <TraitComponent
        {...sharedProps}
        data={dataTraits[minorTraitId]}
        key={dataTraits[minorTraitId].id}
      />
    );
  };

  const renderMajorTrait = ({
    tier,
    id: majorTraitId,
    selected: isSelected,
    index: majorTraitIndex,
  }: {
    tier: number;
    id: number;
    selected: boolean;
    index: number;
  }) => {
    const sharedProps = {
      disableText: true,
      inline: false,
      inactive: !isSelected,
      className: clsx(
        css.majorTrait,
        !isSelected && (controlled || selectable) && css.majorTraitAdditional,
      ),
      ...(!isSelected &&
        (controlled || selectable) && {
          onClick: (event: React.MouseEvent<HTMLDivElement>) => {
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
                const selectedIndexBelowToAppend = selected.findIndex(
                  (selectedMajorTraitId) =>
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
    };

    if (!dataTraits) {
      return <Trait {...sharedProps} id={majorTraitId} key={majorTraitId} />;
    }

    return (
      <TraitComponent
        key={dataTraits[majorTraitId].id}
        data={dataTraits[majorTraitId]}
        {...sharedProps}
      />
    );
  };

  // turn [1,2,3,4,5,6,7,8,9] into [[1,2,3], [4,5,6], [7,8,9]]
  const majorTraitsByTier: number[][] = [];
  for (let i = 0; i < majorTraits.length; i += 3) {
    majorTraitsByTier.push(majorTraits.slice(i, i + 3));
  }

  return (
    <div
      className={clsx(className, css.root)}
      style={{ ...style, backgroundImage: `url('${background}')` }}
    >
      <div className={css.wrapper}>
        <div className={css.wrapperTooltip}>
          <Tooltip
            content={<SpecializationTooltip data={dataSpecialization} />}
          >
            <span className={css.innerTooltip} />
          </Tooltip>
        </div>

        <div className={css.majorTraitsWrapper}>
          {majorTraitsByTier.map((majorTraitsChunk, tier) => {
            const selectedMajorTraitIndex = majorTraitsChunk.findIndex(
              (majorTraitId) => selected.includes(majorTraitId),
            );
            const path = Paths[selectedMajorTraitIndex];
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={tier}>
                {tier === 0 &&
                  renderTraitLineConnector({
                    className: css.traitlineConnectorExtra,
                  })}

                {renderMinorTrait({ id: minorTraits[tier] })}

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

      {!controlled &&
        selectable &&
        resettable &&
        !arrays_equal(uncontrolledSelected, defaultSelected) && (
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
        )}
    </div>
  );
};
export default TraitLineInternal;

function arrays_equal<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
