import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-import-css";
import { terser } from "rollup-plugin-terser";
import pollyfill from "rollup-plugin-polyfill-node";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      typescript({ tsconfig: "./tsconfig.json" }),
      resolve(),
      postcss(),
      terser(),
      pollyfill(),
    ],
  },
];
