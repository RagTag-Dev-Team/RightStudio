// MUI Imports
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const ChipsOnDelete = () => {
  const handleDelete = () => {
    // eslint-disable-next-line no-console
    console.info('You clicked the delete icon.')
  }

  return (
    <div className='flex gap-4 flex-col'>
      <Typography className='font-medium'>Default</Typography>
      <div className='flex gap-4'>
        <Chip label='Basic' variant='outlined' onDelete={handleDelete} />
        <Chip label='Primary' color='primary' variant='outlined' onDelete={handleDelete} />
        <Chip label='Secondary' color='secondary' variant='outlined' onDelete={handleDelete} />
      </div>
      <Typography className='font-medium'>Custom</Typography>
      <div className='flex gap-4'>
        <Chip label='Basic' onDelete={handleDelete} deleteIcon={<i className='tabler-trash-x' />} />
        <Chip label='Primary' color='primary' onDelete={handleDelete} deleteIcon={<i className='tabler-trash-x' />} />
        <Chip
          label='Secondary'
          color='secondary'
          onDelete={handleDelete}
          deleteIcon={<i className='tabler-trash-x' />}
        />
      </div>
      <Typography className='font-medium' color='text.primary'>Custom close with Tonal Variant</Typography>
      <div className='flex gap-4'>
        <Chip
          label='Default'
          variant='tonal'
          onDelete={handleDelete}
          deleteIcon={<i className='tabler-trash' />}
        />
        <Chip
          label='Primary'
          color='primary'
          variant='tonal'
          onDelete={handleDelete}
          deleteIcon={<i className='tabler-trash' />}
        />
        <Chip
          label='Secondary'
          color='secondary'
          variant='tonal' onDelete={handleDelete}
          deleteIcon={<i className='tabler-trash' />}
        />
      </div>
      <Typography className='font-medium' color='text.primary'>Custom close with Tonal Variant</Typography>
      <div className='flex gap-4'>
        <Chip
          label='Default'
          variant='tonal'
          onDelete={handleDelete}
          deleteIcon={<i className='ri-delete-bin-5-line' />}
        />
        <Chip
          label='Primary'
          color='primary'
          variant='tonal'
          onDelete={handleDelete}
          deleteIcon={<i className='ri-delete-bin-5-line' />}
        />
        <Chip
          label='Secondary'
          color='secondary'
          variant='tonal' onDelete={handleDelete}
          deleteIcon={<i className='ri-delete-bin-5-line' />}
        />
      </div>
    </div>
  )
}

export default ChipsOnDelete
