export type BoonsTypes =
  | 'Aegis'
  | 'Alacrity'
  | 'Fury'
  | 'Might'
  | 'Protection'
  | 'Quickness'
  | 'Regeneration'
  | 'Resistance'
  | 'Resolution'
  | 'Stability'
  | 'Swiftness'
  | 'Vigor';
const BOONS: Record<string, string> = {
  Aegis: 'Block the next incoming attack; stacks duration.',
  Alacrity: 'Skills recharge faster.',
  Fury: 'Critical Chance increased by 20%; stacks duration.',
  Might: 'Increased outgoing damage; stacks intensity.',
  Protection: 'Incoming damage decreased by 33%; stacks duration.',
  Quickness: 'Skills and actions are faster.',
  Regeneration: 'Gain health every second; stacks duration.',
  Resistance:
    'Nondamaging conditions currently on you are ineffective; stacks duration.',
  Resolution: 'Incoming condition damage decreased by 33%; stacks duration.',
  Stability:
    'Cannot be knocked down, pushed back, pulled, launched, stunned, dazed, floated, sunk, feared or taunted.',
  Swiftness: 'Movement speed increased by 33%; stacks duration.',
  Vigor: 'Endurance regeneration increased by 50%; stacks duration.',
};
export default BOONS;
