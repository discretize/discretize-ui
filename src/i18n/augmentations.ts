import { Translation } from '.';
import { AugmentationsTypes } from '../data/augmentations';

export const TRANSLATIONS_AUGMENTATIONS: Record<
  AugmentationsTypes,
  Translation
> = {
  'Mist Attunement 1': {},
  'Mist Attunement 2': {},
  'Mist Attunement 3': {},
  'Mist Attunement 4': {},
};

export const TRANSLATIONS_AUGMENTATION_DESCRIPTIONS: Record<
  AugmentationsTypes,
  Translation
> = {
  'Mist Attunement 1': {
    en: 'Gain 5 agony resistance, 1% outgoing damage, and 10 health per second.',
  },
  'Mist Attunement 2': {
    en: 'Gain 10 agony resistance, 2% outgoing damage, and 20 health per second.',
  },
  'Mist Attunement 3': {
    en: 'Gain 15 agony resistance, 4% outgoing damage, and 50 health per second.',
  },
  'Mist Attunement 4': {
    en: 'Gain 25 agony resistance, 7% outgoing damage, and 100 health per second.',
  },
};
