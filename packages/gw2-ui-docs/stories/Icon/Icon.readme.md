## Usage

```js
import { Icon } from 'gw2-ui'; // or gw2-ui-components
```

## Properties

| Property      | Type                       | Default | Required | Description                                           |
| ------------- | -------------------------- | ------- | -------- | ----------------------------------------------------- |
| `src`         | `string`                   | -       | yes      | The icon `src`                                        |
| `placeholder` | `string`                   | -       | -        | [TODO]                                                |
| `applyCount`  | `number`                   | -       | -        | The apply count                                       |
| `zoom`        | `number`                   | -       | -        | The zoom factor                                       |
| `inline`      | `boolean`                  | true    | -        | Whether the icon should be inlined                    |
| `gutterRight` | `boolean`                  | false   | -        | Whether the icon should have some margin to the right |
| `gutterLeft`  | `boolean`                  | false   | -        | Whether the icon should have some margin to the left  |
| `hexagon`     | `boolean`                  | false   | -        | Whether the icon should have a hexagon clip-path      |
| `inactive`    | `boolean`                  | false   | -        | Whether the icon should be inactive                   |
| `component`   | `string\|function\|object` | `span`  | -        | The component used for the root element               |

## Classes

| Name          | Description                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| `root`        | Styles applied to the root element                                              |
| `applyCount`  | Styles applied to the apply count span                                          |
| `noZoom`      | Styles applied to the root element if `zoom` is not defined or `hexagon={true}` |
| `inline`      | Styles applied to the root element if `inline={true}`                           |
| `gutterRight` | Styles applied to the root element if `gutterRight={true}`                      |
| `gutterLeft`  | Styles applied to the root element if `gutterLeft={true}`                       |
| `hexagon`     | Styles applied to the root element if `hexagon={true}`                          |
| `inactive`    | Styles applied to the root element if `inactive={true}`                         |
