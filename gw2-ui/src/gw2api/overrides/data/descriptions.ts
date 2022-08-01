/* eslint-disable @typescript-eslint/no-unused-vars */

const cilantro = '66% Chance to Steal Life on Critical Hit\n';
const clove = '-20% Incoming Condition Duration\n';
const mint = '+10% Outgoing Healing\n';
const peppercorn = '-10% Incoming Damage\n';
const sesame = 'Gain Health Every Second\n';

const sousVideSteak = '+100 Power\n+70 Ferocity'
const curedMeatFlatbread = '+100 Condition Damage\n+70 Expertise'
const veggieFlatbread = '+100 Expertise\n+70 Condition Damage'
const eggsBenedict = '+100 Concentration\n+70 Expertise'
const fruitSalad = '+100 Healing Power\n+70 Concentration'
const oysterSoup = '+45 All Attributes'
const coqAuVin = '+100 Power\n+70 Precision'
const cheesecake = '+100 Concentration\n+33% Chance to Gain Might on Critical Hit'
const beefCarpaccio = '+100 Concentration\n+70 Power'
const poultryAspic = '+100 Concentration\n+70 Toughness'
const cremeBrulee = '+100 Concentration\n+70 Healing Power'
const truffleRavioli = '+100 Vitality\n+70 Toughness'

const ascended = '\n+10% Karma\n+5% All Experience Gained\n+20% Magic Find\n+20% Gold Find\n+10% WXP Gained'

/* eslint-enable @typescript-eslint/no-unused-vars */

export const food: Record<number, string> = {
  91805:
    `${cilantro}${sousVideSteak}${ascended}`,
  91878:
    `${cilantro}${curedMeatFlatbread}${ascended}`,
  91876:
    `${cilantro}${veggieFlatbread}${ascended}`,
  91847:
    `${cilantro}${eggsBenedict}${ascended}`,
  91804:
    `${cilantro}${oysterSoup}${ascended}`,
  91709:
    `${cilantro}${coqAuVin}${ascended}`,
  91851:
    `${cilantro}${cheesecake}${ascended}`,
  91862:
    `${cilantro}${beefCarpaccio}${ascended}`,
  91704:
    `${cilantro}${poultryAspic}${ascended}`,
  91735:
    `${cilantro}${truffleRavioli}${ascended}`,
  91769:
    `${cilantro}${fruitSalad}${ascended}`,
  91746:
    `${cilantro}${cremeBrulee}${ascended}`,
  91690:
    `${mint}${fruitSalad}${ascended}`,
  91743:
    `${mint}${cremeBrulee}${ascended}`,
  91758:
    `${mint}${eggsBenedict}${ascended}`,
  91727:
    `${mint}${veggieFlatbread}${ascended}`,
  91703:
    `${mint}${curedMeatFlatbread}${ascended}`,
  91748:
    `${mint}${oysterSoup}${ascended}`,
};

export const traits: Record<number, string> = {
  2062: 'Equipping or stowing a Virtue grants you quickness.',
  2063: 'Your Mantra skills slow nearby foes. This effect may only occur once per interval. Mantras gain reduced charge-recovery time.',
  2071: 'Using a Beast ability grants you offensive boons.',
  2072: 'Entering beastmode grants boons and removes movement-impairing conditions.',
  2075: 'Axe skills gain a chance to inflict bleeding. Symbol of Vengeance now dazes on its initial strike.',
  2076: 'When you grant aegis or stability, grant quickness.',
  2079: "Fury increases the duration of bleeds you inflict. Gaining fury inspires you with Kalla's Fervor.",
  2085: 'Gaining quickness increases the duration of other boons affecting you.',
  2086: 'Your Virtues gain additional pages.',
  2092: 'Your short bow skills now pierce. Bleeding you inflict deals more damage.',
  2094: "Gaining Kalla's Fervor grants you might. Citadel Bombardment pulls more missiles into Tyria for every stack of Kalla's Fervor affecting you.",
  2100: "Kalla's Fervor you inspire lasts longer and is more potent. Heroic Command grants more might per stack of Kalla's Fervor.",
  2101: 'Grant allies quickness when you use your heal skill.',
  2105: 'Inflict burning and slowness on foes you disable, immobilize, or slow.',
  2108: 'Using Legendary Renegade abilities grants protection to allies near the summoned warband member.',
  2116: 'Tome skills gain bonuses from scribbling in the margins by ancient bards.',
  2119: 'Conditions inflict less damage to you while you have protection.',
  2120: "Evading an attack inspires you with Kalla's Fervor and grants boons to nearby allies.",
  2127: 'Disabling a foe increases your damage and condition damage for a short duration.',
  2134: 'Entering beastmode grants you the boons affecting your pet.',
  2142: 'While at full endurance, increase your chance to critically strike. Gain vigor when you gain fury.',
  2143: 'Deal increased damage to foes at a lower health percentage than you. Conditions you apply to foes at a lower health percentage than you last longer.',
  2148: 'Gain increased attributes while affected by quickness.',
  2154: 'Gain fury when you critically strike a foe below the health threshold.',
  2155: 'While in beastmode, if you would be downed you instead fall out of beastmode and recover health.',
  2156: 'You deal increased strike damage while you have fury.',
  2159: 'Tome skills gain reduced recharge. Retain Virtues passives while they are on cooldown.',
  2161: 'When you apply poison to a foe, steal some health from them.',
  2166: "Disabling a foe cripples your enemy, which leaves them vulnerable and inspires you with Kalla's Fervor.",
  2179: 'Granting quickness to an ally also grants Ashes of the Just.',
  2182: "Kalla's Fervor reduces the damage you receive from conditions. Orders from Above lasts longer and affects more targets and a larger area.",
};
