import type GW2ApiSkill from '../types/skills/skill';

export function fixSkillTypes(
  id: number,
  item: GW2ApiSkill | undefined,
): GW2ApiSkill | undefined {
  if (!item) return item;
  // Compare:
  // https://api.guildwars2.com/v2/skills?ids=10586
  // https://api.guildwars2.com/v2/skills?ids=10586&lang=zh
  if ((item.type as string) === 'Transform') item.type = 'Profession';
  if ((item.slot as string) === 'Transform_1') item.slot = 'Profession_1';
  return item;
}
