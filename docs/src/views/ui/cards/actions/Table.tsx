// React Imports
import React from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from '@core/styles/table.module.css'

const CardActionsTable = () => {
  return (
    <Card>
      <CardHeader title='Card Actions' />
      <CardContent>
        <div className='overflow-x-auto'>
          <table className={classnames('table', styles.table)}>
            <thead className={styles.thead}>
              <tr>
                <th>Action</th>
                <th>Icon</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td>Collapse</td>
                <td>
                  <i className='ri-arrow-up-s-line text-xl' />
                </td>
                <td>Collapse card content using collapse action</td>
              </tr>
              <tr>
                <td>Refresh Content</td>
                <td>
                  <i className='ri-refresh-line text-xl' />
                </td>
                <td>Refresh your card content using refresh action</td>
              </tr>
              <tr>
                <td>Remove Card</td>
                <td>
                  <i className='ri-close-line text-xl' />
                </td>
                <td>Remove card from page using remove card action</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardActionsTable
