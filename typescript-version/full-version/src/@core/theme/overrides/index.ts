// Type Imports
import type { Skin } from '@core/types'

// Override Imports
import Accordion from './accordion'
import Alerts from './alert'
import Autocomplete from './autocomplete'
import avatar from './avatar'
import backdrop from './backdrop'
import breadcrumbs from './breadcrumbs'
import button from './button'
import buttonGroup from './button-group'
import card from './card'
import chip from './chip'
import dialog from './dialog'
import fab from './fab'
import iconButton from './icon-button'
import list from './list'
import menu from './menu'
import paper from './paper'
import progress from './progress'
import rating from './rating'
import slider from './slider'
import tablePagination from './table-pagination'
import tabs from './tabs'
import tooltip from './tooltip'
import typography from './typography'

const overrides = (skin: Skin) => {
  return Object.assign(
    {},
    Accordion(),
    Alerts,
    Autocomplete,
    avatar,
    backdrop,
    breadcrumbs,
    button,
    buttonGroup,
    card(skin),
    chip,
    dialog(skin),
    fab,
    iconButton,
    list,
    menu(skin),
    paper,
    progress,
    rating,
    slider,
    tablePagination,
    tabs,
    tooltip,
    typography
  )
}

export default overrides
