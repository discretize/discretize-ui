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
      'Slash foes in front of you, ending Dragon Trigger. This attack consumes all charges to deal more damage.',
    facts: [
      {
        icon: 'https://render.guildwars2.com/file/D767B963D120F077C3B163A05DC05A7317D7DB70/156651.png',
        text: 'Recharge',
        type: 'Recharge',
        value: 1,
      },
      {
        icon: 'https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png',
        text: 'Minimum Damage',
        type: 'Damage',
        hit_count: 1,
        dmg_multiplier: 1.16,
      },
      {
        icon: 'https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png',
        text: 'Maximum Damage',
        type: 'Damage',
        hit_count: 1,
        dmg_multiplier: 20.4,
      },
      {
        icon: 'https://render.guildwars2.com/file/BBE8191A494B0352259C10EADFDACCE177E6DA5B/1770208.png',
        text: 'Number of Targets',
        type: 'Number',
        value: 5,
      },
      {
        icon: 'https://render.guildwars2.com/file/450630987A0566D4A7A491EDA4DCDF57D9396854/1770203.png',
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
  62980: {
    categories: ['Burst'],
    name: 'Dragon Slash—Boost',
    icon: 'https://wiki.guildwars2.com/images/7/75/Dragon_Slash%E2%80%94Boost.png',
    professions: ['Warrior'],
    description:
      'Dash forward while slashing all foes in a line, ending Dragon Trigger. This attack consumes all charges to deal more damage.',
    facts: [
      {
        icon: 'https://render.guildwars2.com/file/D767B963D120F077C3B163A05DC05A7317D7DB70/156651.png',
        text: 'Recharge',
        type: 'Recharge',
        value: 1,
      },
      {
        icon: 'https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png',
        text: 'Minimum Damage',
        type: 'Damage',
        hit_count: 1,
        dmg_multiplier: 0.92,
      },
      {
        icon: 'https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png',
        text: 'Maximum Damage',
        type: 'Damage',
        hit_count: 1,
        dmg_multiplier: 16.3,
      },
      {
        icon: 'https://render.guildwars2.com/file/BBE8191A494B0352259C10EADFDACCE177E6DA5B/1770208.png',
        text: 'Number of Targets',
        type: 'Number',
        value: 5,
      },
      {
        icon: 'https://render.guildwars2.com/file/450630987A0566D4A7A491EDA4DCDF57D9396854/1770203.png',
        text: 'Explosion',
        type: 'NoData',
      },
      {
        icon: 'https://render.guildwars2.com/file/0AAB34BEB1C9F4A25EC612DDBEACF3E20B2810FA/156666.png',
        text: 'Range',
        type: 'Range',
        value: 750,
      },
    ],
  },
  62951: {
    categories: ['Burst'],
    name: 'Dragon Slash—Reach',
    icon: 'https://wiki.guildwars2.com/images/e/eb/Dragon_Slash%E2%80%94Reach.png',
    professions: ['Warrior'],
    description:
      'Slash to create a blade of air that strikes foes in a line in front of you, ending Dragon Trigger. This attack consumes all charges to deal more damage.',
    facts: [
      {
        icon: 'https://render.guildwars2.com/file/D767B963D120F077C3B163A05DC05A7317D7DB70/156651.png',
        text: 'Recharge',
        type: 'Recharge',
        value: 1,
      },
      {
        icon: 'https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png',
        text: 'Minimum Damage',
        type: 'Damage',
        hit_count: 1,
        dmg_multiplier: 0.58,
      },
      {
        icon: 'https://render.guildwars2.com/file/61AA4919C4A7990903241B680A69530121E994C7/156657.png',
        text: 'Maximum Damage',
        type: 'Damage',
        hit_count: 1,
        dmg_multiplier: 10.21,
      },
      {
        icon: 'https://render.guildwars2.com/file/BBE8191A494B0352259C10EADFDACCE177E6DA5B/1770208.png',
        text: 'Number of Targets',
        type: 'Number',
        value: 5,
      },
      {
        text: 'Pierces',
        type: 'NoData',
        icon: 'https://render.guildwars2.com/file/F833590B593E0C2D4948DFFE9951B91655250052/1770207.png',
      },
      {
        icon: 'https://render.guildwars2.com/file/450630987A0566D4A7A491EDA4DCDF57D9396854/1770203.png',
        text: 'Explosion',
        type: 'NoData',
      },
      {
        icon: 'https://render.guildwars2.com/file/0AAB34BEB1C9F4A25EC612DDBEACF3E20B2810FA/156666.png',
        text: 'Range',
        type: 'Range',
        value: 900,
      },
    ],
  },
  62893: {
    categories: [],
    name: 'Triggerguard',
    icon: 'https://wiki.guildwars2.com/images/4/4e/Triggerguard.png',
    professions: ['Warrior'],
    description: 'Gain aegis.',
    facts: [
      {
        icon: 'https://render.guildwars2.com/file/D767B963D120F077C3B163A05DC05A7317D7DB70/156651.png',
        text: 'Recharge',
        type: 'Recharge',
        value: 1,
      },
      {
        text: 'Apply Buff/Condition',
        type: 'Buff',
        icon: 'https://render.guildwars2.com/file/DFB4D1B50AE4D6A275B349E15B179261EE3EB0AF/102854.png',
        duration: 2,
        status: 'Aegis',
        description: 'Block the next incoming attack; stacks duration.',
        apply_count: 1,
      },
      {
        text: 'Maximum Count',
        type: 'Number',
        icon: 'https://render.guildwars2.com/file/B4490FB81AA1E7C06F1B22056AE09A0F54CBE2C4/1770201.png',
        value: 2,
      },
      {
        text: 'Count Recharge',
        type: 'Time',
        icon: 'https://render.guildwars2.com/file/AAB7C5387A08367C2F023F19FEE70E1556AD4375/1770202.png',
        duration: 30,
      },
      {
        icon: 'https://render.guildwars2.com/file/0AAB34BEB1C9F4A25EC612DDBEACF3E20B2810FA/156666.png',
        text: 'Range',
        type: 'Range',
        value: 900,
      },
    ],
  },
  62926: {
    categories: [],
    name: 'Flicker Step',
    icon: 'https://wiki.guildwars2.com/images/d/de/Flicker_Step.png',
    professions: ['Warrior'],
    description: 'Blink to a location.',
    facts: [
      {
        icon: 'https://render.guildwars2.com/file/D767B963D120F077C3B163A05DC05A7317D7DB70/156651.png',
        text: 'Recharge',
        type: 'Recharge',
        value: 0.5,
      },
      {
        text: 'Maximum Count',
        type: 'Number',
        icon: 'https://render.guildwars2.com/file/B4490FB81AA1E7C06F1B22056AE09A0F54CBE2C4/1770201.png',
        value: 3,
      },
      {
        text: 'Count Recharge',
        type: 'Time',
        icon: 'https://render.guildwars2.com/file/AAB7C5387A08367C2F023F19FEE70E1556AD4375/1770202.png',
        duration: 40,
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
