# gw2-ui

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

gw2-ui-new is a fork of [gw2-ui](https://github.com/ManuelHaag/gw2-ui) by Manuel Haag. We implemented a number of changes to make working with the project more enjoyable:

- Typescript for all components
- CSS-modules instead of theme-ui
- gw2-api interaction with hooks by [Kulinda](https://kulinda.github.io/) - this includes caching, batching and language awareness
- Refactoring away most dependencies for a smaller, lightweight and more resilient library.

---

## Installation

Prerequisites:

- `node` >= 12.0.0
- `yarn` >= 1.22.0 ?

Be sure your project is using a single React version. Use React 17 or force React 18 using a resolutions field in your package.json.

Install:

```
yarn add @discretize/gw2-ui-new
yarn add @discretize/typeface-menomonia
```

import the styles and typeface on every page where you want to use the components:

```
import '@discretize/gw2-ui-new/dist/default_style.css';
import '@discretize/gw2-ui-new/dist/index.css';
import '@discretize/typeface-menomonia';
```

Alternatively, you can overwrite the `default_style.css` file and import it in case you want to adjust the default theme.

In case you want to disable language selection based on the browser language, wrap pages with an `APILanguageProvider`.

## Developing

```sh
pnpm install
pnpm dev
```

## Releasing

```sh
pnpm run publish
```

## Contributing

Contributions are welcome. Ideally, you reach out to us via github issue or [discord](https://discretize.eu) to discuss your propositions before you commit time.

Make sure your commit messages follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/#summary).
