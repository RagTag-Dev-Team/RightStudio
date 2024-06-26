// Component Imports
import EmailWrapper from '@views/apps/email'

const EmailFolderPage = ({ params }) => {
  return <EmailWrapper folder={params.folder} />
}

export default EmailFolderPage
