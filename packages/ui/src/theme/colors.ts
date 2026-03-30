/**
 * Canonical colour system for Audere shared UI
 * -------------------------------------------
 * Runtime styling uses **CSS variables on `:root`** (light / `.dark`), exposed as
 * Tailwind utilities by the host app (`bg-background`, `text-foreground`, `border-border`,
 * `bg-card`, `text-muted-foreground`, `bg-primary`, `bg-sidebar`, …).
 *
 * @audere-apps/ui compound components use those utilities only — not raw hex or `slate-*`,
 * except intentional semantic accents (e.g. status borders) documented on the component.
 *
 * Shared UI app: `src/styles/theme.css`. Other apps: align variable names with shadcn-style tokens.
 */

/** Maps to `--${key}` on :root for inline styles, canvas, or third-party charts. */
export const cssVarName = {
  background: "--background",
  foreground: "--foreground",
  card: "--card",
  cardForeground: "--card-foreground",
  border: "--border",
  muted: "--muted",
  mutedForeground: "--muted-foreground",
  primary: "--primary",
  primaryForeground: "--primary-foreground",
  destructive: "--destructive",
  accent: "--accent",
  sidebar: "--sidebar",
  sidebarBorder: "--sidebar-border",
  sidebarForeground: "--sidebar-foreground",
  chart1: "--chart-1",
  chart2: "--chart-2",
  chart3: "--chart-3",
  chart4: "--chart-4",
  chart5: "--chart-5",
} as const;

export type CssVarToken = keyof typeof cssVarName;

/** `var(--token)` for use in `style={{ color: cssVar("primary") }}` or SVG attributes. */
export function cssVar(token: CssVarToken): string {
  return `var(${cssVarName[token]})`;
}
