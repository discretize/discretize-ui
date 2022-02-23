const CATEGORIES = ['DualWield', 'StealthAttack', 'Signet', 'Cantrip'] as const;
type GW2ApiSkillCategory = typeof CATEGORIES[number];

export default GW2ApiSkillCategory;
