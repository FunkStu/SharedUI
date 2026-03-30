import { defineConfig } from "tsup";

export default defineConfig({
  tsconfig: "tsconfig.build.json",
  entry: {
    index: "src/index.ts",
    "data/index": "src/data/index.ts",
    "charts/index": "src/charts/index.ts",
    "theme/index": "src/theme/index.ts",
    "workflow/index": "src/workflow/index.ts",
    "ai/index": "src/ai/index.ts",
    "primitives/index": "src/primitives/index.ts",
    "lib/utils": "src/lib/utils.ts",
    "surface/index": "src/surface/index.ts",
    "composition/index": "src/composition/index.ts",
    "layout/index": "src/layout/index.ts"
  },
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  external: [
    "react",
    "react-dom",
    "@radix-ui/react-slot",
    "@radix-ui/react-tabs",
    "@radix-ui/react-select",
    "@radix-ui/react-checkbox",
    "@radix-ui/react-label",
    "lucide-react",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "recharts"
  ]
});
