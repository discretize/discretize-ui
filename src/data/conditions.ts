export type ConditionTypes =
  | 'Bleeding'
  | 'Blinded'
  | 'Burning'
  | 'Chilled'
  | 'Confusion'
  | 'Crippled'
  | 'Fear'
  | 'Immobile'
  | 'Poisoned'
  | 'Slow'
  | 'Taunt'
  | 'Torment'
  | 'Vulnerability'
  | 'Weakness';

const CONDITIONS: Record<string, string> = {
  Bleeding: 'Deals damage every second; stacks intensity.',
  Blinded: 'Next outgoing attack misses; stacks duration.',
  Burning: 'Deals damage every second; stacks intensity.',
  Chilled:
    'Movement speed decreased by 66%; skill cooldown increased by 66%; stacks duration.',
  Confusion: 'Damage received on skill activation; stacks intensity.',
  Crippled: 'Movement speed decreased by 50%; stacks duration.',
  Fear: 'Involuntary retreat; unable to act; stacks duration.',
  Immobile: 'Unable to move; stacks duration.',
  Poisoned:
    'Deals damage every second; decreases healing effectiveness 33%; damage stacks intensity.',
  Slow: 'Skills and actions are slower.',
  Taunt: 'Involuntarily attack foes.',
  Torment:
    'Deals damage every second. Deals additional damage to moving foes. Stacks intensity.',
  Vulnerability:
    'Damage and condition damage taken are increased; stacks intensity.',
  Weakness:
    'Endurance regeneration decreased by 50%. 50% of hits are Glancing Blows (50% damage). Stacks duration.',
};
export default CONDITIONS;
