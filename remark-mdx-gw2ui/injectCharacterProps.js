import resolve from './map-gw2-ids.js';

const injectCharacterProps = ({
  profession,
  weight,
  gear,
  attributes: attributesProps,
  runeId,
  runeName,
  infusions,
  weapons,
  consumables: consumablesProps,
  skills: skillsProps,
  legends: legendsProps,
  assumedBuffs: assumedBuffsProps,
  ...rest
}) => {
  const attributes = {
    profession,
    data: attributesProps,
  };
  const weapon = resolve('Weapons', {
    ...weapons,
    weapon1MainAffix: gear[12],
    weapon1MainInfusion1Id: infusions[16],
    ...(!weapons.weapon1OffType
      ? {
          weapon1MainInfusion2Id: infusions[17],
        }
      : {
          weapon1OffAffix: gear[13],
          weapon1OffInfusionId: infusions[17],
        }),

    weapon2MainAffix: gear[12],
    weapon2MainInfusion1Id: infusions[16],
    ...(!weapons.weapon2OffType
      ? {
          weapon2MainInfusion2Id: infusions[17],
        }
      : {
          weapon2OffAffix: gear[13],
          weapon2OffInfusionId: infusions[17],
        }),
  });

  const armor = resolve('Armor', {
    weight,
    helmAffix: gear[0],
    helmRuneId: runeId,
    helmRune: runeName,
    helmRuneCount: 6,
    helmInfusionId: infusions[0],
    shouldersAffix: gear[1],
    shouldersRuneId: runeId,
    shouldersRune: runeName,
    shouldersRuneCount: 6,
    shouldersInfusionId: infusions[1],
    coatAffix: gear[2],
    coatRuneId: runeId,
    coatRune: runeName,
    coatRuneCount: 6,
    coatInfusionId: infusions[2],
    glovesAffix: gear[3],
    glovesRuneId: runeId,
    glovesRune: runeName,
    glovesRuneCount: 6,
    glovesInfusionId: infusions[3],
    leggingsAffix: gear[4],
    leggingsRuneId: runeId,
    leggingsRune: runeName,
    leggingsRuneCount: 6,
    leggingsInfusionId: infusions[4],
    bootsAffix: gear[5],
    bootsRuneId: runeId,
    bootsRune: runeName,
    bootsRuneCount: 6,
    bootsInfusionId: infusions[5],
  });

  const backAndTrinket = resolve('BackAndTrinkets', {
    backItemAffix: gear[11],
    backItemInfusion1Id: infusions[6],
    backItemInfusion2Id: infusions[7],
    amuletAffix: gear[6],
    ring1Affix: gear[7],
    ring1Infusion1Id: infusions[8],
    ring1Infusion2Id: infusions[9],
    ring1Infusion3Id: infusions[10],
    ring2Affix: gear[8],
    ring2Infusion1Id: infusions[11],
    ring2Infusion2Id: infusions[12],
    ring2Infusion3Id: infusions[13],
    accessory1Affix: gear[9],
    accessory1InfusionId: infusions[14],
    accessory2Affix: gear[10],
    accessory2InfusionId: infusions[15],
  });

  const consumables = resolve('Consumables', consumablesProps);
  const skills = skillsProps && resolve('Skills', skillsProps);
  const legends = legendsProps && resolve('Legends', { ...legendsProps });
  const assumedBuffs = assumedBuffsProps && { value: assumedBuffsProps };
  const props = {
    attributes,
    armor,
    weapon,
    backAndTrinket,
    consumables,
    skills,
    legends,
    assumedBuffs,
    ...rest,
  };

  return props;
};

export { injectCharacterProps };
