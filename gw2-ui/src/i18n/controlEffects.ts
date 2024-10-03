import { type Translation } from '.';
import { type ControlEffectTypes } from '../data/controlEffects';

export const CONTROL_EFFECTS: Record<ControlEffectTypes, Translation> = {
  Daze: {
    de: 'Benommenheit',
  },
  Float: {
    de: 'Float',
  },
  Knockback: {
    de: 'Rückschlag',
  },
  Knockdown: {
    de: 'Niederschlag',
  },
  Launch: {
    de: 'Hochschleudern',
  },
  Pull: {
    de: 'Ziehen',
  },
  Sink: {
    de: 'Sinken',
  },
  Stun: {
    de: 'Betäubung',
  },
};

export const CONTROL_EFFECTS_DESCRIPTIONS: Record<
  ControlEffectTypes,
  Translation
> = {
  Daze: {
    en: 'Disables all skills for a short duration.',
    de: 'Fertigkeiten können nicht aktiviert werden; Dauer summiert sich.',
  },
  Float: {
    en: 'Causes the underwater target to move upwards.',
    de: 'Schweben ist ein Unterwasser-Effekt, der das Ziel oder sich selbst in Richtung Wasseroberfläche bewegt.',
  },
  Knockback: {
    en: 'Knocks back the target away and on the ground, preventing movement and actions for a short duration.',
    de: 'Rückschlag ist ein Status-Effekt, der zu Folge hat, dass man vom Verursacher weggestoßen wird',
  },
  Knockdown: {
    en: 'Knocks the target on ground, preventing movement and actions for a short duration.',
    de: 'Niederschlag wirft den Gegner zu Boden, wodurch er für kurze Zeit bewegungsunfähig ist und keine Fertigkeiten verwenden kann.',
  },
  Launch: {
    en: 'Throws the target in the air over a short distance, preventing movement and actions for a short duration. Can move Downed targets.',
    de: 'Durch Hochschleudern wird das Ziel unterbrochen und in die Luft geworfen.',
  },
  Pull: {
    en: 'Pulls the caster to the target or the target to a specific location and disables them for a short duration.',
    de: 'Ziehen unterbricht Fertigkeiten mit Wirkzeit. Ziehen reduziert die Trotzleiste von Kreaturen abhängig von der aufgerundeten angewendeten Dauer.',
  },
  Sink: {
    en: 'Causes the underwater target to move downwards.',
    de: 'Sinken verhindert Bewegung und Fertigkeitsaktivierung und lässt Betroffene sinken.',
  },
  Stun: {
    en: 'Prevents movement and actions for a short duration.',
    de: 'Handlungsunfähig; Dauer summiert sich.',
  },
};
