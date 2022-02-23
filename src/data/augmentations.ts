export type AugmentationsTypes =
  | 'Mist Attunement 1'
  | 'Mist Attunement 2'
  | 'Mist Attunement 3'
  | 'Mist Attunement 4';
const AUGMENTATIONS: Record<string, string> = {
  'Mist Attunement 1':
    'Gain 5 agony resistance, 1% outgoing damage, and 10 health per second.',
  'Mist Attunement 2':
    'Gain 10 agony resistance, 2% outgoing damage, and 20 health per second.',
  'Mist Attunement 3':
    'Gain 15 agony resistance, 4% outgoing damage, and 50 health per second.',
  'Mist Attunement 4':
    'Gain 25 agony resistance, 7% outgoing damage, and 100 health per second.',
};
export default AUGMENTATIONS;
