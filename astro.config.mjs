import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Cambia por el dominio real cuando lo compren
  site: 'https://www.telloortiz.pe',
  trailingSlash: 'never',
  integrations: [sitemap()],
});