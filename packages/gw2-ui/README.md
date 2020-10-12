# gw2-ui

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> React components and API wrapper for Guild Wars 2

## Prerequisites

- `node` >= 8.11.0
- `yarn` >= 1.2.1

## Developing

```sh
yarn bootstrap
yarn develop
```

## Releasing

```sh
yarn run publish
```

_Note:_ The `rebuild` script can't be called `prepare` currently ([see the related lerna issue](https://github.com/lerna/lerna/issues/1944)).

## Contributing

Make sure your commit messages follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#summary).

# Notes

- https://github.com/webpack/webpack/issues/10227
- Only one `react` version should be present - otherwise weird things happen to hooks and the redux store
