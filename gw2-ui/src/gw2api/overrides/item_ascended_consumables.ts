import type GW2ApiConsumableDetails from '../types/items/details/consumable';
import type GW2ApiItem from '../types/items/item';

type Data = typeof import('./item_ascended_consumables_data').default;
// undefined: not loaded
// false: loading failed
let data: undefined | Promise<void> | Data | false = undefined;

const common_details: Partial<GW2ApiConsumableDetails> = {
  duration_ms: 3600000,
  apply_count: 1,
  name: 'Nourishment',
  icon: 'https://render.guildwars2.com/file/779D3F0ABE5B46C09CFC57374DA8CC3A495F291C/436367.png',
};

function load_json_data(): Promise<void> {
  return import('./item_ascended_consumables_data')
    .then((res) => {
      data = res.default;
    })
    .catch((e) => {
      console.warn('Error loading consumable overrides');
      data = false;
    });
}

export function fixAscendedConsumable(
  id: number,
  item: GW2ApiItem | undefined,
): GW2ApiItem | undefined | Promise<GW2ApiItem | undefined> {
  if (!item) return item;
  if (
    item.type !== 'Consumable' ||
    item.rarity !== 'Ascended' ||
    item.details.type !== 'Food'
  )
    return item;

  if (data === false) {
    // Failed to load the overrides
    return item;
  }
  if (data === undefined) {
    data = load_json_data();
  }
  if (data instanceof Promise) {
    return data.then(() => {
      return fixAscendedConsumable(id, item);
    });
  }
  const description = data[id] || '';
  return {
    ...item,
    details: {
      ...common_details,
      description,
      ...item.details,
    },
  };
}
