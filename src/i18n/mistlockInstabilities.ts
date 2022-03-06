import { Translation } from '.';
import { MistlockInstabilityTypes } from '../data/mistlockInstabilities';

export const MISTLOCK_INSTABILITIES: Record<
  MistlockInstabilityTypes,
  Translation
> = {
  'Adrenaline Rush': {
    de: 'Adrenalinschub',
  },
  Afflicted: { de: 'Befallen' },
  'Boon Overload': { de: 'Segensüberladung' },
  'Flux Bomb': { de: 'Fluxbombe' },
  'Fractal Vindicators': { de: 'Fraktal-Verteidiger' },
  Frailty: { de: 'Gebrechlichkeit' },
  Hamstrung: { de: 'Gelähmt' },
  'Last Laugh': { de: 'Wer zuletzt lacht' },
  'Mists Convergence': { de: 'Konvergenz der Nebel' },
  'No Pain, No Gain': { de: 'Ohne Fleiß kein Preis' },
  Outflanked: { de: 'Überlistet' },
  'Social Awkwardness': { de: 'Unbeholfen in Gesellschaft' },
  'Stick Together': { de: 'Zusammenbleiben' },
  'Sugar Rush': { de: 'Zuckerschub' },
  'Toxic Trail': { de: 'Toxische Spur' },
  Vengeance: { de: 'Rache' },
  'We Bleed Fire': { de: 'Feuer im Blut' },
  'Toxic Sickness': { de: 'Toxische Krankheit' },
};

export const MISTLOCK_INSTABILTY_CONTROL: Record<string, Translation> = {
  'Mistlock Instability': {
    de: 'Nebelsperre-Instabilität',
  },
};

export const MISTLOCK_INSTABILITIES_DESCRIPTIONS: Record<
  MistlockInstabilityTypes,
  Translation
> = {
  'Adrenaline Rush': {
    en: "When enraged, enemies deal 150% increased damage while they're low on health. Enemies deal 20% less damage when not enraged.",
    de: 'Wenn sie erzürnt sind, während Ihre Lebenspunkte niedrig sind, fügen Gegner 150 % erhöhten Schaden zu. Wenn sie nicht erzürnt sind, fügen Gegner 20 % weniger Schaden zu.',
  },
  Afflicted: {
    en: 'Outgoing resistance duration is increased by 50%. Enemies apply random conditions.',
    de: 'Die Dauer gewährten Widerstands ist um 50 % erhöht. Gegner verursachen zufällige Zustände.',
  },
  'Boon Overload': {
    en: 'Each boon increases incoming strike damage by 5%. Outgoing boon duration is increased by 20%.',
    de: 'Jeder Segen erhöht den erlittenen Schlagschaden um 5 %. Die Dauer gewährter Segen wird um 20 % erhöht.',
  },
  'Flux Bomb': {
    en: "You are periodically afflicted by the Anomaly's flux bombs. Flux bombs apply to both allies and enemies.",
    de: 'Die Fluxbomben der Anomalie machen Euch in regelmäßigen Abständen zu schaffen. Fluxbomben werden sowohl bei Verbündeten, als auch bei Gegnern angewendet.',
  },
  'Fractal Vindicators': {
    en: 'Fractal Avengers are replaced by more-powerful Fractal Vindicators.',
    de: 'Fraktal-Rächer werden durch kraftvollere Fraktal-Verteidiger ersetzt.',
  },
  Frailty: {
    en: 'Players are smaller and have 30% less health, but move 25% faster.',
    de: 'Spieler sind kleiner und haben 30 % weniger Lebenspunkte, bewegen sich jedoch 25 % schneller.',
  },
  Hamstrung: {
    en: 'Low health increasingly slows your movements. Endurance regenerates 33% faster.',
    de: 'Niedrige Lebenspunkte verlangsamen Eure Bewegungen zunehmend. Ausdauer regeneriert sich 33 % schneller.',
  },
  'Last Laugh': {
    en: 'Enemies explode upon dying if not stunned. Stunned enemies apply protection and stability to nearby allies.',
    de: 'Gegner explodieren beim Tod, wenn sie nicht betäubt sind. Betäubte Gegner gewähren Verbündeten in der Nähe Schutz und Stabilität.',
  },
  'Mists Convergence': {
    en: 'The Fractals of the Mists are blurring together...',
    de: 'Die Fraktale der Nebel verschwimmen miteinander ...',
  },
  'No Pain, No Gain': {
    en: 'Enemies receive boons when hit. Stripping an enemy boon will steal their life.<br/><c=@reminder>(Cooldown: 20 seconds)</c>',
    de: 'Gegner erhalten bei Treffern Segen. Die Entfernung eines gegnerischen Segens stiehlt ihnen Lebenspunkte.<br/><c=@reminder>(Erholzeit: 20 Sekunden)</c>',
  },
  Outflanked: {
    en: 'Foes within 300 range do 300% damage when attacking from behind, but only 75% damage when attacking head on.',
    de: 'Gegner innerhalb einer Reichweite von 300 richten mit Angriffen von hinten 300 % Schaden an, aber mit Frontalangriffen nur 75 %.',
  },
  'Social Awkwardness': {
    en: 'Players will be pushed away from one another.',
    de: 'Spieler werden von einander weg gestoßen.',
  },
  'Stick Together': {
    en: 'Take 60% increased damage when not within 300 range of an ally. Take 20% reduced damage when within 300 range of an ally.',
    de: 'Nehmt 60 % höheren Schaden, wenn sich kein Verbündeter innerhalb einer Reichweite von 300 befindet. Ist ein Verbündeter innerhalb einer Reichweite von 300, nehmt Ihr 20 % weniger Schaden.',
  },
  'Sugar Rush': {
    en: "Increases movement speed and attack speed by 15%. Elite and lower enemies' movement speed and attack speed increases by 35%.",
    de: 'Bewegungsgeschwindigkeit und Angriffsgeschwindigkeit werden um 15 % erhöht. Bewegungsgeschwindigkeit und Angriffsgeschwindigkeit von Gegnern vom Rang "Elite" und darunter werden um 35 % erhöht.',
  },
  'Toxic Trail': {
    en: 'Enemies leave a path of poison behind them. Blocking a toxic trail attack will absorb it and cleanse the condition.',
    de: 'Gegner hinterlassen eine Giftspur. Beim Blocken eines "Toxische Spur"-Angriffs wird sie absorbiert und der Zustand beseitigt.',
  },
  Vengeance: {
    en: 'When enemies die, they enhance nearby foes with multiple boons; does not apply to elite foes. Strip any enemy boon to inflict them with weakness.',
    de: 'Wenn Gegner sterben, verbessern sie Gegner in der Nähe mit mehreren Segen. Dies trifft bei Elite-Gegnern nicht zu. Entfernt jeden Segen von Gegnern, um ihnen Schwäche zuzufügen.',
  },
  'We Bleed Fire': {
    en: 'Enemies create flaming missiles when damaged. Incoming condition damage is reduced by 20%.',
    de: 'Gegner erzeugen flammende Geschosse, wenn sie Schaden erleiden. Der erlittene Zustandsschaden ist um 20 % verringert.',
  },
  'Toxic Sickness': {
    en: 'Team members will periodically be affected with vomit-inducing sickness.',
    de: 'Teammitglieder werden in regelmäßigen Abständen von einer Krankheit betroffen, die Brechreiz verursacht.',
  },
};
