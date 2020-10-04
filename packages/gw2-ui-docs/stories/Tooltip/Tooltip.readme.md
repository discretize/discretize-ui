## Usage

```js
import { Tooltip } from 'gw2-ui' // or gw2-ui-components
```

## Properties

| Property         | Type               | Default | Required | Description                                                                                                                                                                  |
| ---------------- | ------------------ | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content`        | `node`             | -       | -        | The tooltip content. Will be wrapped with a `<TooltipContainer/>` styled similar to the GW2 tooltips                                                                         |
| `render`         | `function\|node`   | -       | -        | The custom tooltip render function or node                                                                                                                                   |
| `children`       | `forwardRef(node)` | -       | yes      | The tooltip trigger. Make sure to use `React.forwardRef` with component children. See [Tippy.js for React Note](https://github.com/atomiks/tippyjs-react#component-children) |
| `containerProps` | `object`           | -       | -        | The properties passed to the `<TooltipContainer/>` component if `content` is provided                                                                                        |
| `wrapperProps`   | `object`           | -       | -        | The properties passed to the tooltip wrapper element                                                                                                                         |

The remaining props will be spread to the underlying `<Tippy/>` component.
