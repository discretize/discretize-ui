import { type ReactElement } from 'react';
import { useSpecialization } from '../../gw2api/hooks';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import SpecializationInternal, {
  type SpecializationInternalProps,
} from './SpecializationInternal';

const SPECIALIZATION_ERROR_NAMES = {
  404: 'Specialization Not Found',
  500: 'Network Error',
};
const SPECIALIZATION_ERROR_MESSAGES = {
  404: (id: number) =>
    `The requested specialization with the id ${id} was not found.`,
  500: (id: number) =>
    `A Network Error occured trying to fetch the specialization ${id}.`,
};

export interface SpecializationProps extends Omit<
  SpecializationInternalProps,
  'data'
> {
  id: number;
}

const Specialization = (props: SpecializationProps): ReactElement => {
  const specialization = useSpecialization(props.id);

  if (specialization.loading) {
    return <IconWithText {...props} loading />;
  }
  if (specialization.error) {
    return (
      <Error
        {...props}
        code={specialization.error}
        name={SPECIALIZATION_ERROR_NAMES}
        message={SPECIALIZATION_ERROR_MESSAGES}
      />
    );
  }

  return <SpecializationInternal {...props} data={specialization.data} />;
};

export default Specialization;
