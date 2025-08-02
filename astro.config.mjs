import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// const base = "/lopes710.github.io/"
const base = "/"

export default defineConfig({
  output: "static",
  base: base,
  integrations: [tailwind()],
});