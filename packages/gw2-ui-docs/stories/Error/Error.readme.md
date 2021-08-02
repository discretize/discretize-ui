## Usage

```js
import { Error } from 'gw2-ui-bulk' // or gw2-ui-components
```

## Properties

| Property       | Type     | Default | Required | Description                                                                                |
| -------------- | -------- | ------- | -------- | ------------------------------------------------------------------------------------------ |
| `code`         | `string` | -       | -        | The error code. Also used to lookup a placeholder icon (currently supported: `404`, `500`) |
| `name`         | `string` | -       | -        | The error name                                                                             |
| `message`      | `string` | -       | -        | The error message                                                                          |
| `tooltipProps` | `object` | -       | -        | The properties passed to the `<Tooltip/>` component                                        |

The remaining props will be spread to the underlying `<IconWithText/>` component.
