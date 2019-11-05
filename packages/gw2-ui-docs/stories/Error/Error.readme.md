## Usage

```js
import { Error } from 'gw2-ui'; // or gw2-ui-components
```

## Properties

| Property         | Type                       | Default | Required | Description                                                                |
| ---------------- | -------------------------- | ------- | -------- | -------------------------------------------------------------------------- |
| `code`           | `string`                   | -       | -        | [TODO]                                                                     |
| `name`           | `string`                   | -       | -        | The error name                                                             |
| `message`        | `string`                   | -       | -        | The error message                                                          |
| `disableTooltip` | `string`                   | `false` | -        | Disables the tooltip                                                       |
| `disableIcon`    | `string`                   | `false` | -        | Disables the icon                                                          |
| `disableText`    | `string`                   | `false` | -        | Disables the text                                                          |
| `inline`         | `string`                   | `true`  | -        | Whether the component should be inlined (Always `true` if text is enabled) |
| `iconProps`      | `object`                   | -       | -        | The properties passed to the `<Icon/>` component                           |
| `tooltipProps`   | `object`                   | -       | -        | The properties passed to the `<Tooltip/>` component                        |
| `component`      | `string\|function\|object` | `span`  | -        | The component used for the root element                                    |

## Classes

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| `root`    | Styles applied to the root element           |
| `icon`    | Styles applied to the `<Icon/>` component    |
| `text`    | Styles applied to the text span              |
| `tooltip` | Styles applied to the `<Tooltip/>` component |
