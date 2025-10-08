import esbuild from 'esbuild';
import { readdir, writeFile } from 'fs/promises';
import { join } from 'path';

async function build() {
  try {
    console.log('🏗️  Building API...');

    await esbuild.build({
      entryPoints: ['src/server.js'],
      bundle: true,
      platform: 'node',
      target: 'node18',
      format: 'esm',
      outdir: 'dist',
      external: ['express', 'dotenv', 'cors', 'helmet', 'compression', 'morgan', 'express-rate-limit', 'string-similarity'],
      minify: true,
      sourcemap: true,
      logLevel: 'info',
    });

    // Create package.json for dist
    const pkg = {
      type: 'module',
      dependencies: {
        express: '^4.19.2',
        cors: '^2.8.5',
        helmet: '^7.1.0',
        compression: '^1.7.4',
        dotenv: '^16.4.5',
        'string-similarity': '^4.0.4',
        'express-rate-limit': '^7.2.0',
        morgan: '^1.10.0',
      },
    };

    await writeFile(
      'dist/package.json',
      JSON.stringify(pkg, null, 2)
    );

    console.log('✅ Build complete!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
