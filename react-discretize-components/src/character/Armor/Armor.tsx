import { CreateItem, Item } from '@discretize/gw2-ui-new';
import { makeStyles } from 'tss-react/mui';
import DynamicItem from '../../helpers/DynamicItem/DynamicItem';
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
type Weights = React.ComponentProps<typeof CreateItem>['weight'];

export interface ArmorProps {
  weight?: Weights;
  showInfusions?: boolean;
  helmId?: number;
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
  weight,
  showInfusions,
  helmId,
  helmRuneId,
  helmInfusionId,
  helmRuneCount = 6,
  helmAffix,
  helmRune,
  shouldersId,
  shouldersRuneId,
  shouldersInfusionId,
  shouldersRuneCount = 6,
  shouldersAffix,
  shouldersRune,
  coatId,
  coatRuneId,
  coatInfusionId,
  coatRuneCount = 6,
  coatAffix,
  coatRune,
  glovesId,
  glovesRuneId,
  glovesInfusionId,
  glovesRuneCount = 6,
  glovesAffix,
  glovesRune,
  leggingsId,
  leggingsRuneId,
  leggingsInfusionId,
  leggingsRuneCount = 6,
  leggingsAffix,
  leggingsRune,
  bootsId,
  bootsRuneId,
  bootsInfusionId,
  bootsRuneCount = 6,
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
      <div className={classes.secondaryText}>
        {runeId ? <Item id={runeId} text={formatRune} /> : runeName}
        {showInfusions && (
          <>
            <br />
            {infusionId && <Item id={infusionId} text={formatInfusion} />}
          </>
        )}
      </div>
    </div>
  );

  return (
    <ul className={classes.list}>
      <li className={classes.listItem}>
        <DynamicItem
          id={helmId}
          type="Helm"
          weight={weight}
          affix={helmAffix}
          upgrades={createUpgrades(helmInfusionId, helmRuneId, helmRuneCount)}
        />
        <ItemDetails
          affix={helmAffix}
          runeId={helmRuneId}
          infusionId={helmInfusionId}
          runeName={helmRune}
        />
      </li>

      <li className={classes.listItem}>
        <DynamicItem
          id={shouldersId}
          type="Shoulders"
          weight={weight}
          affix={shouldersAffix}
          upgrades={createUpgrades(
            shouldersInfusionId,
            shouldersRuneId,
            shouldersRuneCount,
          )}
        />
        <ItemDetails
          affix={shouldersAffix}
          runeId={shouldersRuneId}
          infusionId={shouldersInfusionId}
          runeName={shouldersRune}
        />
      </li>

      <li className={classes.listItem}>
        <DynamicItem
          id={coatId}
          type="Coat"
          weight={weight}
          affix={coatAffix}
          upgrades={createUpgrades(coatInfusionId, coatRuneId, coatRuneCount)}
        />
        <ItemDetails
          affix={coatAffix}
          runeId={coatRuneId}
          infusionId={coatInfusionId}
          runeName={coatRune}
        />
      </li>

      <li className={classes.listItem}>
        <DynamicItem
          id={glovesId}
          type="Gloves"
          weight={weight}
          affix={glovesAffix}
          upgrades={createUpgrades(
            glovesInfusionId,
            glovesRuneId,
            glovesRuneCount,
          )}
        />
        <ItemDetails
          affix={glovesAffix}
          runeId={glovesRuneId}
          infusionId={glovesInfusionId}
          runeName={glovesRune}
        />
      </li>

      <li className={classes.listItem}>
        <DynamicItem
          id={leggingsId}
          type="Leggings"
          weight={weight}
          affix={leggingsAffix}
          upgrades={createUpgrades(
            leggingsInfusionId,
            leggingsRuneId,
            leggingsRuneCount,
          )}
        />
        <ItemDetails
          affix={leggingsAffix}
          runeId={leggingsRuneId}
          infusionId={leggingsInfusionId}
          runeName={leggingsRune}
        />
      </li>

      <li className={classes.listItem}>
        <DynamicItem
          id={bootsId}
          type="Boots"
          weight={weight}
          affix={bootsAffix}
          upgrades={createUpgrades(
            bootsInfusionId,
            bootsRuneId,
            bootsRuneCount,
          )}
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
