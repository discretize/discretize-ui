const missingTraitData = {
  2062: {
    description: 'Equipping or stowing a Virtue grants you quickness.',
  },
  2063: {
    description:
      'Your Mantra skills slow nearby foes. This effect may only occur once per interval. Mantras gain reduced charge-recovery time.',
  },
  2071: {
    description: 'Using a Beast ability grants you offensive boons.',
  },
  2072: {
    description:
      'Entering beastmode grants boons and removes movement-impairing conditions.',
  },
  2075: {
    description:
      'Axe skills gain a chance to inflict bleeding. Symbol of Vengeance now dazes on its initial strike.',
  },
  2076: {
    description: 'When you grant aegis or stability, grant quickness.',
  },
  2079: {
    description:
      "Fury increases the duration of bleeds you inflict. Gaining fury inspires you with Kalla's Fervor.",
  },
  2085: {
    description:
      'Gaining quickness increases the duration of other boons affecting you.',
  },
  2086: {
    description: 'Your Virtues gain additional pages.',
  },
  2092: {
    description:
      'Your short bow skills now pierce. Bleeding you inflict deals more damage.',
  },
  2094: {
    description:
      "Gaining Kalla's Fervor grants you might. Citadel Bombardment pulls more missiles into Tyria for every stack of Kalla's Fervor affecting you.",
  },
  2100: {
    description:
      "Kalla's Fervor you inspire lasts longer and is more potent. Heroic Command grants more might per stack of Kalla's Fervor.",
  },
  2101: {
    description: 'Grant allies quickness when you use your heal skill.',
  },
  2105: {
    description:
      'Inflict burning and slowness on foes you disable, immobilize, or slow.',
  },
  2108: {
    description:
      'Using Legendary Renegade abilities grants protection to allies near the summoned warband member.',
  },
  2116: {
    description:
      'Tome skills gain bonuses from scribbling in the margins by ancient bards.',
  },
  2119: {
    description:
      'Conditions inflict less damage to you while you have protection.',
  },
  2120: {
    description:
      "Evading an attack inspires you with Kalla's Fervor and grants boons to nearby allies.",
  },
  2127: {
    description:
      'Disabling a foe increases your damage and condition damage for a short duration.',
  },
  2134: {
    description: 'Entering beastmode grants you the boons affecting your pet.',
  },
  2142: {
    description:
      'While at full endurance, increase your chance to critically strike. Gain vigor when you gain fury.',
  },
  2143: {
    description:
      'Deal increased damage to foes at a lower health percentage than you. Conditions you apply to foes at a lower health percentage than you last longer.',
  },
  2148: {
    description: 'Gain increased attributes while affected by quickness.',
  },
  2154: {
    description:
      'Gain fury when you critically strike a foe below the health threshold.',
  },
  2155: {
    description:
      'While in beastmode, if you would be downed you instead fall out of beastmode and recover health.',
  },
  2156: {
    description: 'You deal increased strike damage while you have fury.',
  },
  2159: {
    description:
      'Tome skills gain reduced recharge. Retain Virtues passives while they are on cooldown.',
  },
  2161: {
    description: 'When you apply poison to a foe, steal some health from them.',
  },
  2166: {
    description:
      "Disabling a foe cripples your enemy, which leaves them vulnerable and inspires you with Kalla's Fervor.",
  },
  2179: {
    description: 'Granting quickness to an ally also grants Ashes of the Just.',
  },
  2182: {
    description:
      "Kalla's Fervor reduces the damage you receive from conditions. Orders from Above lasts longer and affects more targets and a larger area.",
  },
}
export const populateMissingTraitAPI = (data) => {
  if (Object.keys(missingTraitData).includes(String(data.id))) {
    return { ...data, ...missingTraitData[data.id] }
  }
  return data
}

