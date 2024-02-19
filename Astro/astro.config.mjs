import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: "c0ayx3bq",
      dataset: "production",
      useCdn: false,
      apiVersion: "2023-02-08",
    }),
  ],
});