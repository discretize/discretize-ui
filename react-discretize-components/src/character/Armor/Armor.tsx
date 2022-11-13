import { CreateItem, Item } from '@discretize/gw2-ui-new';
import DynamicItem from '../../helpers/DynamicItem/DynamicItem';
import firstUppercase from '../../helpers/firstUppercase';
import classes from './Armor.module.css';

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
      .replace(/Superior Rune of (the)?/gm, '')
      .replace('Runa superior del ', '')
      .replace(/Überlegene Rune (des|der|von)?/gm, '')
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
type Rarity = React.ComponentProps<typeof CreateItem>['rarity'];

export interface ArmorProps {
  weight?: Weights;
  showInfusions?: boolean;
  helmId?: number;
  helmRuneId?: number;
  helmInfusionId?: number;
  helmRuneCount?: number;
  helmAffix: Affix;
  helmRune?: string;
  helmRarity?: Rarity;
  shouldersId: number;
  shouldersRuneId?: number;
  shouldersInfusionId?: number;
  shouldersRuneCount?: number;
  shouldersAffix: Affix;
  shouldersRune?: string;
  shouldersRarity?: Rarity;
  coatId: number;
  coatRuneId?: number;
  coatInfusionId?: number;
  coatRuneCount?: number;
  coatAffix: Affix;
  coatRune?: string;
  coatRarity?: Rarity;
  glovesId: number;
  glovesRuneId?: number;
  glovesInfusionId?: number;
  glovesRuneCount?: number;
  glovesAffix: Affix;
  glovesRune?: string;
  glovesRarity?: Rarity;
  leggingsId: number;
  leggingsRuneId?: number;
  leggingsInfusionId?: number;
  leggingsRuneCount?: number;
  leggingsAffix: Affix;
  leggingsRune?: string;
  leggingsRarity?: Rarity;
  bootsId: number;
  bootsRuneId?: number;
  bootsInfusionId?: number;
  bootsRuneCount?: number;
  bootsAffix: Affix;
  bootsRune?: string;
  bootsRarity?: Rarity;
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
  helmRarity,
  shouldersId,
  shouldersRuneId,
  shouldersInfusionId,
  shouldersRuneCount = 6,
  shouldersAffix,
  shouldersRune,
  shouldersRarity,
  coatId,
  coatRuneId,
  coatInfusionId,
  coatRuneCount = 6,
  coatAffix,
  coatRune,
  coatRarity,
  glovesId,
  glovesRuneId,
  glovesInfusionId,
  glovesRuneCount = 6,
  glovesAffix,
  glovesRune,
  glovesRarity,
  leggingsId,
  leggingsRuneId,
  leggingsInfusionId,
  leggingsRuneCount = 6,
  leggingsAffix,
  leggingsRune,
  leggingsRarity,
  bootsId,
  bootsRuneId,
  bootsInfusionId,
  bootsRuneCount = 6,
  bootsAffix,
  bootsRune,
  bootsRarity,
}: ArmorProps) => {
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
          rarity={helmRarity}
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
          rarity={shouldersRarity}
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
          rarity={coatRarity}
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
          rarity={glovesRarity}
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
          rarity={leggingsRarity}
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
          rarity={bootsRarity}
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
