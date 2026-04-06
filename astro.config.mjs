import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { host: '127.0.0.1', port: 4321 },
});
