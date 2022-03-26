import { Translation } from '.';
import { AuraTypes } from '../data/auras';

export const TRANSLATIONS_AURAS: Record<AuraTypes, Translation> = {
  Chaos: { de: 'Chaos' },
  Dark: { de: 'Dunkel' },
  Fire: { de: 'Feuer' },
  Frost: { de: 'Frost' },
  Light: { de: 'Licht' },
  Magnetic: { de: 'Magnet' },
  Shocking: { de: 'Schock' },
};

export const TRANSLATIONS_AURA_DESCRIPTIONS: Record<AuraTypes, Translation> = {
  Chaos: {
    en: 'Give yourself random boons and your foe random conditions whenever you are struck.',
	de: 'Gewährt Euch zufällige Segen und belegt Gegner mit zufälligen Zuständen, wann immer Ihr getroffen werdet.'
  },
  Dark: {
    en: 'Surrounded by a dark aura that reduces incoming condition damage and causes torment each time you are struck (1-second cooldown per attacker).',
	de: 'Umgeben von einer Dunkelaura, die erlittenen Zustandsschaden verringert und jedes Mal, wenn Ihr getroffen werdet, Pein verursacht (1 Sekunde Erholzeit pro Angreifer).'
  },
  Fire: {
    en: 'Enveloped in a fiery shield that burns foes, grants might each time you are struck (1-second cooldown per attacker).',
	de: 'In einen feurigen Schild gehüllt, der Gegner verbrennt; gewährt jedes Mal Macht, wenn Ihr getroffen werdet (1 Sekunde Erholzeit pro Angreifer).'
  },
  Frost: {
    en: 'Chill foes that strike you (only once per second for each attacker); incoming damage is reduced by 10%.',
	de: 'Fügt Gegnern, die Euch treffen, Kühle zu (nur einmal pro Sekunde je Angreifer); Erlittener Schaden ist um 10% reduziert.'
  },
  Light: {
    en: 'When struck, you gain resolution. Incoming condition damage is reduced by 10%. (Cooldown 1s)',
	de: 'Wenn Ihr getroffen werdet, erhaltet Ihr Entschlossenheit. Erlittener Zustandsschaden wird um 10% verringert. (Erholzeit: 1 Sekunde)'
  },
  Magnetic: { en: 'Reflect projectiles with magnetic energy.', de: 'Reflektiert Projektile mithilfe magnetischer Energie.' },
  Shocking: {
    en: 'Stun nearby attacking foes with an electric shock (only once per 2 seconds for each attacker).',
	de: 'Betäubt Gegner in der Nähe durch einen elektrischen Schock (nur einmal alle 2 Sekunden je Angreifer).'
  },
};
