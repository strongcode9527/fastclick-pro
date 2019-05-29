import babel from 'rollup-plugin-babel'
const isCjs = process.env.ROLLUP_FORMAT === 'cjs';

export default {
  input: 'src/fastclick.js',
  output: {
    file: `./dist/${isCjs ? 'cjs.js' : 'es.js'}`,
    format: isCjs ? 'cjs' : 'esm'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};