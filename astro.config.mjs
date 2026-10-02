import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mohamedhammad.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
