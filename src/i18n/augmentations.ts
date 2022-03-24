import { Translation } from '.';
import { AugmentationsTypes } from '../data/augmentations';

export const TRANSLATIONS_AUGMENTATIONS: Record<
  AugmentationsTypes,
  Translation
> = {
  'Mist Attunement 1': { de: 'Nebeleinstimmung 1' },
  'Mist Attunement 2': { de: 'Nebeleinstimmung 2' },
  'Mist Attunement 3': { de: 'Nebeleinstimmung 3' },
  'Mist Attunement 4': { de: 'Nebeleinstimmung 4' },
};

export const TRANSLATIONS_AUGMENTATION_DESCRIPTIONS: Record<
  AugmentationsTypes,
  Translation
> = {
  'Mist Attunement 1': {
    en: 'Gain 5 agony resistance, 1% outgoing damage, and 10 health per second.',
	de: 'Erhaltet 5 Qual-Widerstand, 1% zugefügten Schaden und 10 Lebenspunkte pro Sekunde.'
  },
  'Mist Attunement 2': {
    en: 'Gain 10 agony resistance, 2% outgoing damage, and 20 health per second.',
	de: 'Erhaltet 10 Qual-Widerstand, 2% zugefügten Schaden und 20 Lebenspunkte pro Sekunde.'
  },
  'Mist Attunement 3': {
    en: 'Gain 15 agony resistance, 4% outgoing damage, and 50 health per second.',
	de: 'Erhaltet 15 Qual-Widerstand, 4% zugefügten Schaden und 50 Lebenspunkte pro Sekunde.'
  },
  'Mist Attunement 4': {
    en: 'Gain 25 agony resistance, 7% outgoing damage, and 100 health per second.',
	de: 'Erhaltet 25 Qual-Widerstand, 7% zugefügten Schaden und 100 Lebenspunkte pro Sekunde.'
  },
};
