## Usage

```js
import { IconWithText } from 'gw2-ui'; // or gw2-ui-components
```

## Properties

| Property       | Type                       | Default  | Required | Description                                                                |
| -------------- | -------------------------- | -------- | -------- | -------------------------------------------------------------------------- |
| `icon`         | `string`                   | -        | yes      | The icon `src`                                                             |
| `iconPosition` | `"left"\|"right"`          | `"left"` | -        | The icon position                                                          |
| `text`         | `node`                     | -        | yes      | The text                                                                   |
| `disableIcon`  | `boolean`                  | `false`  | -        | Disables the icon                                                          |
| `disableText`  | `boolean`                  | `false`  | -        | Disables the text                                                          |
| `inline`       | `boolean`                  | `true`   | -        | Whether the component should be inlined (Always `true` if text is enabled) |
| `iconProps`    | `object`                   | -        | -        | The properties passed to the `<Icon/>` component                           |
| `component`    | `string\|function\|object` | `span`   | -        | The component used for the root element                                    |

## Classes

| Name   | Description                          |
| ------ | ------------------------------------ |
| `root` | Styles applied to the root element   |
| `icon` | Styles applied to the icon component |
| `text` | Styles applied to the text span      |
