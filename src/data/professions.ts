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

const TRANSLATIONS: Partial<
  Record<APILanguage, Record<ProfessionTypes, string>>
> = {
  zh: {
    Guardian: '守护者',
    Dragonhunter: '猎龙者',
    Firebrand: '燃火者',
    Willbender: '',
    Revenant: '魂武者',
    Herald: '',
    Renegade: '',
    Vindicator: '',
    Warrior: '战士',
    Berserker: '',
    Spellbreaker: '',
    Bladesworn: '',
    Engineer: '工程师',
    Scrapper: '',
    Holosmith: '',
    Mechanist: '',
    Ranger: '游侠',
    Druid: '',
    Soulbeast: '',
    Untamed: '',
    Thief: '潜行者',
    Daredevil: '',
    Deadeye: '',
    Specter: '',
    Elementalist: '元素使',
    Tempest: '',
    Weaver: '',
    Catalyst: '',
    Mesmer: '幻术师',
    Chronomancer: '',
    Mirage: '',
    Virtuoso: '',
    Necromancer: '唤灵师',
    Reaper: '',
    Scourge: '',
    Harbinger: '',
  },
};

export function getTranslatedProfession({
  profession,
  language,
}: {
  profession: string;
  language?: APILanguage;
}): string {
  let translated = profession.toString();
  if (language) {
    const availableStrings = TRANSLATIONS[language];
    if (availableStrings)
      translated = availableStrings[profession as ProfessionTypes];
  }
  return translated;
}
