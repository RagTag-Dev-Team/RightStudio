// React Imports
import React from 'react'

// MUI Imports
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

// Styles Imports
import styles from './styles.module.css'

const OutsideDivider = () => {
  return (
    <>
      <Typography>Basic Divider</Typography>
      <Divider />
      <Typography>Light Divider (below)</Typography>
      <Divider light />
      <div className='flex'>
        <Typography>Vertical</Typography>
        <Divider flexItem orientation='vertical' className='mlb-1 mis-4 mie-0' />
      </div>
      <Divider variant='middle'>Middle</Divider>
      <Divider variant='fullWidth'>Full Width</Divider>
      <Divider variant='inset'>Inset</Divider>
      <div className='p-5 flex'>
        <Divider flexItem className={styles.dividerHeight} variant='middle' orientation='vertical'>
          Middle
        </Divider>
        <Divider flexItem variant='fullWidth' orientation='vertical'>
          Full Width
        </Divider>
        <Divider flexItem variant='inset' orientation='vertical'>
          Inset
        </Divider>
      </div>
    </>
  )
}

export default OutsideDivider
