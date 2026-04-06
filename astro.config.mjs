import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aipl.gdgindore.in',
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { host: '127.0.0.1', port: 4321 },
});
