// Override Imports
import Accordion from './accordion'
import Autocomplete from './autocomplete'
import avatar from './avatar'
import button from './button'
import paper from './paper'
import Rating from './rating'
import tablePagination from './table-pagination'
import tabs from './tabs'
import timeline from './timeline'
import typography from './typography'

const overrides = () => {
  return Object.assign({}, Accordion(), Autocomplete, avatar, button, paper, Rating, tablePagination, tabs, timeline, typography)
}

export default overrides
