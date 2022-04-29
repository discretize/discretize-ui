import GW2ApiTrait from '../types/traits/trait';

const augments: Record<string, { description: string }> = {
  '2062': {
    description: 'Equipping or stowing a Virtue grants you quickness.',
  },
  '2063': {
    description:
      'Your Mantra skills slow nearby foes. This effect may only occur once per interval. Mantras gain reduced charge-recovery time.',
  },
  '2071': {
    description: 'Using a Beast ability grants you offensive boons.',
  },
  '2072': {
    description:
      'Entering beastmode grants boons and removes movement-impairing conditions.',
  },
  '2075': {
    description:
      'Axe skills gain a chance to inflict bleeding. Symbol of Vengeance now dazes on its initial strike.',
  },
  '2076': {
    description: 'When you grant aegis or stability, grant quickness.',
  },
  '2079': {
    description:
      "Fury increases the duration of bleeds you inflict. Gaining fury inspires you with Kalla's Fervor.",
  },
  '2085': {
    description:
      'Gaining quickness increases the duration of other boons affecting you.',
  },
  '2086': {
    description: 'Your Virtues gain additional pages.',
  },
  '2092': {
    description:
      'Your short bow skills now pierce. Bleeding you inflict deals more damage.',
  },
  '2094': {
    description:
      "Gaining Kalla's Fervor grants you might. Citadel Bombardment pulls more missiles into Tyria for every stack of Kalla's Fervor affecting you.",
  },
  '2100': {
    description:
      "Kalla's Fervor you inspire lasts longer and is more potent. Heroic Command grants more might per stack of Kalla's Fervor.",
  },
  '2101': {
    description: 'Grant allies quickness when you use your heal skill.',
  },
  '2105': {
    description:
      'Inflict burning and slowness on foes you disable, immobilize, or slow.',
  },
  '2108': {
    description:
      'Using Legendary Renegade abilities grants protection to allies near the summoned warband member.',
  },
  '2116': {
    description:
      'Tome skills gain bonuses from scribbling in the margins by ancient bards.',
  },
  '2119': {
    description:
      'Conditions inflict less damage to you while you have protection.',
  },
  '2120': {
    description:
      "Evading an attack inspires you with Kalla's Fervor and grants boons to nearby allies.",
  },
  '2127': {
    description:
      'Disabling a foe increases your damage and condition damage for a short duration.',
  },
  '2134': {
    description: 'Entering beastmode grants you the boons affecting your pet.',
  },
  '2142': {
    description:
      'While at full endurance, increase your chance to critically strike. Gain vigor when you gain fury.',
  },
  '2143': {
    description:
      'Deal increased damage to foes at a lower health percentage than you. Conditions you apply to foes at a lower health percentage than you last longer.',
  },
  '2148': {
    description: 'Gain increased attributes while affected by quickness.',
  },
  '2154': {
    description:
      'Gain fury when you critically strike a foe below the health threshold.',
  },
  '2155': {
    description:
      'While in beastmode, if you would be downed you instead fall out of beastmode and recover health.',
  },
  '2156': {
    description: 'You deal increased strike damage while you have fury.',
  },
  '2159': {
    description:
      'Tome skills gain reduced recharge. Retain Virtues passives while they are on cooldown.',
  },
  '2161': {
    description: 'When you apply poison to a foe, steal some health from them.',
  },
  '2166': {
    description:
      "Disabling a foe cripples your enemy, which leaves them vulnerable and inspires you with Kalla's Fervor.",
  },
  '2179': {
    description: 'Granting quickness to an ally also grants Ashes of the Just.',
  },
  '2182': {
    description:
      "Kalla's Fervor reduces the damage you receive from conditions. Orders from Above lasts longer and affects more targets and a larger area.",
  },
};

export function fixMissingTraitDescriptions(
  id: number,
  trait: GW2ApiTrait | undefined,
): GW2ApiTrait | undefined {
  if (!trait) return trait;
  // grab the missing data and augment the existing trait with it
  const augment = augments[id.toString()];
  if (augment) return { ...trait, ...augment };
  else return trait;
}
