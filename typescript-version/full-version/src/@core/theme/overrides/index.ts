// Override Imports
import Autocomplete from './autocomplete'
import avatar from './avatar'
import button from './button'
import tabs from './tabs'
import typography from './typography'

const overrides = () => {
  return Object.assign({}, Autocomplete, avatar, button, tabs, typography)
}

export default overrides
