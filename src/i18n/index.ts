import * as React from 'react';

export type APILanguage = 'de' | 'en' | 'es' | 'fr' | 'zh';
export const API_LANGUAGES = ['de', 'en', 'es', 'fr', 'zh'];

function isAPILanguage(l: string): l is APILanguage {
  return API_LANGUAGES.indexOf(l) >= 0;
}

function getNavigatorDefaultLanguage(): APILanguage {
  if (typeof navigator === 'undefined') return 'en';
  const languages = navigator.languages || [navigator.language];
  for (let l of languages) {
    l = l.split('-')[0].toLowerCase(); // en-US -> en
    if (isAPILanguage(l)) return l;
  }

  return 'en';
}

export const APILanguageContext = React.createContext<APILanguage>(
  getNavigatorDefaultLanguage(),
);

export const APILanguageProvider = APILanguageContext.Provider;

export type Translation = Partial<Record<APILanguage, string>>;
export type TranslationMap = Record<string, Translation>;

// Use this to translate a string. You need to figure out the appropriate language yourself.
export function translate(
  map: TranslationMap,
  key: string,
  lang: APILanguage,
): string {
  let t = map[key];
  if (!t) return key;
  return t[lang] || t['en'] || key;
}

// A shorthand to both read the configured language and translate a string, for simple one-off uses.
export function useTranslation(map: TranslationMap, key: string): string {
  let lang = React.useContext(APILanguageContext);

  return translate(map, key, lang);
}
