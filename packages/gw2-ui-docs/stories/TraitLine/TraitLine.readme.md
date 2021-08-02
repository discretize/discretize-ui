## Usage

```js
import { TraitLine } from 'gw2-ui-bulk'
```

## Properties

| Property          | Type            | Default | Required | Mode         | Description                                                                                                           |
| ----------------- | --------------- | ------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------- |
| `id`              | `number`        | -       | yes      | -            | The trait line id                                                                                                     |
| `defaultSelected` | `Array(number)` | -       | -        | Uncontrolled | The default selected trait ids                                                                                        |
| `selectable`      | `boolean`       | `true`  | -        | Uncontrolled | Whether the traits are selectable                                                                                     |
| `resettable`      | `boolean`       | `true`  | -        | Uncontrolled |  Whether the reset button should be enabled if selected traits ids are not equal to default selected trait ids        |
| `selected`        | `Array(number)` | -       | -        | Controlled   | The selected trait ids                                                                                                |
| `onSelect`        | `function`      | -       | -        | Controlled   | Will be called `onClick` of a major trait with `{ tier: number, id: number, index: number }`. Enables controlled mode |
| `onReset`         | `function`      | -       | -        | Controlled   | Will be called `onClick` of the reset button                                                                          |

The remaining props will be spread to the root element.
