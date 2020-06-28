## Usage

```js
import { Icon } from 'gw2-ui'; // or gw2-ui-components
```

## Properties

| Property       | Type          | Default | Required | Description                                                                                    |
| -------------- | ------------- | ------- | -------- | ---------------------------------------------------------------------------------------------- |
| `src`          | `string`      | -       | -        | The icon `src`                                                                                 |
| `placeholder`  | `string`      | -       | -        | Used to lookup a placeholder icon if `src` is not provided (currently supported: `404`, `500`) |
| `applyCount`   | `number`      | -       | -        | The apply count                                                                                |
| `zoom`         | `number`      | -       | -        | The zoom factor                                                                                |
| `inline`       | `boolean`     | true    | -        | Whether the icon should be inlined                                                             |
| `gutterRight`  | `boolean`     | false   | -        | Whether the icon should have some margin to the right                                          |
| `gutterLeft`   | `boolean`     | false   | -        | Whether the icon should have some margin to the left                                           |
| `hexagon`      | `boolean`     | false   | -        | Whether the icon should have a hexagon clip-path                                               |
| `inactive`     | `boolean`     | false   | -        | Whether the icon should be inactive                                                            |
| `spinnerProps` | `object`      | -       | -        | The properties passed to the `<Spinner/>` component if `loading` is `true`                     |
| `component`    | `elementType` | `span`  | -        | The component used for the root element                                                        |

The remaining props will be spread to the root element.
