import GW2ApiProfession from './profession'
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
  slot?: GW2ApiSlot,
  facts?: 
}
