import type GW2ApiSkill from '../types/skills/skill';
import { mapWithSkills } from './async';

const MISSING_IDS = new Set([
  // dragon trigger (bladesworn)
  62797, 62980, 62951, 62893, 62926,

  // gunsaber (bladesworn)
  62966, 62772, 62918, 62930, 62732, 62789, 62885,

  // tome of justice (firebrand)
  41258, 40635, 42449, 40015, 42898,

  // tome of resolve (firebrand)
  45022, 40679, 45128, 42008, 42925,

  // tome of courage (firebrand)
  42986, 41968, 41836, 40988, 44455,

  // shadow shroud (specter)
  63362, 63167, 63220, 63160, 63249,

  // mech AI skills (mechanist)
  63298, 63263, 63288, 63264, 63348, 63047,
]);

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
