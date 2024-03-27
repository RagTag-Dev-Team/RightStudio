// Third-party Imports
import classnames from 'classnames'

// Util Imports
import { commonLayoutClasses } from '@layouts/utils/layoutClasses'

const EmailPage = () => {
  return (
    <div className={classnames(commonLayoutClasses.contentHeightFixed, 'is-full overflow-hidden rounded shadow-md')}>
      {Array(100)
        .fill([0])
        .map((_, i) => (
          <div key={i}>Email Page</div>
        ))}
    </div>
  )
}

export default EmailPage
