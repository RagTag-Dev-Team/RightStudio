// Override Imports
import Avatar from './avatar'
import Tabs from './tabs'

const Overrides = () => {
  const avatar = Avatar()
  const tabs = Tabs()

  return Object.assign(avatar, tabs)
}

export default Overrides
