import clsx from 'clsx';
import { Fragment, ReactElement, useEffect, useState } from 'react';
import { useSpecialization } from '../../gw2api/hooks';
import Error from '../Error/Error';
import Icon from '../Icon/Icon';
import IconWithText from '../IconWithText/IconWithText';
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
  id: number;
  defaultSelected?: number[];
  selected?: number[];
  selectable?: boolean;
  resettable?: boolean;
  onReset?: () => void;
  onSelect?: (v: { tier: number; id: number; index: number }) => void;
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
  } = props;
  const specialization = useSpecialization(id);

  const [uncontrolledSelected, setUncontrolledSelected] =
    useState(defaultSelected);

  useEffect(() => {
    setUncontrolledSelected(defaultSelected);
  }, [...defaultSelected]);

  if (specialization.loading) {
    // TODO: use a same-sized loading indicator here
    return (
      <div className={css.root}>
        <IconWithText {...props} loading />
      </div>
    );
  }
  if (specialization.error) {
    // TODO: use a same-sized error indicator here
    return (
      <div className={css.root}>
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
    name,
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
  console.log(`onSelect: ${onSelect}`);
  console.log(`typeof onSelect: ${typeof onSelect}`);
  console.log(`Controlled: ${controlled}`);
  console.log(`Selected: ${selected}`);

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
            onClick: (event: MouseEvent) => {
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

  return (
    <div
      className={css.root}
      style={{ backgroundImage: `url('${background}')` }}
    >
      <div className={css.wrapper}>
        <div className={css.wrapperTooltip}>
          <Tooltip content={name}>
            <span className={css.innerTooltip} />
          </Tooltip>
        </div>

        <div className={css.majorTraitsWrapper}>
          {majorTraits
            .reduce((prevArray, currentValue, currentIndex) => {
              if (currentIndex % 3 === 0) {
                return [...prevArray, [currentValue]];
              }
              return [
                ...prevArray.slice(0, -1),
                [...prevArray.slice(-1)[0], currentValue],
              ];
            }, [])
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
