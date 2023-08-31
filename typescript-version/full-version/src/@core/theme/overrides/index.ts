// Override Imports
import avatar from './avatar'
import button from './button'
import tabs from './tabs'

const Overrides = () => {
  return Object.assign(avatar, button, tabs)
}

export default Overrides
