## Usage

```js
import { Item } from 'gw2-ui'
```

## Properties

| Property        | Type                                                           | Default | Required | Description                                                                                        |
| --------------- | -------------------------------------------------------------- | ------- | -------- | -------------------------------------------------------------------------------------------------- |
| `id`            | `number`                                                       | -       | -        | The item id                                                                                        |
| `count`         | `number`                                                       | -       | -        | The item count                                                                                     |
| `type`          | `string`                                                       | -       | -        | The custom item type                                                                               |
| `stat`          | `string`                                                       | -       | -        | The custom item stat                                                                               |
| `weight`        | `string`                                                       | -       | -        | The custom item armor weight                                                                       |
| `upgrades`      | `Array([upgradeId: number, count: number]\|upgradeId: number)` | -       | -        | The item upgrades. The array elements can be either an id or a tuple with id and count (for runes) |
| `tooltipProps`  | `object`                                                       | -       | -        | The properties passed to the `<Tooltip/>` component                                                |
| `wikiLinkProps` | `object`                                                       | -       | -        | The properties passed to the `<WikiLink/>` component                                               |

The remaining props will be spread to the underlying `<IconWithText/>` component.
