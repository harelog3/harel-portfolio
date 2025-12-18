// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://harelolguin.dev",
    output: "static",
    integrations: [sitemap()],
    i18n: {
        locales: ["es", "en"],
        defaultLocale: "en",
        routing: {},
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
