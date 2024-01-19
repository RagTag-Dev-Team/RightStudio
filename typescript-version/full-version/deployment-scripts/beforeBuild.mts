import fs from 'node:fs/promises'
import path from 'node:path'

import { globbySync } from 'globby'

import { fullVersionDirPath } from './paths.mts'
import { updateFile } from './utils.mts'

const basePath = process.env.BASEPATH

const addBasePathInApi = async () => {
  if (!basePath) {
    console.log('No basePath found in `process.env.BASEPATH`, skipping...')
    process.exit(0)
  } else {
    console.log(`Adding basePath: ${basePath}`)
  }

  const files = globbySync(['src/app/api/**/*.ts'], {
    cwd: fullVersionDirPath,
    absolute: true,
    gitignore: false,
    dot: true
  })

  await Promise.all(
    files.map(async file => {
      let newContent = await fs.readFile(file, 'utf-8')

      newContent = newContent.replace(/\/images\//g, `${basePath}/images/`)

      await fs.writeFile(file, newContent)
    })
  )
}

const removeGoogleSingIn = () => {
  const loginFilePath = path.join(fullVersionDirPath, 'src/views/Login.tsx')

  updateFile(loginFilePath, content => {
    let newContent = content.replace(/<Divider.*?<\/Button>/gms, '')

    newContent = newContent.replace(/import Divider.*/g, '')

    return newContent
  })
}

const removeIconTest = async () => {
  const searchDataFilePath = path.join(fullVersionDirPath, 'src', 'data', 'searchData.ts')

  // Remove Icon test page from searchData.ts
  // ❗ Assuming icon test is after id: '41'
  updateFile(searchDataFilePath, content => {
    return content.replace(/(?<=id: '41'.*){.*icons-test.*?},.*?(?={)/gms, '')
  })

  const filesToRemove = [
    path.join(fullVersionDirPath, 'src', 'views', 'icons-test'),
    path.join(fullVersionDirPath, 'src', 'app', 'api', 'icons-test'),
    path.join(fullVersionDirPath, 'src', 'app', '[lang]', '(dashboard)', 'icons-test')
  ]

  await Promise.all(filesToRemove.map(async path => fs.rm(path, { recursive: true, force: true })))

  const manualMenuFilePaths = [
    path.join(fullVersionDirPath, 'src', 'components', 'layout', 'horizontal', 'HorizontalMenu.tsx'),
    path.join(fullVersionDirPath, 'src', 'components', 'layout', 'vertical', 'VerticalMenu.tsx')
  ]

  await Promise.all(
    manualMenuFilePaths.map(async path => {
      updateFile(path, content => {
        return content.replace(/<MenuItem.*[\n\s]+Icons Test[\n\s]+<\/MenuItem>[\n\s]+/gm, '')
      })
    })
  )

  const navLinksFiles = [
    path.join(fullVersionDirPath, 'src', 'data', 'navigation', 'horizontalMenuData.tsx'),
    path.join(fullVersionDirPath, 'src', 'data', 'navigation', 'verticalMenuData.tsx')
  ]

  await Promise.all(
    navLinksFiles.map(async path => {
      updateFile(path, content => {
        return content.replace(/[\n\s]+{[\s\n]+label: 'Icons Test',.*?}/gms, '')
      })
    })
  )
}

const updateNextConfig = () => {
  const nextConfigFilePath = path.join(fullVersionDirPath, 'next.config.js')

  const configData = `async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://demos.themeselection.com" },
          // { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },`

  updateFile(nextConfigFilePath, content => {
    return content.replace(/( +)(reactStrictMode: false)/gms, `$1$2,\n$1${configData}`)
  })
}

await Promise.all([await removeIconTest(), await addBasePathInApi()])

removeGoogleSingIn()
updateNextConfig()
