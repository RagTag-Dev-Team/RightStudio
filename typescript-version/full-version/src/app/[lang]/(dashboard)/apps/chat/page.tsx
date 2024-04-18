// Third-party Imports
import classnames from 'classnames'

// Component Imports
import ChatWrapper from '@views/apps/chat'

// Util Imports
import { commonLayoutClasses } from '@layouts/utils/layoutClasses'

const ChatApp = () => {
  return (
    <div
      className={classnames(
        commonLayoutClasses.contentHeightFixed,
        'flex is-full overflow-hidden rounded shadow-md relative'
      )}
    >
      <ChatWrapper />
    </div>
  )
}

export default ChatApp
