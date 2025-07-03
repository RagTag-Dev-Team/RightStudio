// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import {
  ICertificateArg,
  ContentTypes,
  ContentFormat,
  ICertificate,
  IResults
} from '@mentaport/certificates';

import AddCard from '@views/apps/invoice/add/AddCard'
import AddActions from '@views/apps/invoice/add/AddActions'

// Data Imports
import { _getMentaportSDK} from  '@/libs/mentaport/actions/mentaport/mentaport-sdk'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/invoice` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getInvoiceData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/invoice`)

  if (!res.ok) {
    throw new Error('Failed to fetch invoice data')
  }

  return res.json()
}
 */
const CreateCertificate = async () => {
  // Vars
  const getFileTypeStr = (fileType: string) => {
    const types = fileType.split('/');
    let type = ""
    let format: ContentFormat = ContentFormat[types[1] as keyof typeof ContentFormat];

    if(!format && types[1] == 'jpeg')
      format = ContentFormat.jpg;

    for (const key in ContentTypes) {
      if (ContentTypes[key as keyof typeof ContentTypes].toLowerCase() === types[0]) {
        type =  ContentTypes[key as keyof typeof ContentTypes];
      }
    }

    return {type, format};
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={9}>

        <AddCard invoiceData={data} />

      </Grid>
      <Grid item xs={12} md={3}>
        <AddActions />
      </Grid>
    </Grid>
  )
}

export default CreateCertificate
