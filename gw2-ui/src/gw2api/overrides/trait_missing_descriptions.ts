import type GW2ApiTrait from '../types/traits/trait';
import { mapWithDescriptions } from './async';

export function fixMissingTraitDescriptions(
  id: number,
  trait: GW2ApiTrait | undefined,
): GW2ApiTrait | undefined | Promise<GW2ApiTrait | undefined> {
  if (!trait || trait.description) return trait;

  return mapWithDescriptions((descriptions) => {
    const description = descriptions?.traits[id] || '';
    return {
      description,
      ...trait,
    };
  });
}
