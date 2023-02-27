import clsx from 'clsx';
import { CSSProperties, ReactElement } from 'react';
import { useSpecialization } from '../../gw2api/hooks';
import Error from '../Error/Error';
import Progress from '../Progress/Progress';
import css from './TraitLine.module.css';
import TraitLineConnector, {
  TraitLineConnectorProps,
} from './TraitLineConnector';
import TraitLineInternal from './TraitLineInternal';

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
  const specialization = useSpecialization(props.id);

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

  return (
    <TraitLineInternal {...props} dataSpecialization={specialization.data} />
  );
};
export default TraitLine;
