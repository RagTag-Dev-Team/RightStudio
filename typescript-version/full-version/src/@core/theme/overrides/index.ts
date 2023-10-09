// Override Imports
import autocomplete from './autocomplete'
import avatar from './avatar'
import button from './button'
import tabs from './tabs'
import typography from './typography'

const Overrides = () => {
  return Object.assign({}, autocomplete, avatar, button, tabs, typography)
}

export default Overrides
