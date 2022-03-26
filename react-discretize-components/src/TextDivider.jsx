import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  divider: {
    height: 1,
    backgroundColor: theme.palette.divider,
    flexGrow: 1,
  },
  content: {
    ...theme.typography.h6,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontWeight: 400,
    color: theme.palette.text.primary,
    textTransform: 'uppercase',
    letterSpacing: 2,
    lineHeight: '1.35417em',
  },
}));

const TextDivider = ({ className, text, children }) => {
  const { classes } = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.divider} />
      <div className={classes.content}>{text || children}</div>
      <div className={classes.divider} />
    </div>
  );
};
export default TextDivider;
