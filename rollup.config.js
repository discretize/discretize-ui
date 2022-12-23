import globals from './globals/rollup.config';
import gw2ui from './gw2-ui/rollup.config';
import components from './react-discretize-components/rollup.config';
import remark from './remark-mdx-gw2ui/rollup.config';

export default [
  ...globals,
  ...gw2ui,
  ...components,
  ...remark,
]
