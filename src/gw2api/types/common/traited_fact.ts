import GW2ApiFact from './fact';

type GW2ApiTraitedFact = GW2ApiFact & {
  requires_trait: number;
  overrides?: number;
};

export default GW2ApiTraitedFact;
