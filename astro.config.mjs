import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";

import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http:localhost:${SERVER_PORT}`;
const LIVE_URL = "https://alexi-ae.github.io";
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
if(isBuild){
  BASE_URL = LIVE_URL
}


// https://astro.build/config
export default defineConfig({
  server:{port:SERVER_PORT},
//  site: "http://localhost:4321/",
  site: BASE_URL,
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://gianmarco.xyz/sitemap-index.xml",
        "https://gianmarco.xyz/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
//  output: "server",

//  adapter: netlify({ edgeMiddleware: true }),
//  vite: {
//    assetsInclude: "**/*.riv",
//  },
  vite: {
    assetsInclude: "**/*.riv",
  },
});
