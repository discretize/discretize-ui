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
    de: '',
  },
  'Afflicted': {
    en: 'Outgoing resistance and resolution duration is increased by 33%. Enemies apply random damaging conditions. ',
    de: '',
  },
  'Boon Overload': {
    en: 'Each boon reduces maximum health by 1.5%. Outgoing boon duration is increased by 20%. ',
    de: '',
  },
  'Flux Bomb': {
    en: "You are periodically afflicted by the Anomaly's flux bombs. Flux bombs apply to both allies and enemies. Enemies standing in flux bombs are periodically afflicted with random conditions. ",
    de: '',
  },
  'Fractal Vindicators': {
    en: 'Fractal Avengers are replaced by more-powerful Fractal Vindicators.',
    de: '',
  },
  'Frailty': {
    en: 'Players are smaller and take 10% more damage, but move 25% faster. ',
    de: '',
  },
  'Hamstrung': {
    en: 'Low health increasingly slows your movements, up to 33%. Endurance regenerates 33% faster. ',
    de: '',
  },
  'Last Laugh': {
    en: 'Enemies explode upon dying if not stunned. Stunned enemies apply protection, regeneration, and stability to nearby allies. ',
    de: '',
  },
  'Mists Convergence': {
    en: 'The Fractals of the Mists are blurring together...',
    de: '',
  },
  'No Pain, No Gain': {
    en: 'Enemies receive boons when hit. Stripping an enemy boon will apply that boon to nearby allies.<br/><c=@reminder>(Cooldown: 20 seconds)</c>',
    de: '',
  },
  'Outflanked': {
    en: 'Allies within a range of 300 take 100% damage when attacked from behind. Non-boss enemies within a range of 300 take 100% damage when attacked from behind or the side.',
    de: '',
  },
  'Social Awkwardness': {
    en: 'Players will be pushed away from one another. Stability negates this effect. ',
    de: '',
  },
  'Stick Together': {
    en: 'Take 25% increased damage when not within 300 range of an ally. Deal 5% increased damage when within a range of 300 of an ally.',
    de: '',
  },
  'Sugar Rush': {
    en: "Increases movement speed and attack speed by 15%. Elite and lower enemies' movement speed and attack speed increases by 25%, but critical chance is reduced by 25%. ",
    de: '',
  },
  'Toxic Trail': {
    en: 'Enemies leave a path of poison behind them. Blocking a toxic trail attack will absorb it, cleanse poison, and pulse exposed to enemies near the source of the trail.',
    de: '',
  },
  'Vengeance': {
    en: 'When enemies die, they enhance nearby foes with multiple boons. Strip any enemy boon to inflict them with weakness and damage nearby foes.',
    de: '',
  },
  'Toxic Sickness': {
    en: 'Team members will periodically be affected with vomit-inducing sickness. Combatants struck by vomit are debilitated and inflicted with conditions.',
    de: '',
  },
};
