## Usage

```js
import { Trait } from 'gw2-ui';
```

## Properties

| Property        | Type      | Default | Required | Description                                          |
| --------------- | --------- | ------- | -------- | ---------------------------------------------------- |
| `id`            | `number`  | -       | yes      | The trait id                                         |
| `inactive`      | `boolean` | `false` | -        | Whether the trait is inactive                        |
| `tooltipProps`  | `object`  | -       | -        | The properties passed to the `<Tooltip/>` component  |
| `wikiLinkProps` | `object`  | -       | -        | The properties passed to the `<WikiLink/>` component |

The remaining props will be spread to the underlying `<IconWithText/>` component.
