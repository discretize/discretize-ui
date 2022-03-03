import { List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Item } from '@discretize/gw2-ui-new';

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

/**
 * Creates an array of upgrades that can be passed on to the Item component. Undefined values will be filtered out.
 * @param {number | undefined} infusionId id of the infusion
 * @param {number | undefined} runeId id of the rune
 * @param {number | undefined} runeCount number of runes that should be highlighted
 * @returns
 */
function createUpgrades(infusionId, runeId, runeCount) {
  let upgrades = [];
  if (infusionId) upgrades = [infusionId];
  if (runeId) upgrades = [...upgrades, [runeId, runeCount]];
  return upgrades;
}

const Armor = ({
  helmData,
  helmId,
  helmRuneId,
  helmInfusionId,
  helmRuneCount,
  helmAffix,
  helmRune,
  shouldersData,
  shouldersId,
  shouldersRuneId,
  shouldersInfusionId,
  shouldersRuneCount,
  shouldersAffix,
  shouldersRune,
  coatData,
  coatId,
  coatRuneId,
  coatInfusionId,
  coatRuneCount,
  coatAffix,
  coatRune,
  glovesData,
  glovesId,
  glovesRuneId,
  glovesInfusionId,
  glovesRuneCount,
  glovesAffix,
  glovesRune,
  leggingsData,
  leggingsId,
  leggingsRuneId,
  leggingsInfusionId,
  leggingsRuneCount,
  leggingsAffix,
  leggingsRune,
  bootsData,
  bootsId,
  bootsRuneId,
  bootsInfusionId,
  bootsRuneCount,
  bootsAffix,
  bootsRune,
}) => {
  const { classes } = useStyles();

  return (
    <List disablePadding>
      <ListItem disableGutters className={classes.listItem}>
        <Item
          data={helmData}
          id={helmId}
          upgrades={createUpgrades(helmInfusionId, helmRuneId, helmRuneCount)}
          disableText
          className={classes.gw2Item}
        />
        <ListItemText
          primary={helmAffix}
          secondary={helmRune}
          classes={{ secondary: classes.secondaryText }}
          className={classes.listItemText}
        />
      </ListItem>

      <ListItem disableGutters className={classes.listItem}>
        <Item
          data={shouldersData}
          id={shouldersId}
          upgrades={createUpgrades(shouldersInfusionId, shouldersRuneId, shouldersRuneCount)}
          disableText
          className={classes.gw2Item}
        />
        <ListItemText
          primary={shouldersAffix}
          secondary={shouldersRune}
          classes={{ secondary: classes.secondaryText }}
          className={classes.listItemText}
        />
      </ListItem>

      <ListItem disableGutters className={classes.listItem}>
        <Item
          data={coatData}
          id={coatId}
          upgrades={createUpgrades(coatInfusionId, coatRuneId, coatRuneCount)}
          disableText
          className={classes.gw2Item}
        />
        <ListItemText
          primary={coatAffix}
          secondary={coatRune}
          classes={{ secondary: classes.secondaryText }}
          className={classes.listItemText}
        />
      </ListItem>

      <ListItem disableGutters className={classes.listItem}>
        <Item
          data={glovesData}
          id={glovesId}
          upgrades={createUpgrades(glovesInfusionId, glovesRuneId, glovesRuneCount)}
          disableText
          className={classes.gw2Item}
        />
        <ListItemText
          primary={glovesAffix}
          secondary={glovesRune}
          classes={{ secondary: classes.secondaryText }}
          className={classes.listItemText}
        />
      </ListItem>

      <ListItem disableGutters className={classes.listItem}>
        <Item
          data={leggingsData}
          id={leggingsId}
          upgrades={createUpgrades(leggingsInfusionId, leggingsRuneId, leggingsRuneCount)}
          disableText
          className={classes.gw2Item}
        />
        <ListItemText
          primary={leggingsAffix}
          secondary={leggingsRune}
          classes={{ secondary: classes.secondaryText }}
          className={classes.listItemText}
        />
      </ListItem>

      <ListItem disableGutters className={classes.listItem}>
        <Item
          data={bootsData}
          id={bootsId}
          upgrades={createUpgrades(bootsInfusionId, bootsRuneId, bootsRuneCount)}
          disableText
          className={classes.gw2Item}
        />
        <ListItemText
          primary={bootsAffix}
          secondary={bootsRune}
          classes={{ secondary: classes.secondaryText }}
          className={classes.listItemText}
        />
      </ListItem>
    </List>
  );
};

export default Armor;
