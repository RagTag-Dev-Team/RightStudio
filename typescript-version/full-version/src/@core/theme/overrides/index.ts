// Override Imports
import Accordion from './accordion'
import Autocomplete from './autocomplete'
import avatar from './avatar'
import button from './button'
import paper from './paper'
import rating from './rating'
import tablePagination from './table-pagination'
import tabs from './tabs'
import typography from './typography'

const overrides = () => {
  return Object.assign({}, Accordion(), Autocomplete, avatar, button, paper, rating, tablePagination, tabs, typography)
}

export default overrides
