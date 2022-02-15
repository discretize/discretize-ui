export type ControlEffectTypes =
  | 'Daze'
  | 'Float'
  | 'Knockback'
  | 'Knockdown'
  | 'Launch'
  | 'Pull'
  | 'Sink'
  | 'Stun';
const CONTROLEFFECTS: Record<ControlEffectTypes, string> = {
  Daze: 'Disables all skills for a short duration.',
  Float: 'Causes the underwater target to move upwards.',
  Knockback:
    'Knocks back the target away and on the ground, preventing movement and actions for a short duration.',
  Knockdown:
    'Knocks the target on ground, preventing movement and actions for a short duration.',
  Launch:
    'Throws the target in the air over a short distance, preventing movement and actions for a short duration. Can move Downed targets.',
  Pull: 'Pulls the caster to the target or the target to a specific location and disables them for a short duration.',
  Sink: 'Causes the underwater target to move downwards.',
  Stun: 'Prevents movement and actions for a short duration.',
};
export default CONTROLEFFECTS;
