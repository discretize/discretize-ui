## Usage

```js
import { Effect } from 'gw2-ui-bulk' // or gw2-ui-components
```

## Properties

| Property        | Type     | Default | Required                     | Description                                          |
| --------------- | -------- | ------- | ---------------------------- | ---------------------------------------------------- |
| `type`          | `string` | -       | yes                          | The effect type                                      |
| `name`          | `string` | -       | yes                          | The effect name                                      |
| `displayName`   | `string` | -       | -                            | The effect display name (replaces `name`)            |
| `description`   | `string` | -       | yes, but `null` is permitted | The effect description                               |
| `tooltipProps`  | `object` | -       | -                            | The properties passed to the `<Tooltip/>` component  |
| `wikiLinkProps` | `object` | -       | -                            | The properties passed to the `<WikiLink/>` component |
| `errorProps`    | `object` | -       | -                            | The properties passed to the `<Error/>` component    |

The remaining props will be spread to the underlying `<IconWithText/>` component.
