# gw2-ui

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

gw2-ui-new is a fork of [gw2-ui](https://github.com/ManuelHaag/gw2-ui) by Manuel Haag. We propose a number of changes to make working with the project more enjoyable:

- Typescript for all components
- No more monorepo
- CSS-modules instead of theme-ui
- gw2-api interaction with hooks by [Kulinda](https://kulinda.github.io/) - this includes caching, batching and language awareness
- Refactoring away most dependencies for a smaller, lightweight and more resilient library.

---

## Installation

Prerequisites:

- `node` >= 12.0.0
- `yarn` >= 1.22.0 ?

Install:

```
yarn add gw2-ui-new
```

import the styles on every page where you want to use the components:

```
import 'gw2-ui-new/dist/default_style.css';
import 'gw2-ui-new/dist/index.css';
```

Alternatively, you can overwrite the `default_style.css` file and import it in case you want to adjust the default theme.

In case you want to disable language selection based on the browser language, wrap pages with an `APILanguageProvider`.

## Developing

```sh
yarn
yarn dev
```

## Releasing

```sh
yarn run publish
```

## Contributing

Contributions are welcome. Ideally, you reach out to us via github issue or [discord](https://discretize.eu) to discuss your propositions before you commit time.

Make sure your commit messages follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/#summary).
