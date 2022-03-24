import { Translation } from '.';
import { BoonsTypes } from '../data/boons';

export const TRANSLATIONS_BOONS: Record<BoonsTypes, Translation> = {
  Aegis: { de: 'Aegis' },
  Alacrity: { de: 'Tatendrang' },
  Fury: { de: 'Wut' },
  Might: { de: 'Macht' },
  Protection: { de: 'Schutz' },
  Quickness: { de: 'Schnelligkeit' },
  Regeneration: { de: 'Regeneration' },
  Resistance: { de: 'Widerstand' },
  Resolution: { de: 'Entschlossenheit' },
  Stability: { de: 'Stabilität' },
  Swiftness: {de : 'Eile' },
  Vigor: { de: 'Elan' },
};

export const TRANSLATIONS_BOON_DESCRIPTIONS: Record<BoonsTypes, Translation> = {
  Aegis: { en: 'Block the next incoming attack; stacks duration.', de: 'Blockt den nächsten Angriff; Dauer summiert sich.' },
  Alacrity: { en: 'Skills recharge faster.', de: 'Fertigkeiten laden sich schneller wieder auf.' },
  Fury: { en: 'Critical Chance increased by 20%; stacks duration.', de: 'Erhöht die Chance auf kritischen Treffer um 20%; Dauer summiert sich.' },
  Might: { en: 'Increased outgoing damage; stacks intensity.', de: 'Erhöht zugefügten Schaden; Intensität summiert sich.' },
  Protection: { en: 'Incoming damage decreased by 33%; stacks duration.', de: 'Reduziert erlittenen Schlagschaden um 33%; Dauer summiert sich.' },
  Quickness: { en: 'Skills and actions are faster.', de: 'Fertigkeiten und Aktionen sind schneller.' },
  Regeneration: { en: 'Gain health every second; stacks duration.', de: 'Erhaltet jede Sekunde Lebenspunkte; Dauer summiert sich.' },
  Resistance: {
    en: 'Nondamaging conditions currently on you are ineffective; stacks duration.',
	de: 'Zustände, die Euch zum gegenwärtigen Zeitpunkt betreffen und die keinen Schaden verursachen, haben keine Wirkung; Dauer summiert sich.'
  },
  Resolution: {
    en: 'Incoming condition damage decreased by 33%; stacks duration.',
	de: 'Reduziert erlittenen Zustandsschaden um 33%; Dauer summiert sich.'
  },
  Stability: {
    en: 'Cannot be knocked down, pushed back, pulled, launched, stunned, dazed, floated, sunk, feared or taunted.',
	de: 'Immun gegen Niederschlag, Hoch- und Zurückschleudern, Ziehen, Betäubung, Benommenheit, Schweben, Sinken, Furcht oder Provozieren.'
  },
  Swiftness: { en: 'Movement speed increased by 33%; stacks duration.', de: 'Erhöht Bewegungsgeschwindigkeit um 33%; Dauer summiert sich.' },
  Vigor: { en: 'Endurance regeneration increased by 50%; stacks duration.', de: 'Erhöht Ausdauerregeneration um 50%; Dauer summiert sich.' },
};
