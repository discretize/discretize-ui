import { ReactElement } from 'react';

import { useTrait } from '../../gw2api/hooks';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import TraitInternal, { TraitInternalProps } from './TraitInternal';

export interface TraitProps extends Omit<TraitInternalProps, 'data'> {
  id: number;
}

const TRAIT_ERROR_NAMES = {
  404: 'Trait Not Found',
  500: 'Network Error',
};
const TRAIT_ERROR_MESSAGES = {
  404: (id: number) => `The requested trait with the id ${id} was not found.`,
  500: (id: number) =>
    `A Network Error occured trying to fetch the trait ${id}.`,
};

const Trait = (props: TraitProps): ReactElement => {
  const trait = useTrait(props.id);

  if (trait.loading) {
    return <IconWithText {...props} loading />;
  }
  if (trait.error) {
    return (
      <Error
        {...props}
        code={trait.error}
        name={TRAIT_ERROR_NAMES}
        message={TRAIT_ERROR_MESSAGES}
      />
    );
  }

  return <TraitInternal {...props} data={trait.data} />;
};

export default Trait;
