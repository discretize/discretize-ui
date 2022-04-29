import type GW2ApiSkill from '../../types/skills/skill';

// Note: when adding or removing a skill, make sure to add or remove the id from the array in ../skill_missing.ts
export const missing_skills: Record<
  number,
  Omit<GW2ApiSkill, 'id' | 'chat_link'>
> = {
  62797: {
    categories: ['Burst'],
    name: 'Dragon Slash—Force',
    icon: 'https://wiki.guildwars2.com/images/b/b5/Dragon_Slash%E2%80%94Force.png',
    professions: ['Warrior'],
    description:
      'Slash foes in front of you, ending Dragon Trigger. This attack consumes all charges to deal more damage. ',
    facts: [
      {
        icon: 'https://render.guildwars2.com/file/D767B963D120F077C3B163A05DC05A7317D7DB70/156651.png',
        text: 'Recharge',
        type: 'Recharge',
        value: 1,
      },
      {
        icon: 'https://wiki.guildwars2.com/images/thumb/6/6a/Damage.png/20px-Damage.png',
        text: 'Minimum Damage',
        type: 'Damage',
        hit_count: 1,
        dmg_multiplier: 1.0211965812,
      },
      {
        icon: 'https://wiki.guildwars2.com/images/thumb/6/6a/Damage.png/20px-Damage.png',
        text: 'Maximum Damage',
        type: 'Damage',
        hit_count: 1,
        dmg_multiplier: 17.9652892562,
      },
      {
        icon: 'https://wiki.guildwars2.com/images/thumb/5/53/Number_of_targets.png/20px-Number_of_targets.png',
        text: 'Number of Targets',
        type: 'Number',
        value: 5,
      },
      {
        icon: 'https://wiki.guildwars2.com/images/0/09/Explosion.png',
        text: 'Explosion',
        type: 'NoData',
      },
      {
        icon: 'https://render.guildwars2.com/file/0AAB34BEB1C9F4A25EC612DDBEACF3E20B2810FA/156666.png',
        text: 'Range',
        type: 'Range',
        value: 300,
      },
    ],
  },
};
