# TypeScript package template

Replace `your-package-name` in `package.json` and `README.md` with your package name.

## Getting started

```sh
git clone https://github.com/hmeqo/typescript-package-template.git your_package_name
cd your_package_name
rm -rf .git
pnpm install
```

## Scripts

| Command          | Description                                                                        |
| ---------------- | ---------------------------------------------------------------------------------- |
| `pnpm dev`       | Build in watch mode                                                                |
| `pnpm build`     | Bundle ESM + CJS + declarations into `dist/`, then run `publint` and `attw` checks |
| `pnpm typecheck` | Type-check without emitting                                                        |
| `pnpm test`      | Run tests once (`pnpm test:watch` for watch mode)                                  |
| `pnpm lint`      | ESLint + Prettier check                                                            |
| `pnpm lint:fix`  | ESLint + Prettier autofix                                                          |
| `pnpm check`     | typecheck + lint + test                                                            |

Publishing runs `pnpm build` through `prepublishOnly`:

```sh
pnpm publish
```

## Toolchain

- Build: [tsdown](https://tsdown.dev) (Rolldown) — bundles ESM/CJS, generates declarations,
  validates the package with `publint` and `attw`
- Test: [vitest](https://vitest.dev)
- Types: TypeScript with `strict` + `isolatedDeclarations`, so the exported API keeps explicit types
- Lint/format: ESLint (flat config, typescript-eslint) + Prettier
- Build-time Node: `^22.18 || ^24.11 || >=26` (tsdown's requirement); the published output
  targets `engines.node` (`>=22`)
- Source maps: emitted as `.map` next to the bundles but excluded from the published tarball
  (drop the `!dist/**/*.map` entry in `files` to ship them)

## Exports

| Subpath                    | Source                | Output                                    |
| -------------------------- | --------------------- | ----------------------------------------- |
| `your-package-name`        | `src/index.ts`        | `dist/index.{mjs,cjs,d.mts,d.cts}`        |
| `your-package-name/utils`  | `src/utils/index.ts`  | `dist/utils/index.{mjs,cjs,d.mts,d.cts}`  |
| `your-package-name/errors` | `src/errors/index.ts` | `dist/errors/index.{mjs,cjs,d.mts,d.cts}` |

Add a subpath export in two places: the `entry` array in `tsdown.config.ts`, then the matching
`exports` entry in `package.json`.
