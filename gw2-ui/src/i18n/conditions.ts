import { Translation } from '.';
import { ConditionTypes } from '../data/conditions';

export const CONDITIONS: Record<ConditionTypes, Translation> = {
  Bleeding: { de: 'Blutung' },
  Blinded: { de: 'Geblendet' },
  Burning: { de: 'Brennen' },
  Chilled: { de: 'Kühle' },
  Confusion: { de: 'Konfusion' },
  Crippled: { de: 'Verkrüppelung' },
  Fear: { de: 'Furcht einflößen' },
  Immobile: { de: 'Immobilisiert' },
  Poisoned: { de: 'Vergiftet' },
  Slow: { de: 'Langsam' },
  Taunt: { de: 'Provozieren' },
  Torment: { de: 'Pein' },
  Vulnerability: { de: 'Verwundbarkeit' },
  Weakness: { de: 'Schwäche' },
};

export const CONDITIONS_DESCRIPTIONS: Record<ConditionTypes, Translation> = {
  Bleeding: { en: 'Deals damage every second; stacks intensity.', de: 'Bewirkt jede Sekunde Schaden; Intensität summiert sich.' },
  Blinded: { en: 'Next outgoing attack misses; stacks duration.', de: 'Der nächste Angriff schlägt fehl; Dauer summiert sich.' },
  Burning: { en: 'Deals damage every second; stacks intensity.', de: 'Bewirkt jede Sekunde Schaden; Intensität summiert sich.' },
  Chilled: {
    en: 'Movement speed decreased by 66%; skill cooldown increased by 66%; stacks duration.',
	de: 'Reduziert Bewegungsgeschwindigkeit um 66%; erhöht Erholzeit von Fertigkeiten um 66%; Dauer summiert sich.'
  },
  Confusion: { en: 'Damage received on skill activation; stacks intensity.', de: 'Erleidet Schaden bei Aktivieren von Fertigkeiten; Intensität summiert sich.' },
  Crippled: { en: 'Movement speed decreased by 50%; stacks duration.', de: 'Bewegungsgeschwindigkeit um 50% verringert; Dauer summiert sich.' },
  Fear: { en: 'Involuntary retreat; unable to act; stacks duration.', de: 'Unfreiwilliger Rückzug; handlungsunfähig; Dauer summiert sich.' },
  Immobile: { en: 'Unable to move; stacks duration.', de: 'Bewegungsunfähig; Dauer summiert sich.' },
  Poisoned: {
    en: 'Deals damage every second; decreases healing effectiveness 33%; damage stacks intensity.',
	de: 'Bewirkt jede Sekunde Schaden; verringert Heilungswirksamkeit um 33%; Intensität summiert sich durch Schaden.'
  },
  Slow: { en: 'Skills and actions are slower.', de: 'Fertigkeiten und Aktionen sind langsamer.' },
  Taunt: { en: 'Involuntarily attack foes.', de: 'Greift unfreiwillig Gegner an.' },
  Torment: {
    en: 'Deals damage every second. Deals additional damage to moving foes. Stacks intensity.',
	de: 'Bewirkt jede Sekunde Schaden. Bewirkt zusätzlichen Schaden bei Gegnern, die sich nicht bewegen. Die Intensität stapelt sich.'
  },
  Vulnerability: {
    en: 'Damage and condition damage taken are increased; stacks intensity.',
	de: 'Schaden und erlittener Zustandsschaden sind erhöht; Intensität summiert sich.'
  },
  Weakness: {
    en: 'Endurance regeneration decreased by 50%. 50% of hits are Glancing Blows (50% damage). Stacks duration.',
	de: 'Verringert Ausdauerregeneration um 50%. 50% aller Treffer sind Streiftreffer (50% Schaden). Dauer summiert sich.'
  },
};
