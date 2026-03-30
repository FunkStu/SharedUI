/** Reference sizes for non-Tailwind contexts. Host sets body font via theme / `font-sans`. */
export const typography = {
  fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
  },
} as const;

export type TypographySizeToken = keyof typeof typography.sizes;
