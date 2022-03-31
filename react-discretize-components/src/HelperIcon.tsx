import { Tooltip } from '@discretize/gw2-ui-new';
import { HelpOutline } from '@mui/icons-material';
import * as React from 'react';

export interface HelperIconProps {
  text: string;
  size: React.ComponentProps<typeof HelpOutline>['fontSize'];
  fontSize: string;
}
const HelperIcon = ({ text, size, fontSize }: HelperIconProps) => {
  return (
    <Tooltip content={text}>
      <span>
        <HelpOutline sx={{ color: 'primary.dark', fontSize }} fontSize={size} />
      </span>
    </Tooltip>
  );
};
export default HelperIcon;
