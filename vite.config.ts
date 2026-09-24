import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// @ts-expect-error vite config
import coreConfig from '../password-broker-front-core/vite.config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...coreConfig.resolve.alias,
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  envPrefix: 'VITE_',
});
