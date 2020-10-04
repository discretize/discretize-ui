## Usage

```js
import { IconWithText } from 'gw2-ui' // or gw2-ui-components
```

## Properties

| Property       | Type              | Default  | Required | Description                                                                 |
| -------------- | ----------------- | -------- | -------- | --------------------------------------------------------------------------- |
| `icon`         | `string\|node`    | -        | yes      | The icon `src` or a component                                               |
| `iconPosition` | `'left'\|'right'` | `'left'` | -        | The icon position                                                           |
| `text`         | `node`            | -        | yes      | The text                                                                    |
| `disableIcon`  | `boolean`         | `false`  | -        | Disables the icon                                                           |
| `disableText`  | `boolean`         | `false`  | -        | Disables the text                                                           |
| `inline`       | `boolean`         | `true`   | -        | Whether the component should be inlined (Always `true` if text is enabled)  |
| `iconProps`    | `object`          | -        | -        | The properties passed to the `<Icon/>` component                            |
| `textProps`    | `object`          | -        | -        | The properties passed to the text element                                   |
| `textProps`    | `object`          | -        | -        | The properties passed to the `<Progress/>` component if `loading` is `true` |
| `component`    | `elementType`     | `'span'` | -        | The component used for the root element                                     |

The remaining props will be spread to the root element.
