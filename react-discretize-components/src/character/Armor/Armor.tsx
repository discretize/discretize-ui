import { Item } from '@discretize/gw2-ui-new';
import { makeStyles } from 'tss-react/mui';
import firstUppercase from '../../helpers/firstUppercase';

export const useStyles = makeStyles()((theme) => ({
  list: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    position: 'relative',
    paddingTop: '8px',
    paddingBottom: '8px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
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
    flex: '1 1 auto',
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
  primaryText: { lineHeight: 1.4, fontWeight: 500, fontFamily: 'Muli' },
  secondaryText: {
    margin: 0,
    display: 'block',
    lineHeight: 1.23,
    fontSize: '0.70rem',
    fontWeight: 300,
    fontFamily: 'Muli',
  },
}));

type ItemUpgrades = React.ComponentProps<typeof Item>['upgrades'];

/**
 * Creates an array of upgrades that can be passed on to the Item component. Undefined values will be filtered out.
 * @param {number | undefined} infusionId id of the infusion
 * @param {number | undefined} runeId id of the rune
 * @param {number | undefined} runeCount number of runes that should be highlighted
 * @returns
 */
function createUpgrades(
  infusionId?: number,
  runeId?: number,
  runeCount: number = 1,
): ItemUpgrades {
  let upgrades: ItemUpgrades = [];
  if (infusionId) upgrades = [infusionId];
  if (runeId) upgrades = [...upgrades, [runeId, runeCount]];
  return upgrades;
}

function formatRune(text: string): string {
  return firstUppercase(
    text
      .replace('Superior Rune of the ', '')
      .replace('Runa superior del ', '')
      .replace('Überlegene Rune des ', '')
      .replace("Rune d'érudit ", ''),
  );
}

export function formatInfusion(result: string): string {
  const match = result.match(/.*\+[0-9][0-9]?/g);
  if (match?.length === 1) return match[0];
  //TODO implement fallback for french and chinese
  return result;
}

type Affix = React.ComponentProps<typeof Item>['stat'];
export interface ArmorProps {
  showInfusions?: boolean;
  helmId: number;
  helmRuneId?: number;
  helmInfusionId?: number;
  helmRuneCount?: number;
  helmAffix: Affix;
  helmRune?: string;
  shouldersId: number;
  shouldersRuneId?: number;
  shouldersInfusionId?: number;
  shouldersRuneCount?: number;
  shouldersAffix: Affix;
  shouldersRune?: string;
  coatId: number;
  coatRuneId?: number;
  coatInfusionId?: number;
  coatRuneCount?: number;
  coatAffix: Affix;
  coatRune?: string;
  glovesId: number;
  glovesRuneId?: number;
  glovesInfusionId?: number;
  glovesRuneCount?: number;
  glovesAffix: Affix;
  glovesRune?: string;
  leggingsId: number;
  leggingsRuneId?: number;
  leggingsInfusionId?: number;
  leggingsRuneCount?: number;
  leggingsAffix: Affix;
  leggingsRune?: string;
  bootsId: number;
  bootsRuneId?: number;
  bootsInfusionId?: number;
  bootsRuneCount?: number;
  bootsAffix: Affix;
  bootsRune?: string;
}

const Armor = ({
  showInfusions,
  helmId,
  helmRuneId,
  helmInfusionId,
  helmRuneCount,
  helmAffix,
  helmRune,
  shouldersId,
  shouldersRuneId,
  shouldersInfusionId,
  shouldersRuneCount,
  shouldersAffix,
  shouldersRune,
  coatId,
  coatRuneId,
  coatInfusionId,
  coatRuneCount,
  coatAffix,
  coatRune,
  glovesId,
  glovesRuneId,
  glovesInfusionId,
  glovesRuneCount,
  glovesAffix,
  glovesRune,
  leggingsId,
  leggingsRuneId,
  leggingsInfusionId,
  leggingsRuneCount,
  leggingsAffix,
  leggingsRune,
  bootsId,
  bootsRuneId,
  bootsInfusionId,
  bootsRuneCount,
  bootsAffix,
  bootsRune,
}: ArmorProps) => {
  const { classes } = useStyles();

  const ItemDetails = ({
    affix,
    infusionId,
    runeId,
    runeName,
  }: {
    affix?: string;
    infusionId?: number;
    runeId?: number;
    runeName?: string;
  }) => (
    <div className={classes.listItemText}>
      <span className={classes.primaryText}>{affix}</span>
      <p className={classes.secondaryText}>
        {runeId ? <Item id={runeId} text={formatRune} /> : { runeName }}
        {showInfusions && (
          <>
            <br />
            {infusionId && <Item id={infusionId} text={formatInfusion} />}
          </>
        )}
      </p>
    </div>
  );

  return (
    <ul className={classes.list}>
      <li className={classes.listItem}>
        <Item
          id={helmId}
          upgrades={createUpgrades(helmInfusionId, helmRuneId, helmRuneCount)}
          disableText
          className={classes.gw2Item}
        />
        <ItemDetails
          affix={helmAffix}
          runeId={helmRuneId}
          infusionId={helmInfusionId}
          runeName={helmRune}
        />
      </li>

      <li className={classes.listItem}>
        <Item
          id={shouldersId}
          upgrades={createUpgrades(
            shouldersInfusionId,
            shouldersRuneId,
            shouldersRuneCount,
          )}
          disableText
          className={classes.gw2Item}
        />
        <ItemDetails
          affix={shouldersAffix}
          runeId={shouldersRuneId}
          infusionId={shouldersInfusionId}
          runeName={shouldersRune}
        />
      </li>

      <li className={classes.listItem}>
        <Item
          id={coatId}
          upgrades={createUpgrades(coatInfusionId, coatRuneId, coatRuneCount)}
          disableText
          className={classes.gw2Item}
        />
        <ItemDetails
          affix={coatAffix}
          runeId={coatRuneId}
          infusionId={coatInfusionId}
          runeName={coatRune}
        />
      </li>

      <li className={classes.listItem}>
        <Item
          id={glovesId}
          upgrades={createUpgrades(
            glovesInfusionId,
            glovesRuneId,
            glovesRuneCount,
          )}
          disableText
          className={classes.gw2Item}
        />
        <ItemDetails
          affix={glovesAffix}
          runeId={glovesRuneId}
          infusionId={glovesInfusionId}
          runeName={glovesRune}
        />
      </li>

      <li className={classes.listItem}>
        <Item
          id={leggingsId}
          upgrades={createUpgrades(
            leggingsInfusionId,
            leggingsRuneId,
            leggingsRuneCount,
          )}
          disableText
          className={classes.gw2Item}
        />
        <ItemDetails
          affix={leggingsAffix}
          runeId={leggingsRuneId}
          infusionId={leggingsInfusionId}
          runeName={leggingsRune}
        />
      </li>

      <li className={classes.listItem}>
        <Item
          id={bootsId}
          upgrades={createUpgrades(
            bootsInfusionId,
            bootsRuneId,
            bootsRuneCount,
          )}
          disableText
          className={classes.gw2Item}
        />
        <ItemDetails
          affix={bootsAffix}
          runeId={bootsRuneId}
          infusionId={bootsInfusionId}
          runeName={bootsRune}
        />
      </li>
    </ul>
  );
};

export default Armor;
