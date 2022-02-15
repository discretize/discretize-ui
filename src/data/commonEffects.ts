export type CommonEffectTypes =
  | 'Agony'
  | 'Barrier'
  | 'Exposed'
  | 'Invulnerability'
  | 'Revealed'
  | 'Rigorous Certainty'
  | 'Stealth'
  | 'Stun Break'
  | 'Superspeed';

const COMMONEFFECTS: Record<CommonEffectTypes, string> = {
  Agony:
    'Deals damage every second; stacks intensity; reduces incoming healing and barrier application by 70% per stack; damage is reduced by agony resistance.',
  Barrier:
    'Creates a health barrier that takes damage prior to the health bar.',
  Exposed: 'Takes additional damage.',
  Invulnerability: 'Immune to conditions and damage.',
  Revealed: 'You cannot stealth',
  'Rigorous Certainty':
    '+5 Agony Resistance\nThe next time you would be downed, instead heal 25% of your total health.',
  Stealth: 'Currently invisible. Ends if you deal damage.',
  'Stun Break': 'Breaks stun.',
  Superspeed: 'Movement speed is greatly increased.',
};
export default COMMONEFFECTS;
