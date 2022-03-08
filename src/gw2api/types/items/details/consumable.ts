type GW2ApiConsumableType =
  | 'AppearanceChange'
  | 'Booze'
  | 'ContractNpc'
  | 'Currency'
  | 'Food'
  | 'Generic'
  | 'Halloween'
  | 'Immediate'
  | 'MountRandomUnlock'
  | 'RandomUnlock'
  | 'Transmutation'
  | 'Unlock'
  | 'UpgradeRemoval'
  | 'Utility'
  | 'TeleportToFriend';

type GW2ApiUnlockType =
  | 'BagSlot'
  | 'BankTab'
  | 'Champion'
  | 'CollectibleCapacity'
  | 'Content'
  | 'CraftingRecipe'
  | 'Dye'
  | 'GliderSkin'
  | 'Minipet'
  | 'Ms'
  | 'Outfit'
  | 'RandomUnlock'
  | 'SharedSlot'
  | 'GearLoadoutTab'
  | 'BuildLibrarySlot'
  | 'BuildLoadoutTab';

interface GW2ApiConsumableDetails {
  type: GW2ApiConsumableType;
  description?: string;
  duration_ms?: number;
  unlock_type?: GW2ApiUnlockType;
  color_id?: number;
  recipe_id?: number;
  extra_recipe_ids?: number[];
  guild_upgrade_id?: number;
  apply_count?: number;
  name?: string;
  icon?: string;
  skins?: number[];
}

export default GW2ApiConsumableDetails;
