import { Translation } from '.';
import { MistlockInstabilityTypes } from '../data/mistlockInstabilities';

export const MISTLOCK_INSTABILITIES: Record<
  MistlockInstabilityTypes,
  Translation
> = {
  'Adrenaline Rush': {},
  Afflicted: {},
  'Boon Overload': {},
  'Flux Bomb': {},
  'Fractal Vindicators': {},
  Frailty: {},
  Hamstrung: {},
  'Last Laugh': {},
  'Mists Convergence': {},
  'No Pain, No Gain': {},
  Outflanked: {},
  'Social Awkwardness': {},
  'Stick Together': {},
  'Sugar Rush': {},
  'Toxic Trail': {},
  Vengeance: {},
  'We Bleed Fire': {},
  'Toxic Sickness': {},
};

export const MISTLOCK_INSTABILTY_CONTROL: Record<string, Translation> = {
  'Mistlock Instability': {},
};

export const MISTLOCK_INSTABILITIES_DESCRIPTIONS: Record<
  MistlockInstabilityTypes,
  Translation
> = {
  'Adrenaline Rush': {
    en: "When enraged, enemies deal 150% increased damage while they're low on health. Enemies deal 20% less damage when not enraged.",
  },
  Afflicted: {
    en: 'Outgoing resistance duration is increased by 50%. Enemies apply random conditions.',
  },
  'Boon Overload': {
    en: 'Each boon increases incoming strike damage by 5%. Outgoing boon duration is increased by 20%.',
  },
  'Flux Bomb': {
    en: "You are periodically afflicted by the Anomaly's flux bombs. Flux bombs apply to both allies and enemies.",
  },
  'Fractal Vindicators': {
    en: 'Fractal Avengers are replaced by more-powerful Fractal Vindicators.',
  },
  Frailty: {
    en: 'Players are smaller and have 30% less health, but move 25% faster.',
  },
  Hamstrung: {
    en: 'Low health increasingly slows your movements. Endurance regenerates 33% faster.',
  },
  'Last Laugh': {
    en: 'Enemies explode upon dying if not stunned. Stunned enemies apply protection and stability to nearby allies.',
  },
  'Mists Convergence': {
    en: 'The Fractals of the Mists are blurring together...',
  },
  'No Pain, No Gain': {
    en: 'Enemies receive boons when hit. Stripping an enemy boon will steal their life.<br/><c=@reminder>(Cooldown: 20 seconds)</c>',
  },
  Outflanked: {
    en: 'Foes within 300 range do 300% damage when attacking from behind, but only 75% damage when attacking head on.',
  },
  'Social Awkwardness': { en: 'Players will be pushed away from one another.' },
  'Stick Together': {
    en: 'Take 60% increased damage when not within 300 range of an ally. Take 20% reduced damage when within 300 range of an ally.',
  },
  'Sugar Rush': {
    en: "Increases movement speed and attack speed by 15%. Elite and lower enemies' movement speed and attack speed increases by 35%.",
  },
  'Toxic Trail': {
    en: 'Enemies leave a path of poison behind them. Blocking a toxic trail attack will absorb it and cleanse the condition.',
  },
  Vengeance: {
    en: 'When enemies die, they enhance nearby foes with multiple boons; does not apply to elite foes. Strip any enemy boon to inflict them with weakness.',
  },
  'We Bleed Fire': {
    en: 'Enemies create flaming missiles when damaged. Incoming condition damage is reduced by 20%.',
  },
  'Toxic Sickness': {
    en: 'Team members will periodically be affected with vomit-inducing sickness.',
  },
};
