// MUI Imports
import Card from '@mui/material/Card'

// import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

type Props = {
  searchValue: string
  setSearchValue: (value: string) => void
}

const FaqHeader = ({ searchValue, setSearchValue }: Props) => {
  return (
    <Card className='bg-cover' elevation={0}>
      <CardContent className='flex flex-col items-center is-full text-center'>
        <Typography>Hello, how can we help?</Typography>
        <Typography>or choose a category to quickly find the help you need</Typography>
        <TextField
          className='is-full sm:max-is-[55%] md:max-is-[600px]'
          variant='outlined'
          placeholder='Ask a question...'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <i className='ri-search-line' />
              </InputAdornment>
            )
          }}
        />
      </CardContent>
    </Card>
  )
}

export default FaqHeader
