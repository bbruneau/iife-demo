import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import visualizer from 'rollup-plugin-visualizer';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import { uglify } from "rollup-plugin-uglify";

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    banner: '(function(AUTOMAT_OPTIONS) {',
    footer: '})(AUTOMAT_OPTIONS)',
  },
  plugins: [
    progress(),
    nodeResolve({
      browser: true,
    }),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.REACT_APP_ADD_TODO_TEXT': 'AUTOMAT_OPTIONS.ADD_TODO_TEXT',
    }),
    commonjs({
      include: [
        'node_modules/**',
      ],
      exclude: [
        'node_modules/process-es6/**',
      ],
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/react-is/index.js': ['isValidElementType'],
      },
    }),
    babel({
      babelrc: false,
      presets: [['es2015', { modules: false }], 'stage-1', 'react'],
      plugins: ['external-helpers'],
    }),
    visualizer(),
    filesize(),
    uglify()
  ],
};