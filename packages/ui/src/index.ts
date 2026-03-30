/**
 * Portable root barrel for shared modules.
 * For stable consumption across apps, prefer subpath imports
 * (for example `@audere-apps/ui/primitives`, `@audere-apps/ui/data`).
 */

export * from "./data/index";
export * from "./charts/index";
export * from "./theme/index";
export * from "./workflow/index";
export * from "./ai/index";

export * from "./primitives/index";
export * from "./surface/index";
export * from "./composition/index";

export * from "./layout/index";
