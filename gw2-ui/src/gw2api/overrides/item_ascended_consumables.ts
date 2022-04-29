import type GW2ApiConsumableDetails from '../types/items/details/consumable';
import type GW2ApiItem from '../types/items/item';
import { mapWithDescriptions } from './async';

const common_details: Partial<GW2ApiConsumableDetails> = {
  duration_ms: 3600000,
  apply_count: 1,
  name: 'Nourishment',
  icon: 'https://render.guildwars2.com/file/779D3F0ABE5B46C09CFC57374DA8CC3A495F291C/436367.png',
};

export function fixAscendedConsumable(
  id: number,
  item: GW2ApiItem | undefined,
): GW2ApiItem | undefined | Promise<GW2ApiItem | undefined> {
  if (!item) return item;
  if (
    item.type === 'Consumable' &&
    item.rarity === 'Ascended' &&
    item.details.type === 'Food'
  ) {
    return mapWithDescriptions((descriptions) => {
      const description = descriptions?.food[id] || '';
      return {
        ...item,
        details: {
          ...common_details,
          description,
          ...item.details,
        },
      };
    });
  }

  return item;
}
