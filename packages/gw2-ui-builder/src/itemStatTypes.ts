import ValueOf from "./valueOf";

export type ItemStatType = ValueOf<ItemStatTypes>;

export interface ItemStatTypes {
  TRIPLE: string;
  QUADRUPLE: string;
  ALL: string;
}

const itemStatTypes: ItemStatTypes = {
  TRIPLE: 'Triple',
  QUADRUPLE: 'Quadruple',
  ALL: 'All',
}

export default itemStatTypes;