import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "node:url";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(tsx|ts)"],
  addons: ["@storybook/addon-essentials"],
  framework: { name: "@storybook/react-vite", options: {} },
  async viteFinal(cfg) {
    cfg.resolve = cfg.resolve ?? {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias ?? {}),
      "@": fileURLToPath(new URL("../src", import.meta.url)),
    };
    cfg.css = {
      ...(cfg.css ?? {}),
      postcss: fileURLToPath(new URL("./postcss.config.cjs", import.meta.url)),
    };
    return cfg;
  },
};
export default config;
