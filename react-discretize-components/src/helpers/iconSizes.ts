export type IconSizes =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'medium2'
  | 'large'
  | 'large2'
  | 'big'
  | 'gigantic';

const sizes: Record<IconSizes, number> = {
  tiny: 12,
  small: 16,
  medium: 20,
  medium2: 30,
  large: 40,
  large2: 45,
  big: 60,
  gigantic: 70,
};

export default sizes;
