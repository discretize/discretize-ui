import peerDepsExternal from "rollup-plugin-peer-deps-external";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    sourcemap: true,
    name: "discretizeComponents",
  },
  external: [
    "@material-ui/core",
    "gw2-ui-bulk",
    "gatsby-plugin-image",
    "gw2-ui-components-bulk",
    "classnames",
    "react",
  ],
  plugins: [
    // peerDepsExternal(),  // declares peer deps as external for rollup
    resolve(),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    commonjs(),

    ...(process.env.BUILD !== "production"
      ? [
          serve({
            open: true,
            verbose: true,
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
          }),
          livereload({ watch: "dist" }),
        ]
      : []),
  ],
};
