import clsx from 'clsx';
import {
  CSSProperties,
  Fragment,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import Progress from '../Progress/Progress';
import Error from '../Error/Error';
import Icon from '../Icon/Icon';
import SpecializationTooltip from '../Specialization/SpecializationTooltip';
import Tooltip from '../Tooltip/Tooltip';
import TraitComponent from '../Trait/Trait';
import TraitLineConnector, {
  Paths,
  TraitLineConnectorProps,
} from './TraitLineConnector';
import { useSpecialization } from '../../gw2api/hooks';
import css from './TraitLine.module.css';

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

export interface TraitLineProps {
  id: number;
  defaultSelected?: number[];
  selected?: number[];
  selectable?: boolean;
  resettable?: boolean;
  onReset?: () => void;
  onSelect?: (v: { tier: number; id: number; index: number }) => void;
  style?: CSSProperties;
  className?: string;
}

const TRAITLINE_ERROR_NAMES = {
  404: 'Specialization Not Found',
  500: 'Network Error',
};
const TRAITLINE_ERROR_MESSAGES = {
  404: (id: number) =>
    `The requested specialization with the id ${id} was not found.`,
  500: (id: number) =>
    `A Network Error occured trying to fetch the specialization ${id}.`,
};

const TraitLine = (props: TraitLineProps): ReactElement => {
  const {
    id,
    defaultSelected = [],
    selected: propsSelected = [],
    selectable,
    resettable,
    onReset,
    onSelect,
    style,
    className,
  } = props;
  const specialization = useSpecialization(id);

  const [uncontrolledSelected, setUncontrolledSelected] =
    useState(defaultSelected);

  useEffect(() => {
    setUncontrolledSelected(defaultSelected);
  }, [...defaultSelected]);

  if (specialization.loading) {
    return (
      <div className={css.loadingOrError}>
        <Progress />
      </div>
    );
  }
  if (specialization.error) {
    return (
      <div className={css.loadingOrError}>
        <Error
          {...props}
          code={specialization.error}
          name={TRAITLINE_ERROR_NAMES}
          message={TRAITLINE_ERROR_MESSAGES}
        />
      </div>
    );
  }

  const {
    major_traits: majorTraits,
    minor_traits: minorTraits,
    background,
  } = specialization.data;

  const controlled = typeof onSelect === 'function';
  let selected: number[];

  if (controlled) {
    selected = propsSelected;
  } else if (selectable) {
    selected = uncontrolledSelected;
  } else {
    selected = defaultSelected || propsSelected;
  }

  const renderMinorTrait = ({ id: minorTraitId }: { id: number }) => (
    <TraitComponent
      key={minorTraitId}
      id={minorTraitId}
      disableText
      inline={false}
      className={css.minorTrait}
    />
  );

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
      }}
    />
  );

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
            content={<SpecializationTooltip data={specialization.data} />}
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
export default TraitLine;

function arrays_equal<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
