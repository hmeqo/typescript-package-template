import type { UserConfig } from 'tsdown'

const config: UserConfig = {
  entry: ['src/index.ts', 'src/utils/index.ts', 'src/errors/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: 'hidden',
  publint: true,
  attw: true
}

export default config
