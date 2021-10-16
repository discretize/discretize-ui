import ValueOf from "./valueOf";

export type ItemTypeName = ValueOf<ItemTypeNames>;

export interface ItemTypeNames {
  HELM: string;
  SHOULDERS: string;
  COAT: string;
  GLOVES: string;
  LEGGINGS: string;
  BOOTS: string;
  
  ACCESSORY: string;
  AMULET: string;
  RING: string;

  BACK_ITEM: string;

  GREATSWORD: string;
  HAMMER: string;
  LONGBOW: string;
  RIFLE: string;
  SHORT_BOW: string;
  STAFF: string;

  AXE: string;
  DAGGER: string;
  MACE: string;
  PISTOL: string;
  SWORD: string;

  SCEPTER: string;

  FOCUS: string;
  SHIELD: string;
  TORCH: string;
  WARHORN: string;
}

const itemTypeNames: ItemTypeNames = {
  HELM: 'Helm',
  SHOULDERS: 'Shoulders',
  COAT: 'Coat',
  GLOVES: 'Gloves',
  LEGGINGS: 'Leggings',
  BOOTS: 'Boots',

  ACCESSORY: 'Accessory',
  AMULET: 'Amulet',
  RING: 'Ring',

  BACK_ITEM: 'Back Item',

  GREATSWORD: 'Greatsword',
  HAMMER: 'Hammer',
  LONGBOW: 'Longbow',
  RIFLE: 'Rifle',
  SHORT_BOW: 'Short Bow',
  STAFF: 'Staff',

  AXE: 'Axe',
  DAGGER: 'Dagger',
  MACE: 'Mace',
  PISTOL: 'Pistol',
  SWORD: 'Sword',

  SCEPTER: 'Scepter',

  FOCUS: 'Focus',
  SHIELD: 'Shield',
  TORCH: 'Torch',
  WARHORN: 'Warhorn',
}

export default itemTypeNames;