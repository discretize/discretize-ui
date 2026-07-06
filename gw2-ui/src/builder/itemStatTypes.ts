import type ValueOf from './valueOf';

export type ItemStatType = ValueOf<ItemStatTypes>;

export type ItemStatTypes = typeof itemStatTypes;

const itemStatTypes = {
  TRIPLE: 'Triple',
  QUADRUPLE: 'Quadruple',
  ALL: 'All',
} as const;

export default itemStatTypes;
