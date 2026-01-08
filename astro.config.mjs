import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://santaslittlewieners.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
