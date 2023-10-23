// Override Imports
import Autocomplete from './autocomplete'
import avatar from './avatar'
import button from './button'
import tablePagination from './table-pagination'
import tabs from './tabs'
import typography from './typography'

const overrides = () => {
  return Object.assign({}, Autocomplete, avatar, button, tablePagination, tabs, typography)
}

export default overrides
