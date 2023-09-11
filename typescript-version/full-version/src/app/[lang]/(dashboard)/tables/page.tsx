// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component imports
import BasicDataTables from '@views/tables/BasicDataTables'
import EditableDataTables from '@views/tables/EditableDataTables'
import ColumnVisibility from '@views/tables/ColumnVisibility'
import RowSelection from '@views/tables/RowSelection'
import KitchenSink from '@views/tables/KitchenSink'

// Style Imports
import styles from '@/styles/link.module.css'

const Tables = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h5'>React Table</Typography>
        <Typography variant='body2'>
          <code>@tanstack/react-table</code> is a third-party library. Please refer to its{' '}
          <Link href='https://tanstack.com/table/' target='_blank' rel='noopener noreferrer' className={styles.link}>
            official documentation
          </Link>{' '}
          for more details.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <BasicDataTables />
      </Grid>
      <Grid item xs={12}>
        <EditableDataTables />
      </Grid>
      <Grid item xs={12}>
        <ColumnVisibility />
      </Grid>
      <Grid item xs={12}>
        <RowSelection />
      </Grid>
      <Grid item xs={12}>
        <KitchenSink />
      </Grid>
    </Grid>
  )
}

export default Tables
