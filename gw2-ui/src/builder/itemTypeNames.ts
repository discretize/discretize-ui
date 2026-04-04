import type ValueOf from './valueOf';

export type ItemTypeName = ValueOf<ItemTypeNames>;

export type ItemTypeNames = typeof itemTypeNames;

const itemTypeNames = {
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

  HARPOON: 'Harpoon',
  SPEARGUN: 'Speargun',
  TRIDENT: 'Trident',
} as const;

export default itemTypeNames;
