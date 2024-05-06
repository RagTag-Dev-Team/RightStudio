// MUI Imports
import Typography from '@mui/material/Typography'
import CustomIconButton from '@core/components/mui/IconButton'

const  CustomIconButtons= () => {
  return (
    <div className='flex gap-4 flex-col'>
      <div className='flex flex-col gap-2'>
				<Typography className='font-medium'>Sizes</Typography>
				<div className='flex gap-4 items-center flex-wrap'>
					<CustomIconButton aria-label='capture screenshot' color='primary' size='small'>
						<i className='tabler-aperture' />
					</CustomIconButton>
					<CustomIconButton aria-label='capture screenshot' color='primary'>
						<i className='tabler-aperture' />
					</CustomIconButton>
					<CustomIconButton aria-label='capture screenshot' color='primary' size='large'>
						<i className='tabler-aperture' />
					</CustomIconButton>
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<Typography className='font-medium'>Colors</Typography>
				<div className='flex flex-col gap-4'>
					<div className='flex gap-4 items-center flex-wrap'>
						<CustomIconButton aria-label='capture screenshot'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='primary'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='secondary'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='error'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='warning'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='info'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='success'>
							<i className='tabler-aperture' />
						</CustomIconButton>
					</div>
					<div className='flex gap-4 items-center flex-wrap'>
						<CustomIconButton aria-label='capture screenshot' variant='outlined'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='primary' variant='outlined'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='secondary' variant='outlined'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='error' variant='outlined'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='warning' variant='outlined'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='info' variant='outlined'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='success' variant='outlined'>
							<i className='tabler-aperture' />
						</CustomIconButton>
					</div>
					<div className='flex gap-4 items-center flex-wrap'>
						<CustomIconButton aria-label='capture screenshot' variant='tonal'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='primary' variant='tonal'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='secondary' variant='tonal'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='error' variant='tonal'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='warning' variant='tonal'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='info' variant='tonal'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='success' variant='tonal'>
							<i className='tabler-aperture' />
						</CustomIconButton>
					</div>
					<div className='flex gap-4 items-center flex-wrap'>
						<CustomIconButton aria-label='capture screenshot' variant='contained'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='primary' variant='contained'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='secondary' variant='contained'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='error' variant='contained'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='warning' variant='contained'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='info' variant='contained'>
							<i className='tabler-aperture' />
						</CustomIconButton>
						<CustomIconButton aria-label='capture screenshot' color='success' variant='contained'>
							<i className='tabler-aperture' />
						</CustomIconButton>
					</div>
				</div>
			</div>
    </div>
  )
}

export default CustomIconButtons
