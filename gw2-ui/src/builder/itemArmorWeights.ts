import type ValueOf from './valueOf';

export type ItemArmorWeight = ValueOf<ItemArmorWeights>;

type ItemArmorWeights = typeof itemArmorWeights;

export const itemArmorWeights = {
  HEAVY: 'Heavy',
  MEDIUM: 'Medium',
  LIGHT: 'Light',
} as const;

export default itemArmorWeights;
