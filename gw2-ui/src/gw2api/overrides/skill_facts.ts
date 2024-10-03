import { type GW2ApiFactPercent } from '../types/common/fact';
import type GW2ApiFact from '../types/common/fact';
import type GW2ApiSkill from '../types/skills/skill';
import type GW2ApiTrait from '../types/traits/trait';

function fix_fact(f: GW2ApiFact) {
  if (!f.type && 'percent' in f) {
    // On some facts, the type is missing
    (f as GW2ApiFact).type = 'Percent';
  }
  // On some percent facts, the percent is given as .value
  if (f.type === 'Percent') {
    if ('value' in f) {
      (f as GW2ApiFactPercent).percent = (f as any).value;
      delete (f as any).value;
    }
  }
}
function fix_facts(facts: GW2ApiFact[] | undefined) {
  if (!facts) return;
  for (const f of facts) fix_fact(f);
}

export function fixFactsInSkill(
  id: number,
  item: GW2ApiSkill | undefined,
): GW2ApiSkill | undefined {
  if (!item) return item;
  fix_facts(item.facts);
  fix_facts(item.traited_facts);
  return item;
}

export function fixFactsInTrait(
  id: number,
  item: GW2ApiTrait | undefined,
): GW2ApiTrait | undefined {
  if (!item) return item;
  fix_facts(item.facts);
  fix_facts(item.traited_facts);
  if (item.skills) {
    for (const s of item.skills) {
      fix_facts(s.facts);
      fix_facts(s.traited_facts);
    }
  }
  return item;
}
