// Third Party Imports
import type { Action } from 'kbar'

// Type Defs
type SearchData = Action & {
  url: string
}

// Data
const data: SearchData[] = [
  {
    id: 'email',
    name: 'E-mail',
    shortcut: ['e'],
    keywords: 'email',
    url: 'email'
  },
  {
    id: 'chat',
    name: 'Chat',
    shortcut: ['c'],
    keywords: 'chat',
    url: 'chat'
  }
]

export default data
