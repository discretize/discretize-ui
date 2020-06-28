## Usage

```js
import { TraitLine } from 'gw2-ui';
```

## Properties

| Property   | Type            | Default | Required | Description                                                                   |
| ---------- | --------------- | ------- | -------- | ----------------------------------------------------------------------------- |
| `id`       | `number`        | -       | yes      | The trait line id                                                             |
| `selected` | `Array(number)` | -       | -        | The selected trait ids                                                        |
| `onSelect` | `function`      | -       | -        | Will be called `onClick` of a major trait with `{ tier: number, id: number }` |

The remaining props will be spread to the root element.
