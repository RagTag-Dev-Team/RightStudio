import fs from 'fs'

export type UpdateFileModifier = (data: string) => string

/**
 * This is helper function to read the file content by given path.
 * 2nd argument is callback function to modify the content of file. Return modified data as string to write it back to given path.
 * @param path File path to read from & write to
 * @param modifier Function that modifies the file data
 */
export const updateFile = (path: string, modifier: UpdateFileModifier) => {
  fs.writeFileSync(path, modifier(fs.readFileSync(path, { encoding: 'utf-8' })), { encoding: 'utf-8' })
}
