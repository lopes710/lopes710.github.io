import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  output: "static",
  base: isProd ? "/lopes710.github.io/" : "/",
  integrations: [tailwind()],
});