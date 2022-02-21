import { Skill as GW2UISkill } from 'gw2-ui-new';
import iconSizes from './helpers/iconSizes';

export default function Skill({ size, ...rest }) {
  return (
    <GW2UISkill
      style={{
        fontSize: iconSizes[size],
        lineHeight: 0,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}
