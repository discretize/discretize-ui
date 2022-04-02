import { makeStyles } from 'tss-react/mui';

export const useDefaultStyles = makeStyles()((theme) => ({
  gw2Item: {
    fontSize: '60px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '45px',
    },
    lineHeight: '0.9 !important',
  },
}));
