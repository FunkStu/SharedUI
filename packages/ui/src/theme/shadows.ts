export const shadows = {
  subtle: "0 1px 2px 0 rgb(15 23 42 / 0.04)",
  card: "0 1px 3px 0 rgb(15 23 42 / 0.08)",
  popover: "0 10px 40px rgb(15 23 42 / 0.22)",
} as const;

export type ShadowToken = keyof typeof shadows;
