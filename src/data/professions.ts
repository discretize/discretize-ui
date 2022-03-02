import { APILanguage } from '../gw2api/cache';

export type ProfessionTypes =
  | 'Guardian'
  | 'Dragonhunter'
  | 'Firebrand'
  | 'Willbender'
  | 'Revenant'
  | 'Herald'
  | 'Renegade'
  | 'Vindicator'
  | 'Warrior'
  | 'Berserker'
  | 'Spellbreaker'
  | 'Bladesworn'
  | 'Engineer'
  | 'Scrapper'
  | 'Holosmith'
  | 'Mechanist'
  | 'Ranger'
  | 'Druid'
  | 'Soulbeast'
  | 'Untamed'
  | 'Thief'
  | 'Daredevil'
  | 'Deadeye'
  | 'Specter'
  | 'Elementalist'
  | 'Tempest'
  | 'Weaver'
  | 'Catalyst'
  | 'Mesmer'
  | 'Chronomancer'
  | 'Mirage'
  | 'Virtuoso'
  | 'Necromancer'
  | 'Reaper'
  | 'Scourge'
  | 'Harbinger';

const PROFESSIONS: Record<string, string[]> = {
  Guardian: ['Dragonhunter', 'Firebrand', 'Willbender'],
  Revenant: ['Herald', 'Renegade', 'Vindicator'],
  Warrior: ['Berserker', 'Spellbreaker', 'Bladesworn'],
  Engineer: ['Scrapper', 'Holosmith', 'Mechanist'],
  Ranger: ['Druid', 'Soulbeast', 'Untamed'],
  Thief: ['Daredevil', 'Deadeye', 'Specter'],
  Elementalist: ['Tempest', 'Weaver', 'Catalyst'],
  Mesmer: ['Chronomancer', 'Mirage', 'Virtuoso'],
  Necromancer: ['Reaper', 'Scourge', 'Harbinger'],
};
export default PROFESSIONS;

const TRANSLATIONS: Record<string, Partial<Record<APILanguage, string>>> = {
  Guardian: {
    zh: '守护者',
  },
  Dragonhunter: {
    zh: '猎龙者',
  },
  Firebrand: {
    zh: '燃火者',
  },
  Willbender: {},
  Revenant: { zh: '魂武者' },
  Herald: { zh: '' },
  Renegade: { zh: '' },
  Vindicator: { zh: '' },
  Warrior: { zh: '战士' },
  Berserker: { zh: '' },
  Spellbreaker: { zh: '' },
  Bladesworn: { zh: '' },
  Engineer: { zh: '工程师' },
  Scrapper: { zh: '' },
  Holosmith: { zh: '' },
  Mechanist: { zh: '' },
  Ranger: { zh: '游侠' },
  Druid: { zh: '' },
  Soulbeast: { zh: '' },
  Untamed: { zh: '' },
  Thief: { zh: '潜行者' },
  Daredevil: { zh: '' },
  Deadeye: { zh: '' },
  Specter: { zh: '' },
  Elementalist: { zh: '元素使' },
  Tempest: { zh: '' },
  Weaver: { zh: '' },
  Catalyst: { zh: '' },
  Mesmer: { zh: '幻术师' },
  Chronomancer: { zh: '' },
  Mirage: { zh: '' },
  Virtuoso: { zh: '' },
  Necromancer: { zh: '唤灵师' },
  Reaper: { zh: '' },
  Scourge: { zh: '' },
  Harbinger: { zh: '' },
};

export function getTranslatedProfession({
  profession,
  language,
}: {
  profession: string;
  language?: APILanguage;
}): string {
  let translated = profession;
  if (language) {
    const availableStrings = TRANSLATIONS[profession];
    if (availableStrings) translated = availableStrings[language] || profession;
  }
  return translated;
}
