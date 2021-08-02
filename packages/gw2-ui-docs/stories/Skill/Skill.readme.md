## Usage

```js
import { Skill } from 'gw2-ui-bulk'
```

## Properties

| Property        | Type     | Default | Required | Description                                          |
| --------------- | -------- | ------- | -------- | ---------------------------------------------------- |
| `id`            | `number` | -       | yes      | The skill id                                         |
| `tooltipProps`  | `object` | -       | -        | The properties passed to the `<Tooltip/>` component  |
| `wikiLinkProps` | `object` | -       | -        | The properties passed to the `<WikiLink/>` component |

The remaining props will be spread to the underlying `<IconWithText/>` component.
