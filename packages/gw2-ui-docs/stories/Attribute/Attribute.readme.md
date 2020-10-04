## Usage

```js
import { Attribute } from 'gw2-ui' // or gw2-ui-components
```

## Properties

| Property        | Type     | Default | Required | Description                                          |
| --------------- | -------- | ------- | -------- | ---------------------------------------------------- |
| `name`          | `string` | -       | yes      | The attribute name                                   |
| `tooltipProps`  | `object` | -       | -        | The properties passed to the `<Tooltip/>` component  |
| `wikiLinkProps` | `object` | -       | -        | The properties passed to the `<WikiLink/>` component |
| `errorProps`    | `object` | -       | -        | The properties passed to the `<Error/>` component    |

The remaining props will be spread to the underlying `<IconWithText/>` component.
