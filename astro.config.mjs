import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aayushagrawal9.github.io',
  base: '/gdg-indore-aipl',
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { host: '127.0.0.1', port: 4321 },
});
