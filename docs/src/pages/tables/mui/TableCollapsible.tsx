// React Imports
import { useState, Fragment } from 'react'

// MUI Imports
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'

const createData = (name: string, calories: number, fat: number, carbs: number, protein: number, price: number) => {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1
      }
    ]
  }
}

const Row = (props: { row: ReturnType<typeof createData> }) => {
  // Props
  const { row } = props

  // States
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Fragment>
      <TableRow >
        <TableCell className='border-be-0'>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            <i className={open ? 'tabler-chevron-up' : 'tabler-chevron-down'} />
          </IconButton>
        </TableCell>
        <TableCell className='border-be-0' component='th' scope='row'>{row.name}</TableCell>
        <TableCell className='border-be-0' align='right'>{row.calories}</TableCell>
        <TableCell className='border-be-0' align='right'>{row.fat}</TableCell>
        <TableCell className='border-be-0' align='right'>{row.carbs}</TableCell>
        <TableCell className='border-be-0' align='right'>{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} className='plb-0'>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <div className='m-2'>
              <Typography variant='h6' gutterBottom component='div'>History</Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align='right'>Amount</TableCell>
                    <TableCell align='right'>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell component='th' scope='row'>{historyRow.date}</TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align='right'>{historyRow.amount}</TableCell>
                      <TableCell align='right'>{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5)
]

const TableCollapsible = () => {
  return (
    <TableContainer>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align='right'>Calories</TableCell>
            <TableCell align='right'>Fat (g)</TableCell>
            <TableCell align='right'>Carbs (g)</TableCell>
            <TableCell align='right'>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCollapsible
