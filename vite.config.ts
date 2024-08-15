import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      vueDevTools(),
    ],
      resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
    server: {
      proxy: {
        [env.VITE_API_PREFIX]: {
          target: env.VITE_PROXY_ENDPOINT,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_API_PREFIX}`), ''),
        }
      }
    }
  }
})
