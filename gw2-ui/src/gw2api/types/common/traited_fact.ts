import { type GW2ApiFact } from './fact';

type GW2ApiTraitedFactAdditional = {
  requires_trait: number;
  overrides?: number;
};

type GW2ApiTraitedFact = GW2ApiFact & GW2ApiTraitedFactAdditional;

export default GW2ApiTraitedFact;
