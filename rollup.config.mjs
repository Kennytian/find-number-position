import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: ['src/generate.ts', 'src/main.ts'],
  output: { dir: 'dist', format: 'cjs' },
  plugins: [
    commonjs(),
    nodeResolve(),
    terser(),
    typescript({ module: 'esnext' }),
  ],
};
