react-discretize-components contains shared react components for all discretize projects. For example usage please refer to the gear-optimizer repository. At the moment this library will only work in gatsby projects.

## Storybook

An interactive [storybook.js](https://storybook.js.org/) workshop demonstrating all of the exported components is available at [marcustyphoon.github.io/discretize-ui/react-discretize-components](https://marcustyphoon.github.io/discretize-ui/react-discretize-components).

## Installation

```
yarn add @discretize/react-discretize-components
```

Dependencies in the implementing application:

- react
- gw2-ui-new

## Included components

List of react components:

- Character
  - Armor
  - Attributes
  - BackAndTrinkets
  - Consumables
  - Legends
  - Skills
  - Weapons
- TextDivider
- NoSelection

List of helper functions:

- iconSizes mapping: (string) => integer
- firstUppercase
