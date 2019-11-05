## Usage

```js
import { WikiLink } from 'gw2-ui'; // or gw2-ui-components
```

## Properties

| Property    | Type                       | Default | Required | Description                             |
| ----------- | -------------------------- | ------- | -------- | --------------------------------------- |
| `to`        | `string`                   | -       | yes      | The wiki page title                     |
| `color`     | `"inherit"`                | -       | -        | The color class                         |
| `lang`      | `"en"`                     | `"en"`  | -        | The wiki language                       |
| `component` | `string\|function\|object` | `a`     | -        | The component used for the root element |

## Classes

| Name           | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `root`         | Styles applied to the root element                           |
| `colorDefault` | Styles applied to the root element if `color` is not defined |
| `colorInherit` | Styles applied to the root element if `color="inherit"`      |
