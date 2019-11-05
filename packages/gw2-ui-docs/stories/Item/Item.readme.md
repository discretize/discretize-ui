## Usage

```js
import { Item } from 'gw2-ui';
```

## Properties

| Property         | Type      | Default | Required | Description                                                                |
| ---------------- | --------- | ------- | -------- | -------------------------------------------------------------------------- |
| `id`             | `number`  | -       | yes      | The item id                                                                |
| `disableIcon`    | `boolean` | `false` | -        | Disables the icon                                                          |
| `disableText`    | `boolean` | `false` | -        | Disables the text                                                          |
| `disableLink`    | `boolean` | `false` | -        | Disables the link                                                          |
| `disableTooltip` | `boolean` | `false` | -        | Disables the tooltip                                                       |
| `inline`         | `boolean` | `true`  | -        | Whether the component should be inlined (Always `true` if text is enabled) |

## Classes

| Name      | Description                           |
| --------- | ------------------------------------- |
| `root`    | Styles applied to the root element    |
| `icon`    | Styles applied to the icon element    |
| `text`    | Styles applied to the text element    |
| `link`    | Styles applied to the link element    |
| `tooltip` | Styles applied to the tooltip element |
