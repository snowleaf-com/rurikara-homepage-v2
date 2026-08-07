import CleanCSS from 'clean-css';
import { readFileSync, writeFileSync } from 'node:fs';
import { minify } from 'terser';

function minifyCss(inputPath, outputPath, label) {
  const input = readFileSync(inputPath, 'utf8');
  const output = new CleanCSS({ level: 2 }).minify(input);
  if (output.errors.length) {
    console.error(output.errors);
    process.exit(1);
  }
  writeFileSync(outputPath, output.styles);
  console.log(
    `${label} ${Buffer.byteLength(input)} -> ${Buffer.byteLength(output.styles)} bytes`
  );
  return output.styles;
}

minifyCss(
  new URL('../styles/site.css', import.meta.url),
  new URL('../public/styles.css', import.meta.url),
  'styles.css'
);

const critical = minifyCss(
  new URL('../styles/critical.css', import.meta.url),
  new URL('../styles/critical.min.css', import.meta.url),
  'critical.css'
);

writeFileSync(
  new URL('../src/critical-css.ts', import.meta.url),
  `export const CRITICAL_CSS = ${JSON.stringify(critical)};\n`
);
console.log('wrote src/critical-css.ts');

const jsInput = readFileSync(new URL('../src/client/site.js', import.meta.url), 'utf8');
const jsOutput = await minify(jsInput, { compress: true, mangle: true });
if (!jsOutput.code) {
  console.error('JS minify failed');
  process.exit(1);
}
writeFileSync(new URL('../public/js/site.js', import.meta.url), jsOutput.code);
console.log(
  `site.js ${Buffer.byteLength(jsInput)} -> ${Buffer.byteLength(jsOutput.code)} bytes`
);
