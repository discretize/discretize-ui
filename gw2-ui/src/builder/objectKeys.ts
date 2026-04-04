export const objectKeys = Object.keys as <Type extends object>(
  value: Type,
) => (keyof Type)[];
