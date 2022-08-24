const fs = require('fs');

const buildDirPath = './build';

if (fs.existsSync(buildDirPath)) {
  fs.rmSync(buildDirPath, { recursive: true });
}

fs.mkdirSync(buildDirPath);

const staticFilesPath = './public/';

fs.cpSync(staticFilesPath, buildDirPath, { recursive: true });

const cssModulesPlugin = require('esbuild-css-modules-plugin');
const svgrPlugin = require('esbuild-plugin-svgr');

require('esbuild').build({
  entryPoints: { bundle: 'src/index.tsx' },
  bundle: true,
  target: 'esnext',
  plugins: [cssModulesPlugin(), svgrPlugin()],
  outdir: './build',
  loader: {
    '.ttf': 'file',
  },
});
