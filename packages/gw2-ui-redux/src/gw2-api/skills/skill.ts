import GW2ApiFact from '../common/fact'
import GW2ApiSkillFlag from './flag'
import GW2ApiTraitedFact from '../common/traited_fact'
import GW2ApiProfession from './profession'
import GW2ApiSkillAttunement from './attunement'
import GW2ApiSkillType from './skillType'
import GW2ApiSlot from './slot'

interface GW2ApiSkill {
  id: number
  name: string
  description?: string
  icon: string
  chat_link: string
  type?: GW2ApiSkillType
  weapon_type?: string
  professions: GW2ApiProfession[]
  slot?: GW2ApiSlot
  facts?: GW2ApiFact[]
  traited_facts?: GW2ApiTraitedFact[]
  categories?: string[] //TODO should be its own type, not sure of values.
  attunement?: GW2ApiSkillAttunement
  cost?: number
  dual_wield?: string //TODO should probably be its own type
  flip_skill?: number
  initiative?: number
  next_chain?: number
  prev_chain?: number
  transform_skills?: GW2ApiSkill[]
  bundle_skills?: GW2ApiSkill[]
  toolbelt_skills?: GW2ApiSkill[]
  flags?: GW2ApiSkillFlag[]
}
