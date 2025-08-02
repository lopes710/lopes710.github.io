import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

const baseProd = ""//"https://lopes710.github.io/"
const baseDev = "/"

export default defineConfig({
  output: "static",
  //base: base,
  base: isProd ? baseProd : baseDev,
  integrations: [tailwind()],
});