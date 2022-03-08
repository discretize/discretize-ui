import GW2ApiFact from '../common/fact';
import GW2ApiTraitedFact from '../common/traited_fact';

interface GW2ApiTraitBase {
  id: number;
  name: string;
  description?: string;
  icon: string;
  facts?: GW2ApiFact[];
  traited_facts?: GW2ApiTraitedFact[];
}

export interface GW2ApiTraitSkill extends GW2ApiTraitBase {
  flags: unknown[];
  chat_link: string;
  categories?: unknown[];
}

interface GW2ApiTrait extends GW2ApiTraitBase {
  specialization: number;
  tier: number;
  order: number;
  slot: 'Major' | 'Minor';
  skills?: GW2ApiTraitSkill[];
}

export default GW2ApiTrait;
