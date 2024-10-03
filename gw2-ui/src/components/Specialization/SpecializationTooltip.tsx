import { type ReactElement } from 'react';
import type GW2ApiSpecialization from '../../gw2api/types/specialization/specialization';
import DetailsHeader from '../DetailsHeader/DetailsHeader';
import DetailsText from '../DetailsText/DetailsText';

export interface SpecializationTooltipProps {
  data: GW2ApiSpecialization;
}

const SpecializationTooltip = ({
  data,
}: SpecializationTooltipProps): ReactElement => {
  const { name, profession, elite } = data;

  return (
    <>
      <DetailsHeader>{name}</DetailsHeader>
      <DetailsText
        lines={[
          profession +
            ' ' +
            (elite ? 'Elite Specialization' : 'Specialization'),
        ]}
      />
    </>
  );
};

export default SpecializationTooltip;
