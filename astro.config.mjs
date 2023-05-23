import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import purgecss from "astro-purgecss";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), compress({
    html: {
      // Avoid problems with proxies
      // https://stackoverflow.com/a/32684034
      maxLineLength: 500
    }
  }), purgecss(), react()],
  site: "https://kingswoodtahoe.org"
});