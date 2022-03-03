import { List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Icon, Item } from '@discretize/gw2-ui-new';
import NoSelection from '../NoSelection';
import TextDivider from '../TextDivider';

const useStyles = makeStyles()((theme) => ({
  listItem: {
    lineHeight: 0,
    justifyContent: 'center',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    '& > *:first-child': {
      textAlign: 'right',
    },
    '& > *:last-child': {
      width: '55%',
      textAlign: 'left',
    },
  },
  listItemText: {
    flexGrow: 0,
    marginLeft: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    borderLeft: `1px solid ${theme.palette.divider}`,
    lineHeight: 0,
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gw2Item: {
    fontSize: '60px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '45px',
    },
    lineHeight: '1 !important',
  },
  secondaryText: {
    fontSize: '0.80rem',
  },
}));

const Weapons = ({
  weapon1MainData,
  weapon1MainId,
  weapon1MainSigil1Id,
  weapon1MainSigil2Id,
  weapon1MainType,
  weapon1MainAffix,
  weapon1MainSigil1,
  weapon1MainSigil2,
  weapon1MainInfusion1Id,
  weapon1MainInfusion2Id,
  weapon1OffData,
  weapon1OffId,
  weapon1OffSigilId,
  weapon1OffType,
  weapon1OffAffix,
  weapon1OffSigil,
  weapon1OffInfusionId,
  weapon2MainData,
  weapon2MainId,
  weapon2MainSigil1Id,
  weapon2MainSigil2Id,
  weapon2MainType,
  weapon2MainAffix,
  weapon2MainSigil1,
  weapon2MainSigil2,
  weapon2MainInfusion1Id,
  weapon2MainInfusion2Id,
  weapon2OffData,
  weapon2OffId,
  weapon2OffSigilId,
  weapon2OffType,
  weapon2OffAffix,
  weapon2OffSigil,
  weapon2OffInfusionId,
}) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <List disablePadding>
        <ListItem disableGutters className={classes.listItem}>
          {weapon1MainId ? (
            <>
              <Item
                data={weapon1MainData}
                id={weapon1MainId}
                stat={weapon1MainAffix}
                className={classes.gw2Item}
                type={weapon1MainType}
                upgrades={[
                  weapon1MainSigil1Id,
                  weapon1MainSigil2Id,
                  weapon1MainInfusion1Id,
                  weapon1MainInfusion2Id,
                ].filter((d) => d !== undefined)}
                disableText
              />
              <ListItemText
                secondaryTypographyProps={{ fontSize: '0.82rem !important' }}
                primary={`${weapon1MainAffix}`}
                secondary={weapon1MainSigil1 + (weapon1MainSigil2 ? `, ${weapon1MainSigil2}` : '')}
                classes={{ secondary: classes.secondaryText }}
                className={classes.listItemText}
              />
            </>
          ) : (
            <>
              <NoSelection size={isMobile ? 'large2' : 'big'} />
              <ListItemText className={classes.listItemText} primary="Empty" />
            </>
          )}
        </ListItem>

        {weapon1OffId && (
          <ListItem disableGutters className={classes.listItem}>
            <Item
              data={weapon1OffData}
              id={weapon1OffId}
              stat={weapon1OffAffix}
              className={classes.gw2Item}
              type={weapon1OffType}
              upgrades={[weapon1OffSigilId, weapon1OffInfusionId].filter((d) => d !== undefined)}
              disableText
            />
            <ListItemText
              primary={`${weapon1OffAffix}`}
              secondary={weapon1OffSigil}
              classes={{ secondary: classes.secondaryText }}
              className={classes.listItemText}
            />
          </ListItem>
        )}
        {!weapon1OffId && !weapon1MainSigil2Id && (
          <ListItem disableGutters className={classes.listItem}>
            <NoSelection size={isMobile ? 'large2' : 'big'} />
            <ListItemText className={classes.listItemText} primary="Empty" />
          </ListItem>
        )}
      </List>

      {(weapon2MainId || weapon2OffId) && (
        <>
          <TextDivider className={classes.divider}>
            <Icon name="WeaponSwap" style={{ fontSize: 32 }} />
          </TextDivider>

          <List disablePadding>
            {weapon2MainId ? (
              <ListItem disableGutters className={classes.listItem}>
                <Item
                  data={weapon2MainData}
                  id={weapon2MainId}
                  stat={weapon2MainAffix}
                  className={classes.gw2Item}
                  type={weapon2MainType}
                  upgrades={[
                    weapon2MainSigil1Id,
                    weapon2MainSigil2Id,
                    weapon2MainInfusion1Id,
                    weapon2MainInfusion2Id,
                  ].filter((d) => d !== undefined)}
                  disableText
                />
                <ListItemText
                  primary={`${weapon2MainAffix}`}
                  secondary={
                    weapon2MainSigil1 + (weapon2MainSigil2 ? `, ${weapon2MainSigil2}` : '')
                  }
                  classes={{ secondary: classes.secondaryText }}
                  className={classes.listItemText}
                />
              </ListItem>
            ) : (
              <ListItem disableGutters className={classes.listItem}>
                <NoSelection size={isMobile ? 'large2' : 'big'} />
                <ListItemText className={classes.listItemText} primary="Empty" />
              </ListItem>
            )}

            {weapon2OffId && (
              <ListItem disableGutters className={classes.listItem}>
                <Item
                  data={weapon2OffData}
                  id={weapon2OffId}
                  stat={weapon2OffAffix}
                  className={classes.gw2Item}
                  type={weapon2OffType}
                  upgrades={[weapon2OffSigilId, weapon2OffInfusionId].filter(
                    (d) => d !== undefined,
                  )}
                  disableText
                />
                <ListItemText
                  primary={`${weapon2OffAffix}`}
                  secondary={weapon2OffSigil}
                  classes={{ secondary: classes.secondaryText }}
                  className={classes.listItemText}
                />
              </ListItem>
            )}
            {!weapon2OffId && !weapon2MainSigil2Id && (
              <ListItem disableGutters className={classes.listItem}>
                <NoSelection size={isMobile ? 'large2' : 'big'} />
                <ListItemText className={classes.listItemText} primary="Empty" />
              </ListItem>
            )}
          </List>
        </>
      )}
    </>
  );
};

export default Weapons;
