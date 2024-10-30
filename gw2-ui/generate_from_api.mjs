import {
  API_LANGUAGES,
  initPrettier,
  writeSource,
  compare_strings,
} from '../node_api_helpers.mjs';
import * as fs from 'node:fs';
import * as path from 'node:path';

const CACHE = '../gw2apicache/';

function to_record(arr, key = 'id') {
  let record = {};
  for (let e of arr) {
    record[e[key]] = e;
  }
  return record;
}

function sort_object_by_key(o) {
  return Object.fromEntries(
    Object.entries(o).sort(([a], [b]) => compare_strings(a, b)),
  );
}

function as_type(arr_or_set) {
  return [...arr_or_set]
    .sort()
    .map((id) => JSON.stringify(id))
    .join(' | ');
}

function load_file(endpoint, lang) {
  let filename = path.join(
    CACHE,
    `${endpoint.replaceAll('/', '_').toLowerCase()}_${lang}.json`,
  );
  return JSON.parse(fs.readFileSync(filename));
}

async function run() {
  await initPrettier();

  // Load everything first. That'll catch missing files
  let professions = {};
  for (let lang of API_LANGUAGES) {
    professions[lang] = to_record(load_file('/v2/professions', lang));
  }
  let races = {};
  for (let lang of API_LANGUAGES) {
    races[lang] = to_record(load_file('/v2/races', lang));
  }

  let skills_en = load_file('/v2/skills', 'en');

  console.log('Done loading, generating files');
  const PROFESSION_IDS = Object.keys(professions.en).sort();
  let ELITE_SPEC_IDS = [];
  let PROFESSIONS = {};
  let TRANSLATIONS_PROFESSIONS = {};
  for (let id of PROFESSION_IDS) {
    let p = professions.en[id];
    let translations = {};
    for (let lang of API_LANGUAGES) {
      let name = professions[lang][id].name;
      if (name !== id) {
        translations[lang] = professions[lang][id].name;
      }
    }
    TRANSLATIONS_PROFESSIONS[id] = translations;

    // We could fetch the names from /v2/specializations, but the names are in the training data as well
    let elite_specs = [];
    for (let t of p.training) {
      if (t.category !== 'EliteSpecializations') {
        continue;
      }
      elite_specs.push(t.name);
      ELITE_SPEC_IDS.push(t.name);

      let translations = {};
      for (let lang of API_LANGUAGES) {
        for (let t2 of professions[lang][id].training) {
          if (t2.id === t.id) {
            if (t.name !== t2.name) {
              translations[lang] = t2.name;
            }
            break;
          }
        }
      }
      TRANSLATIONS_PROFESSIONS[t.name] = translations;
    }
    PROFESSIONS[id] = elite_specs;
  }

  await writeSource(
    'data/professions.ts',
    `
export type ProfessionTypes = ${as_type(PROFESSION_IDS)};

export type EliteSpecTypes = ${as_type(ELITE_SPEC_IDS)};

const PROFESSIONS: Record<ProfessionTypes, EliteSpecTypes[]> = ${JSON.stringify(
      PROFESSIONS,
    )};
export default PROFESSIONS;
`,
  );

  await writeSource(
    'i18n/professions.ts',
    `
import type { Translation } from '.';
import type { ProfessionTypes, EliteSpecTypes } from '../data/professions';

const TRANSLATIONS_PROFESSIONS: Record<ProfessionTypes | EliteSpecTypes, Translation> = ${JSON.stringify(
      sort_object_by_key(TRANSLATIONS_PROFESSIONS),
    )};
export default TRANSLATIONS_PROFESSIONS;
`,
  );

  let SPECIALIZATIONS = Object.fromEntries(
    PROFESSION_IDS.map((id) => {
      let p = professions.en[id];
      return [p.id, [...p.specializations].sort((a, b) => a - b)];
    }),
  );
  await writeSource(
    'data/specializations.ts',
    `
import type { ProfessionTypes } from './professions';
const SPECIALIZATIONS: Record<ProfessionTypes, number[]> = ${JSON.stringify(
      SPECIALIZATIONS,
    )};
export default SPECIALIZATIONS;
`,
  );

  const RACE_IDS = Object.keys(races.en).sort();
  let TRANSLATIONS_RACES = {};
  for (let id of RACE_IDS) {
    let translations = {};
    for (let lang of API_LANGUAGES) {
      let name = races[lang][id].name;
      if (name !== id) {
        translations[lang] = races[lang][id].name;
      }
    }
    TRANSLATIONS_RACES[id] = translations;
  }

  await writeSource(
    'data/races.ts',
    `
export type RacesTypes = ${as_type(RACE_IDS)};

const RACES: RacesTypes[] = ${JSON.stringify(RACE_IDS.sort())};
export default RACES;`,
  );

  await writeSource(
    'i18n/races.ts',
    `
import type { Translation } from '.';
import type { RacesTypes } from '../data/races';

const TRANSLATIONS_RACES: Record<RacesTypes, Translation> = ${JSON.stringify(
      sort_object_by_key(TRANSLATIONS_RACES),
    )};
export default TRANSLATIONS_RACES;
`,
  );

  let skill_categories = new Set();
  let skill_types = new Set();
  let skill_attunements = new Set();
  let skill_flags = new Set();
  let skill_slots = new Set();
  for (let skill of skills_en) {
    if (skill.categories) {
      for (let cat of skill.categories) {
        skill_categories.add(cat);
      }
    }
    if (skill.type) skill_types.add(skill.type);
    if (skill.attunement) skill_attunements.add(skill.attunement);
    if (skill.dual_attunement) skill_attunements.add(skill.dual_attunement);
    if (skill.flags) {
      for (let flag of skill.flags) {
        skill_flags.add(flag);
      }
    }
    if (skill.slot) skill_slots.add(skill.slot);
  }
  await writeSource(
    'gw2api/types/skills/enums.ts',
    `
export type GW2ApiSkillCategory = ${as_type(skill_categories)};

export type GW2ApiSkillType = ${as_type(skill_types)};

export type GW2ApiSkillAttunement = ${as_type(skill_attunements)};

export type GW2ApiSkillFlag = ${as_type(skill_flags)};

export type GW2ApiSkillSlot = ${as_type(skill_slots)};
`,
  );
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
