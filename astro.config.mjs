// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static", // Required for GitHub Pages
  integrations: [tailwind()], // Use official Astro Tailwind integration
});