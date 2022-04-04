import { makeStyles } from 'tss-react/mui';

export const useDefaultStyles = makeStyles()((theme) => ({
  gw2Item: {
    fontSize: '60px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '45px',
    },
    lineHeight: '0.9 !important',
  },
  title: {
    fontSize: '0.8125rem',
    fontWeight: 400,
    fontFamily: 'Muli',
  },
  infusions: {
    fontSize: '0.8rem',
    color: 'rgb(153 153 153)',
  },
}));
