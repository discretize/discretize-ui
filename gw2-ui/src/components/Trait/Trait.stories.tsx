import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import React, { Fragment } from 'react';
import Trait from './Trait';

const meta: Meta<typeof Trait> = {
  title: 'Components/Trait',
  component: Trait,
  argTypes: {
    className: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Trait> = (args) => {
  return <Trait {...args} />;
};

export const FreshAir: StoryObj<typeof Trait> = {
  render: Template,

  args: {
    id: 1503,
  },
};

export const RecklessDodge: StoryObj<typeof Trait> = {
  render: Template,

  args: {
    id: 1446,
  },
};

const outdatedOverrides = {
  2062: 'Equipping or stowing a Virtue grants you quickness.',
  2063: 'Your Mantra skills slow nearby foes. This effect may only occur once per interval. Mantras gain reduced charge-recovery time.',
  2071: 'Using a Beast ability grants you offensive boons.',
  2072: 'Entering beastmode grants boons and removes movement-impairing conditions.',
  2075: 'Axe skills gain a chance to inflict bleeding. Symbol of Vengeance now dazes on its initial strike.',
  2076: 'When you grant aegis or stability, grant quickness.',
  2079: "Fury increases the duration of bleeds you inflict. Gaining fury inspires you with Kalla's Fervor.",
  2085: 'Gaining quickness increases the duration of other boons affecting you.',
  2086: 'Your Virtues gain additional pages.',
  2092: 'Your short bow skills now pierce. Bleeding you inflict deals more damage.',
  2094: "Gaining Kalla's Fervor grants you might. Citadel Bombardment pulls more missiles into Tyria for every stack of Kalla's Fervor affecting you.",
  2100: "Kalla's Fervor you inspire lasts longer and is more potent. Heroic Command grants more might per stack of Kalla's Fervor.",
  2101: 'Grant allies quickness when you use your heal skill.',
  2105: 'Inflict burning and slowness on foes you disable, immobilize, or slow.',
  2108: 'Using Legendary Renegade abilities grants protection to allies near the summoned warband member.',
  2116: 'Tome skills gain bonuses from scribbling in the margins by ancient bards.',
  2119: 'Conditions inflict less damage to you while you have protection.',
  2120: "Evading an attack inspires you with Kalla's Fervor and grants boons to nearby allies.",
  2127: 'Disabling a foe increases your damage and condition damage for a short duration.',
  2134: 'Entering beastmode grants you the boons affecting your pet.',
  2142: 'While at full endurance, increase your chance to critically strike. Gain vigor when you gain fury.',
  2143: 'Deal increased damage to foes at a lower health percentage than you. Conditions you apply to foes at a lower health percentage than you last longer.',
  2148: 'Gain increased attributes while affected by quickness.',
  2154: 'Gain fury when you critically strike a foe below the health threshold.',
  2155: 'While in beastmode, if you would be downed you instead fall out of beastmode and recover health.',
  2156: 'You deal increased strike damage while you have fury.',
  2159: 'Tome skills gain reduced recharge. Retain Virtues passives while they are on cooldown.',
  2161: 'When you apply poison to a foe, steal some health from them.',
  2166: "Disabling a foe cripples your enemy, which leaves them vulnerable and inspires you with Kalla's Fervor.",
  2179: 'Granting quickness to an ally also grants Ashes of the Just.',
  2182: "Kalla's Fervor reduces the damage you receive from conditions. Orders from Above lasts longer and affects more targets and a larger area.",
};

export function FixedTraits() {
  return (
    <div>
      These traits used to have missing description data in the API, but have
      been fixed.
      {Object.keys(outdatedOverrides).map((id) => (
        <Fragment key={id}>
          <br />
          <Trait id={Number(id)} />
        </Fragment>
      ))}
    </div>
  );
}
