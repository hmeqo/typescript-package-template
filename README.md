## ts package template

Please replace 'your-package-name' in project files with your package name.

## Install

```sh
git clone https://github.com/hmeqo/typescript-package-template.git your_package_name
cd your_package_name
rm -rf .git
pnpm install
```

## Usage

lint and fromat

```sh
# check
pnpm lint

# fix
pnpm lint:fix
```

test

```sh
pnpm test
```

build

```sh
pnpm build
```

publish

```sh
pnpm publish
```

## Custom Exports

The package exports the following modules:

- `./dist/index.js`: The main module
- `./dist/utils/index.js`: Utility functions
- `./dist/errors/index.js`: Error handling utilities

`package.json`

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "require": "./dist/index.cjs",
      "default": "./dist/index.js"
    },
    "./utils": {
      "types": "./dist/utils/index.d.ts",
      "require": "./dist/utils/index.cjs",
      "default": "./dist/utils/index.js"
    },
    "./errors": {
      "types": "./dist/errors/index.d.ts",
      "require": "./dist/errors/index.cjs",
      "default": "./dist/errors/index.js"
    }
  },
  "typesVersions": {
    "*": {
      "utils": [
        "./dist/utils/index.d.ts"
      ],
      "errors": [
        "./dist/errors/index.d.ts"
      ]
    }
  }
}
```
