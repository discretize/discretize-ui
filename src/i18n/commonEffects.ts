import { Translation } from '.';
import { CommonEffectTypes } from '../data/commonEffects';

export const COMMON_EFFECTS: Record<CommonEffectTypes, Translation> = {
  Agony: { de: 'Qual' },
  Barrier: { de: 'Barriere' },
  Blight: { de: 'Verschandelung' },
  Exposed: { de: 'Entblößt' },
  Invulnerability: { de: 'Unverwundbarkeit' },
  Revealed: { de: 'Enthüllt' },
  'Rigorous Certainty': { de: 'Strikte Gewissheit' },
  Stealth: { de: 'Tarnung' },
  'Stun Break': { de: 'Betäubungsbrecher' },
  Superspeed: { de: 'Supergeschwindigkeit' },
  Unblockable: { de: 'Kann nicht geblockt werden' },
};

export const COMMON_EFFECTS_DESCRIPTIONS: Record<
  CommonEffectTypes,
  Translation
> = {
  Agony: {
    en: 'Deals damage every second; stacks intensity; reduces incoming healing and barrier application by 70% per stack; damage is reduced by agony resistance.',
	de: 'Richtet jede Sekunde Schaden an; Intensität summiert sich; reduziert erhaltene Heilung und Anwendung von Barriere um 70% pro Stapel; Schaden wird durch Qual-Widerstand reduziert.'
  },
  Barrier: {
    en: 'Creates a health barrier that takes damage prior to the health bar.',
	de: 'Erschafft eine Lebensbarriere die vor der Lebensanzeige Schaden nimmt.'
  },
  Blight: {
    en: 'Reduces your maximum health. Stacks intensity.',
	de: 'Verringert Eure maximalen lebenspunkte. Stapelt Intensität.'
  },
  Exposed: {
    en: 'Takes additional damage.',
	de: 'Erleidet zusätzlichen Schaden.'
  },
  Invulnerability: {
    en: 'Immune to conditions and damage.',
	de: 'Immun gegen Zustände und Schäden.'
  },
  Revealed: { en: 'You cannot stealth', de: 'Tarnung nicht möglich' },
  'Rigorous Certainty': {
    en: '+5 Agony Resistance\nThe next time you would be downed, instead heal 25% of your total health.',
	de: '+5 Qual-Widerstand\nWenn ihr das nächste Mal angeschlagen seid, werdet Ihr stattdessen um 25% Eurer maximalenLebenspunkte geheilt.'
  },
  Stealth: { en: 'Currently invisible. Ends if you deal damage.', de: 'Derzeit unsichtbar. Endet, wenn Ihr Schaden zufügt.' },
  'Stun Break': { en: 'Breaks stun.', de: 'Hebt Betäubung auf.' },
  Superspeed: { en: 'Movement speed is greatly increased.', de: 'Bewegungsgeschwindigkeit ist deutlich erhöht.' },
  Unblockable: { en: 'Your attacks are unblockable', de: 'Eure Angriffe können nicht geblockt werden.' },
};
