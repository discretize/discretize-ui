// undefined: not loaded
// null: loading failed
type Descriptions = typeof import('./data/descriptions');
let descriptions: undefined | Promise<void> | Descriptions | null = undefined;

export function load_descriptions(): Promise<void> {
  return import('./data/descriptions')
    .then((res) => {
      descriptions = res;
    })
    .catch((e) => {
      console.warn('Error loading description overrides', e);
      descriptions = null;
    });
}

export function mapWithDescriptions<T>(
  f: (descriptions: Descriptions | null) => T,
): T | Promise<T> {
  if (descriptions === null) {
    // Failed to load the overrides
    return f(null);
  }
  if (descriptions === undefined) {
    descriptions = load_descriptions();
  }
  if (descriptions instanceof Promise) {
    return descriptions.then(() => mapWithDescriptions(f));
  }
  return f(descriptions);
}

type Skills = typeof import('./data/skills');
let skills: undefined | Promise<void> | Skills | null = undefined;

export function load_skills(): Promise<void> {
  return import('./data/skills')
    .then((res) => {
      skills = res;
    })
    .catch((e) => {
      console.warn('Error loading skill overrides', e);
      skills = null;
    });
}

export function mapWithSkills<T>(
  f: (skills: Skills | null) => T,
): T | Promise<T> {
  if (skills === null) {
    // Failed to load the overrides
    return f(null);
  }
  if (skills === undefined) {
    skills = load_skills();
  }
  if (skills instanceof Promise) {
    return skills.then(() => mapWithSkills(f));
  }
  return f(skills);
}
