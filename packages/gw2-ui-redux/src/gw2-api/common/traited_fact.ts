import GW2ApiFact from './fact'

interface GW2ApiTraitedFact extends GW2ApiFact {
  requires_trait: number
  overrides?: number
}

export default GW2ApiTraitedFact
