import { consola } from 'consola'

const fs = require('fs').promises

export const modifyGenerateMenuFile = async () => {
  const filePath = 'src/components/GenerateMenu.tsx'

  let content = await fs.readFile(filePath, 'utf8')

  content = content.replace(/const href = menuItem\.href\?.*?menuItem\.href && menuItem\.href\n\s*/gs, '')

  content = content.replace(/href={href}/g, 'href={menuItem.href}')

  await fs.writeFile(filePath, content)
  consola.success('GenerateMenu.tsx file modified\n')
}
