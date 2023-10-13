// MUI Imports
import Card from '@mui/material/Card'

// import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './styles.module.css'

type Props = {
  searchValue: string
  setSearchValue: (value: string) => void
}

const FaqHeader = ({ searchValue, setSearchValue }: Props) => {
  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Card className='bg-cover' elevation={0}>
      <CardContent className='flex flex-col items-center w-full text-center'>
        <Typography>Hello, how can we help?</Typography>
        <Typography>or choose a category to quickly find the help you need</Typography>
        <TextField
          fullWidth
          className={classnames(styles.searchBar, {
            [styles.inputWidth]: isBelowMdScreen,
            '!max-w-full': isBelowSmScreen
          })}
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
