import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
// import { SITE } from './src/config.mjs';
import react from "@astrojs/react";
import compressor from "astro-compressor";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => SITE.googleAnalyticsId ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];


// https://astro.build/config
// export default defineConfig({
//   // site: SITE.origin,
//   // base: SITE.basePathname,
//   trailingSlash: SITE.trailingSlash ? 'always' : 'never',
//   output: 'static',
//   markdown: {
//     remarkPlugins: [readingTimeRemarkPlugin]
//   },
//   build: {
//     format: 'directory'
//   },
//   integrations: [tailwind({
//     config: {
//       applyBaseStyles: false
//     }
//   }), sitemap(), image({
//     serviceEntryPoint: '@astrojs/image/sharp'
//   }), mdx(), ...whenExternalScripts(() => partytown({
//     config: {
//       forward: ['dataLayer.push']
//     }
//   })), compress({
//     css: true,
//     html: {
//       removeAttributeQuotes: false
//     },
//     img: true,
//     js: true,
//     svg: true,
//     logger: 1
//   }), react(), compressor({ gzip: false, brotli: true })],
//   vite: {
//     resolve: {
//       alias: {
//         '~': path.resolve(__dirname, './src')
//       }
//     }
//   }
// });

export default defineConfig({
  site: 'https://www.queteksolutions.com',
  integrations: [tailwind(), image(), mdx(), sitemap(),compress({
        css: true,
        html: {
          removeAttributeQuotes: false
        },
        img: true,
        js: true,
        svg: true,
        logger: 1
  }),
    react(), compressor({ gzip: false, brotli: true })
  ],
  trailingSlash: 'never',
    vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});