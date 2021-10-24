import GW2ApiSkillFactComboFieldType from './comboFieldType'

interface GW2ApiSkillFactBase {
  text: string
  icon?: string
  type: string
}

interface GW2ApiSkillFactAttributeAdjust extends GW2ApiSkillFactBase {
  value: number
  target: string //TODO: Likely can be its own type.
}

interface GW2ApiSkillFactBuff extends GW2ApiSkillFactBase {
  status: string //TODO: Likely can be its own type.
  description?: string
  apply_count?: number
  duration?: number
}

interface GW2ApiSkillFactComboField extends GW2ApiSkillFactBase {
  field_type: GW2ApiSkillFactComboFieldType
}

interface GW2ApiSkillFactDamage extends GW2ApiSkillFactBase {
  hit_count: number
  dmg_multiplier: number
}

interface GW2ApiSkillFactDistance extends GW2ApiSkillFactBase {
  distance: number
}

interface GW2ApiSkillFactHealOrHealingAdjust extends GW2ApiSkillFactBase {
  hit_count: number
}

interface GW2ApiSkillFactNoData extends GW2ApiSkillFactBase {}

interface GW2ApiSkillFactNumber extends GW2ApiSkillFactBase {
  value: number
}

interface GW2ApiSkillFactPercent extends GW2ApiSkillFactBase {
  percent: number
}

interface GW2ApiSkillFactPrefixedBuff extends GW2ApiSkillFactBuff {
  prefix: GW2ApiSkillFactBuff
}

interface GW2ApiSkillFactRadius extends GW2ApiSkillFactBase {
  distance: number
}

interface GW2ApiSkillFactRange extends GW2ApiSkillFactBase {
  value: number
}

interface GW2ApiSkillFactRecharge extends GW2ApiSkillFactBase {
  value: number
}

interface GW2ApiSkillFactStunBreak extends GW2ApiSkillFactBase {
  value: boolean
}

interface GW2ApiSkillFactTime extends GW2ApiSkillFactBase {
  duration: number
}

interface GW2ApiSkillFactUnblockable extends GW2ApiSkillFactBase {
  value: boolean
}
