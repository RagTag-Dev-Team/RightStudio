import fs from 'node:fs/promises'

import { globbySync } from 'globby'

import { fullVersionDirPath } from './paths.mts';

const basePath = process.env.BASEPATH

if (!basePath) {
  console.log('No basePath found in `process.env.BASEPATH`, skipping...')
  process.exit(0)
} else {
  console.log(`Adding basePath: ${basePath}`)
}

const files = globbySync(
  ['.next/**/*.js', '.next/**/*.css', '!.next/server/app/api'],
  {
    cwd: fullVersionDirPath,
    absolute: true,
    gitignore: false,
    dot: true,
  }
)

await Promise.all(files.map(async (file) => {
  let newContent = await fs.readFile(file, 'utf-8')

  if (file.endsWith('.js')) {
    newContent = newContent.replace(/\/images\//g, `${basePath}/images/`)
  } else if (file.endsWith('.css')) {
    newContent = newContent.replace(/\(\/images\//g, `(${basePath}/images/`)
  } else {
    throw new Error(`Unknown file type: ${file}`)
  }

  await fs.writeFile(file, newContent)
}))
