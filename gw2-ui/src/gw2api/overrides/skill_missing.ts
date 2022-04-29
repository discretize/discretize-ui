import GW2ApiSkill from '../types/skills/skill';
import { mapWithSkills } from './async';

const MISSING_IDS = new Set([62797]);

export function fixMissingSkills(
  id: number,
  item: GW2ApiSkill | undefined,
): GW2ApiSkill | undefined | Promise<GW2ApiSkill | undefined> {
  if (!MISSING_IDS.has(id) || item) return item;

  return mapWithSkills((skills) => {
    const skill = skills?.missing_skills[id];

    if (!skill) return undefined;
    return {
      id: id,
      chat_link: make_chat_link(id),
      ...skill,
    };
  });
}

// See https://wiki.guildwars2.com/wiki/Chat_link_format
function make_chat_link(_id: number) {
  let id = _id;
  let l = String.fromCharCode(6);
  for (let i = 0; i < 3; i++) {
    const next_byte = id % 256;
    l += String.fromCharCode(next_byte);
    id = id >> 8;
  }
  l += String.fromCharCode(0);

  return `[&${btoa(l)}]`;
}
