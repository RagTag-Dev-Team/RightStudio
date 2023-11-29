// MUI Imports
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Autocomplete from '@mui/material/Autocomplete'

// Data Imports
import { top100Films } from '../../../data/top100films'

const AutocompleteVariants = () => {
  return (
    <Card>
      <CardHeader title='Autocomplete Variants' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <div className='flex gap-4 flex-col'>
              <div className='flex gap-4 flex-wrap flex-col'>
                <Autocomplete
                  options={top100Films}
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => <TextField {...params} label='Combo box' />}
                />
                <Autocomplete
                  options={top100Films}
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => <TextField {...params} label='Combo box' variant='filled' />}
                />
                <Autocomplete
                  options={top100Films}
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => <TextField {...params} label='Combo box' variant='standard' />}
                />
              </div>
              <div className='flex gap-4 flex-col flex-wrap'>
                <Autocomplete
                  disabled
                  options={top100Films}
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => <TextField {...params} label='Disabled' />}
                />
                <Autocomplete
                  disabled
                  options={top100Films}
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => <TextField {...params} label='Disabled' variant='filled' />}
                />
                <Autocomplete
                  disabled
                  options={top100Films}
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => <TextField {...params} label='Disabled' variant='standard' />}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h6'>Multiple Values</Typography>
              <div className='flex gap-5 flex-col flex-wrap'>
                <Autocomplete
                  multiple
                  options={top100Films}
                  filterSelectedOptions
                  defaultValue={[top100Films[13]]}
                  getOptionLabel={option => option.title || ''}
                  className='mbs-5'
                  renderInput={params => <TextField {...params} label='filterSelectedOptions' placeholder='Favorites' />}
                />
                <Autocomplete
                  freeSolo
                  multiple
                  defaultValue={[top100Films[13].title]}
                  options={top100Films.map(option => option.title || '')}
                  renderInput={params => <TextField {...params} variant='filled' label='freeSolo' placeholder='Favorites' />}
                  renderTags={(value: string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                      <Chip variant='outlined' label={option} {...(getTagProps({ index }) as {})} key={index} />
                    ))
                  }
                />
                <Autocomplete
                  multiple
                  options={top100Films}
                  defaultValue={[top100Films[13]]}
                  getOptionLabel={option => option.title || ''}
                  renderInput={params => (
                    <TextField {...params} label='Multiple values' placeholder='Favorites' variant='standard' />
                  )}
                />
              </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' className='mbe-4'>
            Small Size
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
                size='small'
                options={top100Films}
                defaultValue={top100Films[13]}
                getOptionLabel={option => option.title || ''}
                renderInput={params => <TextField {...params} label='Size small' placeholder='Favorites' />}
              />
              <Autocomplete
                multiple
                size='small'
                className='mbs-5'
                options={top100Films}
                defaultValue={[top100Films[13]]}
                getOptionLabel={option => option.title || ''}
                renderInput={params => <TextField {...params} label='Size small' placeholder='Favorites' />}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              size='small'
              options={top100Films}
              defaultValue={top100Films[13]}
              getOptionLabel={option => option.title || ''}
              renderInput={params => (
                <TextField {...params} variant='filled' label='Size small' placeholder='Favorites' />
              )}
            />
            <Autocomplete
              multiple
              size='small'
              className='mbs-5'
              defaultValue={[top100Films[13].title]}
              options={top100Films.map(option => option.title || '')}
              renderInput={params => (
                <TextField {...params} variant='filled' label='Size small' placeholder='Favorites' />
              )}
              renderTags={(value: string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip variant='outlined' label={option} {...(getTagProps({ index }) as any)} key={index} />
                ))
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              size='small'
              options={top100Films}
              defaultValue={top100Films[13]}
              getOptionLabel={option => option.title || ''}
              renderInput={params => (
                <TextField {...params} variant='standard' label='Size small' placeholder='Favorites' />
              )}
            />
            <Autocomplete
              multiple
              size='small'
              className='mbs-5'
              options={top100Films}
              defaultValue={[top100Films[13]]}
              getOptionLabel={option => option.title || ''}
              renderInput={params => (
                <TextField {...params} variant='standard' label='Size small' placeholder='Favorites' />
              )}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AutocompleteVariants
