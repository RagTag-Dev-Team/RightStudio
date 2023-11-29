// Docusaurus Imports
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import CodeBlock from '@theme/CodeBlock'

const ts = require('typescript')
const prettier = require('prettier/standalone')
const parserTypescript = require('prettier/parser-typescript')

const stripTypes = (origCode: string) => {
  const modifiedCode = origCode.replace(/\r/g, '').replace(/\n\n/g, '\n//--EMPTYLINE--\n')

  const result = ts.transpileModule(modifiedCode, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2018,
      module: ts.ModuleKind.ES2018,
      jsx: ts.JsxEmit.Preserve
    }
  })
  const code = result.outputText

  return code.replace(/\r/g, '').replace(/\n\s*\/\/--EMPTYLINE--\n/g, '\n\n')
}

const format = (code: string) =>
  prettier.format(code, {
    parser: 'typescript',
    plugins: [parserTypescript],
    arrowParens: 'avoid',
    bracketSpacing: true,
    htmlWhitespaceSensitivity: 'css',
    insertPragma: false,
    bracketSameLine: false,
    jsxSingleQuote: true,
    printWidth: 120,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    requirePragma: false,
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'none',
    useTabs: false
  })

const TsToJsCode = ({ children }: { children: string }) => {
  const tsCode = format(children)
  const jsCode = format(stripTypes(children))

  return tsCode === jsCode ? (
    <CodeBlock language='tsx'>{tsCode}</CodeBlock>
  ) : (
    <Tabs>
      <TabItem value='ts' label='TSX'>
        <CodeBlock language='tsx'>{tsCode}</CodeBlock>
      </TabItem>
      <TabItem value='js' label='JS'>
        <CodeBlock language='jsx'>{jsCode}</CodeBlock>
      </TabItem>
    </Tabs>
  )
}

export default TsToJsCode
