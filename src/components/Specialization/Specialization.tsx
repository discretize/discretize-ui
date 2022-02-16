import clsx from 'clsx';
import { ReactElement } from 'react';
import globalcss from '../../global.module.css';
import { useSpecialization } from '../../gw2api/hooks';
import Error from '../Error/Error';
import IconWithText from '../IconWithText/IconWithText';
import WikiLink from '../WikiLink/WikiLink';

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

export interface SpecializationProps {
  id: number;
  disableIcon?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  inline?: boolean;
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

  const { disableIcon, disableText, disableLink, inline } = props;
  const { name, icon, profession } = specialization.data;

  return (
    <IconWithText
      icon={icon}
      text={
        disableLink ? (
          name
        ) : (
          <WikiLink
            to={name}
            className={clsx(
              profession && globalcss[`coloredProfession${profession}`],
            )}
          />
        )
      }
      disableIcon={disableIcon}
      disableText={disableText}
      inline={inline}
      iconProps={{ hexagon: true }}
      className={profession && globalcss[`coloredProfession${profession}`]}
    />
  );
};

export default Specialization;
