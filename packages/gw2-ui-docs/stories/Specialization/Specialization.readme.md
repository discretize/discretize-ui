## Usage

```js
import { Specialization } from 'gw2-ui';
```

## Properties

| Property        | Type     | Default | Required | Description                                          |
| --------------- | -------- | ------- | -------- | ---------------------------------------------------- |
| `id`            | `number` | -       | yes      | The specialization id                                |
| `wikiLinkProps` | `object` | -       | -        | The properties passed to the `<WikiLink/>` component |

The remaining props will be spread to the underlying `<IconWithText/>` component.
