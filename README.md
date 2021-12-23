react-discretize-components contains shared react components for all discretize projects. For example usage please refer to the gear-optimizer repository. At the moment this library will only work in gatsby projects.

## Installation

```
yarn add react-discretize-components
```

Dependencies in the implementing application:

- react
- gatsby-plugin-image
- gw2-ui-bulk
- material-ui v4

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
