/** Numeric rhythm for JS/layout math. Prefer Tailwind spacing scale in components when possible. */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
} as const;

export type SpacingToken = keyof typeof spacing;
