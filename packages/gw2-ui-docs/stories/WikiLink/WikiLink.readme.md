## Usage

```js
import { WikiLink } from 'gw2-ui' // or gw2-ui-components
```

## Properties

| Property    | Type          | Default | Required | Description                             |
| ----------- | ------------- | ------- | -------- | --------------------------------------- |
| `to`        | `string`      | -       | yes      | The wiki page title                     |
| `lang`      | `string`      | `'en'`  | -        | The wiki language                       |
| `component` | `elementType` | `'a'`   | -        | The component used for the root element |

The remaining props will be spread to the root element.
