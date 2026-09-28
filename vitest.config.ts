import { fileURLToPath } from 'node:url'
import type { ViteUserConfig } from 'vitest/config'

const config: ViteUserConfig = {
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    include: ['tests/**/*.test.ts']
  }
}

export default config