const missingItemData = {
  91805: {
    details: {
      type: 'Food',
      duration_ms: 3600000,
      apply_count: 1,
      name: 'Nourishment',
      icon: 'https://render.guildwars2.com/file/779D3F0ABE5B46C09CFC57374DA8CC3A495F291C/436367.png',
      description:
        '66% Chance to Steal Life on Critical Hit\n+100 Power\n+70 Ferocity\n+10% Karma\n+5% All Experience Gained\n+20% Magic Find\n+20% Gold Find\n+10% WXP Gained',
    },
  },
  91878: {
    details: {
      type: 'Food',
      duration_ms: 3600000,
      apply_count: 1,
      name: 'Nourishment',
      icon: 'https://render.guildwars2.com/file/13906DE02D374DBB6A013C5EF76F26FBAFD5A39A/2191050.png',
      description:
        '66% Chance to Steal Life on Critical Hit\n+100 Condition Damage\n+70 Expertise\n+10% Karma\n+5% All Experience Gained\n+20% Magic Find\n+20% Gold Find\n+10% WXP Gained',
    },
  },
  91876: {
    details: {
      type: 'Food',
      duration_ms: 3600000,
      apply_count: 1,
      name: 'Nourishment',
      icon: 'https://render.guildwars2.com/file/161BD739DCBE0BA737081A079017D6F660BE5642/2191029.png',
      description:
        '66% Chance to Steal Life on Critical Hit\n+100 Expertise\n+70 Condition Damage\n+10% Karma\n+5% All Experience Gained\n+20% Magic Find\n+20% Gold Find\n+10% WXP Gained',
    },
  },
  91847: {
    details: {
      type: 'Food',
      duration_ms: 3600000,
      apply_count: 1,
      name: 'Nourishment',
      icon: 'https://render.guildwars2.com/file/0C1654600B0E40F9EEC909B8950CD6140FE17FCD/2191055.png',
      description:
        '66% Chance to Steal Life on Critical Hit\n+100 Concentration\n+70 Expertise\n+10% Karma\n+5% All Experience Gained\n+20% Magic Find\n+20% Gold Find\n+10% WXP Gained',
    },
  },
  91690: {
    details: {
      type: 'Food',
      duration_ms: 3600000,
      apply_count: 1,
      name: 'Nourishment',
      icon: 'https://render.guildwars2.com/file/1D44545301F3BB1C046898EA08D5906EB369DD0A/2191059.png',
      description:
        '+10% Outgoing Healing\n+100 Healing Power\n+70 Concentration\n+10% Karma\n+5% All Experience Gained\n+20% Magic Find\n+20% Gold Find\n+10% WXP Gained',
    },
  },
  91758: {
    details: {
      type: 'Food',
      duration_ms: 3600000,
      apply_count: 1,
      name: 'Nourishment',
      icon: 'https://render.guildwars2.com/file/247DFE7FA45A2DF9B24E5515C3BDB96D28ED213B/2191053.png',
      description:
        '+10% Outgoing Healing\n+100 Concentration\n+70 Expertise\n+10% Karma\n+5% All Experience Gained\n+20% Magic Find\n+20% Gold Find\n+10% WXP Gained',
    },
  },
  91727: {
    details: {
      type: 'Food',
      duration_ms: 3600000,
      apply_count: 1,
      name: 'Nourishment',
      icon: 'https://render.guildwars2.com/file/FCB44856734BE45744C8B10509CF710BBBE13C7B/2191027.png',
      description:
        '+10% Outgoing Healing\n+100 Expertise\n+70 Condition Damage\n+10% Karma\n+5% All Experience Gained\n+20% Magic Find\n+20% Gold Find\n+10% WXP Gained',
    },
  },
  91703: {
    details: {
      type: 'Food',
      duration_ms: 3600000,
      apply_count: 1,
      name: 'Nourishment',
      icon: 'https://render.guildwars2.com/file/F56EAF0DD0CFF41CE402282E37F20F4D22501358/2191048.png',
      description:
        '+10% Outgoing Healing\n+100 Condition Damage\n+70 Expertise\n+10% Karma\n+5% All Experience Gained\n+20% Magic Find\n+20% Gold Find\n+10% WXP Gained',
    },
  },
}

export const populateMissingItemAPI = (data) => {
  if (Object.keys(missingItemData).includes(String(data.id))) {
    return { ...data, ...missingItemData[data.id] }
  }
  return data
}
