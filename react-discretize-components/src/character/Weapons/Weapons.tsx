import {
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Icon, Item } from '@discretize/gw2-ui-new';
import NoSelection from '../../helpers/NoSelection';
import TextDivider from '../../helpers/TextDivider/TextDivider';

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
  icon: {
    fontSize: 32,
  },
}));

type ItemUpgrades = React.ComponentProps<typeof Item>['upgrades'];

function createUpgrades(array: (number | undefined)[]): ItemUpgrades {
  return array.filter((elem) => typeof elem === 'number') as number[];
}

type Affix = React.ComponentProps<typeof Item>['stat'];

export interface WeaponsProps {
  weapon1MainId?: number;
  weapon1MainSigil1Id?: number;
  weapon1MainSigil2Id?: number;
  weapon1MainType?: number;
  weapon1MainAffix?: Affix;
  weapon1MainSigil1?: string;
  weapon1MainSigil2?: string;
  weapon1MainInfusion1Id?: number;
  weapon1MainInfusion2Id?: number;
  weapon1OffId?: number;
  weapon1OffSigilId?: number;
  weapon1OffType?: number;
  weapon1OffAffix?: Affix;
  weapon1OffSigil?: string;
  weapon1OffInfusionId?: number;
  weapon2MainId?: number;
  weapon2MainSigil1Id?: number;
  weapon2MainSigil2Id?: number;
  weapon2MainType?: number;
  weapon2MainAffix?: Affix;
  weapon2MainSigil1?: string;
  weapon2MainSigil2?: string;
  weapon2MainInfusion1Id?: number;
  weapon2MainInfusion2Id?: number;
  weapon2OffId?: number;
  weapon2OffSigilId?: number;
  weapon2OffType?: number;
  weapon2OffAffix?: Affix;
  weapon2OffSigil?: string;
  weapon2OffInfusionId?: number;
}

const Weapons = ({
  weapon1MainId,
  weapon1MainSigil1Id,
  weapon1MainSigil2Id,
  weapon1MainType,
  weapon1MainAffix,
  weapon1MainSigil1,
  weapon1MainSigil2,
  weapon1MainInfusion1Id,
  weapon1MainInfusion2Id,
  weapon1OffId,
  weapon1OffSigilId,
  weapon1OffType,
  weapon1OffAffix,
  weapon1OffSigil,
  weapon1OffInfusionId,
  weapon2MainId,
  weapon2MainSigil1Id,
  weapon2MainSigil2Id,
  weapon2MainType,
  weapon2MainAffix,
  weapon2MainSigil1,
  weapon2MainSigil2,
  weapon2MainInfusion1Id,
  weapon2MainInfusion2Id,
  weapon2OffId,
  weapon2OffSigilId,
  weapon2OffType,
  weapon2OffAffix,
  weapon2OffSigil,
  weapon2OffInfusionId,
}: WeaponsProps) => {
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
                id={weapon1MainId}
                stat={weapon1MainAffix}
                className={classes.gw2Item}
                // type={weapon1MainType}
                upgrades={createUpgrades([
                  weapon1MainSigil1Id,
                  weapon1MainSigil2Id,
                  weapon1MainInfusion1Id,
                  weapon1MainInfusion2Id,
                ])}
                disableText
              />
              <ListItemText
                secondaryTypographyProps={{ fontSize: '0.82rem !important' }}
                primary={`${weapon1MainAffix}`}
                secondary={
                  weapon1MainSigil1 +
                  (weapon1MainSigil2 ? `, ${weapon1MainSigil2}` : '')
                }
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
              id={weapon1OffId}
              stat={weapon1OffAffix}
              className={classes.gw2Item}
              // type={weapon1OffType}
              upgrades={createUpgrades([
                weapon1OffSigilId,
                weapon1OffInfusionId,
              ])}
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
            <Icon name="WeaponSwap" className={classes.icon} />
          </TextDivider>

          <List disablePadding>
            {weapon2MainId ? (
              <ListItem disableGutters className={classes.listItem}>
                <Item
                  id={weapon2MainId}
                  stat={weapon2MainAffix}
                  className={classes.gw2Item}
                  // type={weapon2MainType}
                  upgrades={createUpgrades([
                    weapon2MainSigil1Id,
                    weapon2MainSigil2Id,
                    weapon2MainInfusion1Id,
                    weapon2MainInfusion2Id,
                  ])}
                  disableText
                />
                <ListItemText
                  primary={`${weapon2MainAffix}`}
                  secondary={
                    weapon2MainSigil1 +
                    (weapon2MainSigil2 ? `, ${weapon2MainSigil2}` : '')
                  }
                  classes={{ secondary: classes.secondaryText }}
                  className={classes.listItemText}
                />
              </ListItem>
            ) : (
              <ListItem disableGutters className={classes.listItem}>
                <NoSelection size={isMobile ? 'large2' : 'big'} />
                <ListItemText
                  className={classes.listItemText}
                  primary="Empty"
                />
              </ListItem>
            )}

            {weapon2OffId && (
              <ListItem disableGutters className={classes.listItem}>
                <Item
                  id={weapon2OffId}
                  stat={weapon2OffAffix}
                  className={classes.gw2Item}
                  //  type={weapon2OffType}
                  upgrades={createUpgrades([
                    weapon2OffSigilId,
                    weapon2OffInfusionId,
                  ])}
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
                <ListItemText
                  className={classes.listItemText}
                  primary="Empty"
                />
              </ListItem>
            )}
          </List>
        </>
      )}
    </>
  );
};

export default Weapons;
