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
    en: "When enraged, enemies deal 100% increased damage while they're low on health but can no longer critically hit. Enemies deal 10% less damage when not enraged. ",
    de: 'Wenn sie erzürnt sind, während Ihre Lebenspunkte niedrig sind, fügen Gegner 150 % erhöhten Schaden zu. Wenn sie nicht erzürnt sind, fügen Gegner 20 % weniger Schaden zu.',
  },
  Afflicted: {
    en: 'Outgoing resistance and resolution duration is increased by 33%. Enemies apply random damaging conditions. ',
    de: 'Die Dauer gewährten Widerstands ist um 50 % erhöht. Gegner verursachen zufällige Zustände.',
  },
  'Boon Overload': {
    en: 'Each boon reduces maximum health by 1.5%. Outgoing boon duration is increased by 20%. ',
    de: 'Jeder Segen reduziert die maximalen Lebenspunkte um 1.5%. Die Dauer gewährter Segen wird um 20% erhöht.',
  },
  'Flux Bomb': {
    en: "You are periodically afflicted by the Anomaly's flux bombs. Flux bombs apply to both allies and enemies. Enemies standing in flux bombs are periodically afflicted with random conditions. ",
    de: 'Die Fluxbomben der Anomalie machen Euch in regelmäßigen Abständen zu schaffen. Fluxbomben werden sowohl bei Verbündeten, als auch bei Gegnern angewendet.',
  },
  'Fractal Vindicators': {
    en: 'Fractal Avengers are replaced by more-powerful Fractal Vindicators.',
    de: 'Fraktal-Rächer werden durch kraftvollere Fraktal-Verteidiger ersetzt.',
  },
  Frailty: {
    en: 'Players are smaller and take 10% more damage, but move 25% faster. ',
    de: 'Spieler sind kleiner und haben 30 % weniger Lebenspunkte, bewegen sich jedoch 25 % schneller.',
  },
  Hamstrung: {
    en: 'Low health increasingly slows your movements, up to 33%. Endurance regenerates 33% faster. ',
    de: 'Niedrige Lebenspunkte verlangsamen Eure Bewegungen zunehmend. Ausdauer regeneriert sich 33 % schneller.',
  },
  'Last Laugh': {
    en: 'Enemies explode upon dying if not stunned. Stunned enemies apply protection, regeneration, and stability to nearby allies. ',
    de: 'Gegner explodieren beim Tod, wenn sie nicht betäubt sind. Betäubte Gegner gewähren Verbündeten in der Nähe Schutz und Stabilität.',
  },
  'Mists Convergence': {
    en: 'The Fractals of the Mists are blurring together...',
    de: 'Die Fraktale der Nebel verschwimmen miteinander ...',
  },
  'No Pain, No Gain': {
    en: 'Enemies receive boons when hit. Stripping an enemy boon will apply that boon to nearby allies.<br/><c=@reminder>(Cooldown: 20 seconds)</c>',
    de: 'Gegner erhalten bei Treffern Segen. Die Entfernung eines gegnerischen Segens stiehlt ihnen Lebenspunkte. <br/><c=@reminder>(Erholzeit: 20 Sekunden)</c>',
  },
  Outflanked: {
    en: 'Allies within a range of 300 take 100% damage when attacked from behind. Non-boss enemies within a range of 300 take 100% damage when attacked from behind or the side.',
    de: 'Verbündete in einem Umkreis von 300 erleiden 100% Schaden, wenn sie von hinten angegriffen werden. Nicht-Boss-Feinde innerhalb einer Reichweite von 300 erleiden 100 % Schaden, wenn sie von hinten oder von der Seite angegriffen werden.',
  },
  'Social Awkwardness': {
    en: 'Players will be pushed away from one another. Stability negates this effect. ',
    de: 'Spieler werden von einander weg gestoßen. Stabilität negiert diesen Effekt.',
  },
  'Stick Together': {
    en: 'Take 25% increased damage when not within 300 range of an ally. Deal 5% increased damage when within a range of 300 of an ally.',
    de: 'Erhöht den Schaden um 25%, wenn er sich nicht in 300er Reichweite eines Verbündeten befindet. Verursache 5% mehr Schaden, wenn du dich in einer Reichweite von 300 von einem Verbündeten befindest.',
  },
  'Sugar Rush': {
    en: "Increases movement speed and attack speed by 15%. Elite and lower enemies' movement speed and attack speed increases by 25%, but critical chance is reduced by 25%. ",
    de: 'Erhöht das Bewegungstempo und das Angriffstempo um 15%. Das Bewegungstempo und das Angriffstempo von Elite- und niederen Gegnern wird um 25% erhöht, aber die Chance auf kritische Treffer wird um 25% verringert.',
  },
  'Toxic Trail': {
    en: 'Enemies leave a path of poison behind them. Blocking a toxic trail attack will absorb it, cleanse poison, and pulse exposed to enemies near the source of the trail.',
    de: 'Gegner hinterlassen eine Giftspur. Beim Blocken eines "Toxische Spur"-Angriffs wird sie absorbiert und der Zustand beseitigt.',
  },
  Vengeance: {
    en: 'When enemies die, they enhance nearby foes with multiple boons. Strip any enemy boon to inflict them with weakness and damage nearby foes.',
    de: 'Wenn Gegner sterben, verbessern sie Gegner in der Nähe mit mehreren Segen. Dies trifft bei Elite-Gegnern nicht zu. Entfernt jeden Segen von Gegnern, um ihnen Schwäche zuzufügen.',
  },
  'Toxic Sickness': {
    en: 'Team members will periodically be affected with vomit-inducing sickness. Combatants struck by vomit are debilitated and inflicted with conditions.',
    de: 'Teammitglieder werden in regelmäßigen Abständen von einer Krankheit betroffen, die Brechreiz verursacht.',
  },
  'We Bleed Fire': {
    en: 'Enemies create flaming missiles when damaged. Incoming condition damage is reduced by 20%. ',
    de: 'Gegner erzeugen flammende Geschosse, wenn sie Schaden erleiden. Der erlittene Zustandsschaden ist um 20 % verringert.',
  },
};
